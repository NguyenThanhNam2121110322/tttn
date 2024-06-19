import React from 'react'
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  addOrders,
  getAllProducts,
  getAllCustomers,
} from "../../../api/OrderService";

import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";


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

const AddOrder = () => {

  const classes = useStyles();
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const navigate = useNavigate();

  const [quantity, setOrdersQuantity] = useState("");
  const [price, setOrdersPrice] = useState("");
  const [productId, setOrdersProductId] = useState("");
  const [customerId, setOrdersCustomerId] = useState("");
  const [productAll, setProductAll] = useState([]);
  const [customerAll, setCustomerAll] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [checkAdd, setCheckAdd] = useState(false);



  useEffect(() => {
    if (checkAdd) {
      const timeout = setTimeout(() => {
        navigate("/base/order/list");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      return () => clearTimeout(timeout);
    }
  }, [checkAdd, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getAllProducts("products");
        setProductAll(productData.data);

        const customerData = await getAllCustomers("customers");
        setCustomerAll(customerData.data);
        console.log(customerData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleAddOrder = (event) => {
    event.preventDefault();

    if (

      price !== "" &&
      quantity !== ""
    ) {
      const order = {
        productId :products.join((c) => (c)),
        customerId :customers.join((c) => (c)),
        price,
        quantity,

      };


      addOrders("order-items", order).then((item) => {
        console.log("added", item);
        if (item.status === 201) {
          setCheckAdd(true);
        } else {
          alert("Bạn chưa nhập đủ thông tin!");
        }
      });
    } else {
      alert("Bạn chưa nhập đủ thông tin!");
    }
  };

  const handleChangeProducts = (event) => {
    const selectedIds = event.target.value;
    setProducts(selectedIds);
  };
  const handleChangeCustomers = (event) => {
    const selectedIds = event.target.value;
    setCustomers(selectedIds);
  };

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Add Order
            </Typography>
            <Grid item xs={12} container>

            <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Choose Product Name
                </Typography>
                <TextField
                  id="products"
                  name="products"
                  select
                  value={products}
                  onChange={handleChangeProducts}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) => {
                      const selectedCategories = selected.map((id) => {
                        const category = productAll.find(
                          (category) => category.id === id
                        );
                        return category ? category.productName : "";
                      });
                      return selectedCategories.join(", ");
                    },
                  }}
                  variant="outlined"
                  className={classes.txtInput}
                >
                  {productAll.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.productName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Choose Accounts
                </Typography>
                <TextField
                  id="customers"
                  name="customers"
                  select
                  value={customers}
                  onChange={handleChangeCustomers}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) => {
                      const selectedCategories = selected.map((id) => {
                        const category = customerAll.find(
                          (category) => category.id === id
                        );
                        return category ? category.email : "";
                      });
                      return selectedCategories.join(", ");
                    },
                  }}
                  variant="outlined"
                  className={classes.txtInput}
                >
                  {customerAll.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.email}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Quantity
                </Typography>
                <TextField
                  id="name"
                  onChange={(e) => setOrdersQuantity(e.target.value)}
                  value={quantity}
                  name="name"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Price
                </Typography>
                <TextField
                  id="icon"
                  onChange={(e) => setOrdersPrice(e.target.value)}
                  value={price}
                  name="icon"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} style={{ marginTop: "30px" }}>
                <Button
                  type="button"
                  onClick={handleAddOrder}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add Order
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </div>
  )
}

export default AddOrder
