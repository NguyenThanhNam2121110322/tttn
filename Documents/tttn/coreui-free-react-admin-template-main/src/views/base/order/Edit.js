import React from 'react'
import Button from "@mui/material/Button";


import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getOrdersById,
  editOrders,
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

const EditOrders = () => {

  const classes = useStyles();
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const navigate = useNavigate();

  const [quantity, setOrdersQuantity] = useState("");
  const [price, setOrdersPrice] = useState("");
  const [productId, setOrdersProductId] = useState("");
  const [customerId, setOrdersCustomerId] = useState("");

  const { id: idOrders } = useParams();
  const [checkUpdate, setCheckUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await getOrdersById("order-items", idOrders);
        console.log(order.data);
        setOrdersQuantity(order.data.quantity);
        setOrdersPrice(order.data.price);
        setOrdersProductId(order.data.productId);
        setOrdersCustomerId(order.data.customerId);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [idOrders]);

  useEffect(() => {
    if (checkUpdate) {
      const timeout = setTimeout(() => {
        navigate("/base/order/list");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      // Xóa timeout khi component unmount hoặc khi checkUpdate thay đổi
      return () => clearTimeout(timeout);
    }
  }, [checkUpdate, navigate]);

  const handleEditOrder = async (event) => {
    event.preventDefault();

    if (
      quantity !== "" &&
      price !== ""
    ) {
      const order = {
        quantity,
        price,

      };
      console.log(order);
      try {
        const editedOrder = await editOrders(
          `order-items/${idOrders}`,
          order
        );
        if (editedOrder.status === 200) {

          setCheckUpdate(true);

        } else {
          alert("Bạn chưa nhập đủ thông tin!");
        }
      } catch (error) {
        console.error("Error editing order:", error);
      }
    }
  };

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Edit Order
            </Typography>
            <Grid item xs={12} container>

            <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Product_Id
                </Typography>
                <TextField
                  id="name"
                  value={productId}
                  name="name"
                  variant="outlined"
                  size="small"
                  className={classes.txtInput}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Customer_Id
                </Typography>
                <TextField
                  id="name"
                  value={customerId}
                  name="name"
                  variant="outlined"
                  size="small"
                  className={classes.txtInput}
                  disabled
                />
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
                  onClick={handleEditOrder}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Update Order
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </div>
  )
}

export default EditOrders
