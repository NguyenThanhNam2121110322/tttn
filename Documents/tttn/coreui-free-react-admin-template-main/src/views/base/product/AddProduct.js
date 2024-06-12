import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getAllCategories, addProduct } from "../../../api/apiService";
import MenuItem from "@mui/material/MenuItem";
import ImageUploader from "./ImageUploader";
import { Image } from "react-bootstrap";
import { convertLength } from "@mui/material/styles/cssUtils";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 600,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  txtInput: {
    width: "98%",
    margin: "10px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const [checkAdd, setCheckAdd] = useState(false);
  const [productName, setProductName] = useState("");
  const [regularPrice, setRegularPrice] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [comparePrice, setComparePrice] = useState(null);
  const [published, setPublished] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [sku, setSKU] = useState("");
  const [productNote, setProductNote] = useState("");
  const [productWeight, setProductWeight] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryAll, setCategoryAll] = useState([]);
  const [tagAll, setTagAll] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const navigate = useNavigate();

  const handleQuantityChange = (event) => {
   const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    } 
  };  

  const handleWeightChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setProductWeight(value);
    }
  };  



  const handleResetImages = () => {
    setSelectedImages([]);
    setImageFiles([]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getAllCategories("categories");
        setCategoryAll(categoryData.data);
        const tagData = await getAllCategories("tags");
        setTagAll(tagData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUploadImages = async (id) => {
    const formData = new FormData();
    imageFiles.forEach((image) => {
      formData.append("files", image);
    });
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      const response = await axios.post(
        `http://localhost:8080/api/galleries/uploadImages/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Đặt header Content-Type là multipart/form-data
          },
        }
      );

      console.log("added ga", response);
      if (response.status === 200) {
        setCheckAdd(true); // Nếu upload thành công, setCheckAdd thành true
      } else {
        alert("Bạn chưa nhập đủ thông tin!"); // Nếu có lỗi, hiển thị thông báo
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Đã xảy ra lỗi khi upload ảnh!"); // Xử lý khi có lỗi xảy ra trong quá trình upload
    }
  };
  const handleAddProduct = (event) => {
    event.preventDefault();

    if (
      productName !== "" &&
      productDescription !== "" &&
      regularPrice !== 0 &&
      discountPrice !== 0 
      &&
      categories.length > 0
    ) {
      const product = {
        productName,
        productDescription,
        shortDescription,
        productNote,
        sku,
        regularPrice,
        discountPrice,
        quantity,
        productWeight,
        published,
        categories: categories.map((c) => ({ id: c })),
        tags: tags.map((c) => ({ id: c })),
      };
      console.log(product);
      console.log("images", selectedImages);
      addProduct("products", product).then((item) => {
        console.log("added", item);
        if (item.status === 201) {
          handleUploadImages(item.data.id);
          setCheckAdd(true);
        } else {
          alert("Bạn chưa nhập đủ thông tin!");
        }
      });
    } else {
      alert("Bạn chưa nhập đủ thông tin!");
    }
  };
  useEffect(() => {
    if (checkAdd) {
      const timeout = setTimeout(() => {
        navigate("/base/product/list");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      // Xóa timeout khi component unmount hoặc khi checkUpdate thay đổi
      return () => clearTimeout(timeout);
    }
  }, [checkAdd, navigate]);
  const handleChangeCategories = (event) => {
    const selectedIds = event.target.value;
    console.log(selectedIds);
    setCategories(selectedIds);
  };
  const handleChangeTags = (event) => {
    const selectedIds = event.target.value;
    setTags(selectedIds);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const imagesArray = [];
    const filesArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        imagesArray.push(reader.result);
        if (imagesArray.length === files.length) {
          setSelectedImages([...selectedImages, ...imagesArray]); // Cập nhật mảng hiển thị hình ảnh
          setImageFiles([...imageFiles, ...filesArray]); // Cập nhật mảng các file hình ảnh

          // Sắp xếp lại mảng selectedImages để đảm bảo thứ tự đún
        }
      };

      if (file) {
        reader.readAsDataURL(file);
        filesArray.push(file); // Thêm file vào mảng các file
      }
    }
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Add Product
            </Typography>
            <Grid item xs={12} container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Title
                </Typography>
                <TextField
                 placeholder="Title"
                  id="title"
                  onChange={(e) => setProductName(e.target.value)}
                  // value={productName}
                  name="title"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Body
                </Typography>
                <TextField
                 placeholder="Body"
                  id="productDescription"
                  onChange={(e) => setProductDescription(e.target.value)}
                  // value={productDescription}
                  name="productDescription"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle2">
                  Short Desription
                </Typography>
                <TextField
                 placeholder="Short Description"
                  id="shortDescription"
                  onChange={(e) => setShortDescription(e.target.value)}
                  // value={productDescription}
                  name="shortDescription"
                  className={classes.txtInput}
                  multiline
                  rows={2}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle2">
                    SKU
                </Typography>
                <TextField
                 placeholder="SKU"
                  id="sku"
                  onChange={(e) => setSKU(e.target.value)}
                  // value={productDescription}
                  name="sku"
                  className={classes.txtInput}
                  multiline
                  rows={2}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle2">
                  Note
                </Typography>
                <TextField
                 placeholder="Note"
                  id="productNote"
                  onChange={(e) => setProductNote(e.target.value)}
                  // value={productDescription}
                  name="productNote"
                  className={classes.txtInput}
                  multiline
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Regular Price
                </Typography>
                <TextField
                  id="regularPrice"
                  placeholder="Regular Price"
                  onChange={(e) => setRegularPrice(e.target.value)}
                  // value={regularPrice}
                  name="regularPrice"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Discount Price
                </Typography>
                <TextField
                  id="discountPrice"
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  // value={discountPrice}
                  name="discountPrice"
                  placeholder="Discount Price"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>


              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Quantity
                </Typography>
                <TextField
                  type="number" value={quantity} onChange={handleQuantityChange}
                  name="quantity"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Weight
                </Typography>
                <TextField
                  type="number" value={productWeight} onChange={handleWeightChange}
                  name="weight"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
  <Typography gutterBottom variant="subtitle1">
    Published
  </Typography>
  <TextField
    id="published"
    select
    value={published}
    onChange={(e) => setPublished(e.target.value)}
    variant="outlined"
    className={classes.txtInput}
    size="small"
  >
    <MenuItem value={true}>Yes</MenuItem>
    <MenuItem value={false}>No</MenuItem>
  </TextField>
</Grid>


              
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Choose Category
                </Typography>
                <TextField
                  id="categories"
                  name="categories"
        
                  select
                  value={categories}
                  onChange={handleChangeCategories}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) => {
                      const selectedCategories = selected.map((id) => {
                        const category = categoryAll.find(
                          (category) => category.id === id
                        );
                        return category ? category.categoryName : "";
                      });
                      return selectedCategories.join(", ");
                    },
                  }}
                  variant="outlined"
                  className={classes.txtInput}
                >
                  {categoryAll.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.categoryName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Choose Tags
                </Typography>
                <TextField
                  id="tags"
                  name="tags"
                  select
                  value={tags}
                  onChange={handleChangeTags}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) => {
                      const selectedCategories = selected.map((id) => {
                        const category = tagAll.find(
                          (category) => category.id === id
                        );
                        return category ? category.name : "";
                      });
                      return selectedCategories.join(", ");
                    },
                  }}
                  variant="outlined"
                  className={classes.txtInput}
                >
                  {tagAll.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="imageInput"
                />
                <label htmlFor="imageInput">
                  <Button component="span">Choose Images</Button>
                  <Button
                    type="button"
                    onClick={handleResetImages}
                    fullWidth
                    color="success"
                    className={classes.submit}
                  >
                    Reset Images
                  </Button>
                </label>

                {selectedImages.map((image, index) => (
                  <div key={index}>
                    <Image src={image} alt={`Selected ${index}`} width={80} />
                  </div>
                ))}
              </div>
              <Grid item xs={12} style={{ marginTop: "30px" }}>
                <Button
                  type="button"
                  onClick={handleAddProduct}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add product
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
