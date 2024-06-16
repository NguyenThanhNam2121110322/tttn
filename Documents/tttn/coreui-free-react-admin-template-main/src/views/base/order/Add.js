import React from 'react'
import Button from "@mui/material/Button";


import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  addOrders,
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

  const [firstName, setOrdersFirstName] = useState("");
  const [lastName, setOrdersLastName] = useState("");
  const [phone, setOrdersPhone] = useState("");
  const [email, setOrdersEmail] = useState("");
  const [passwordHash, setOrdersPasswordstName] = useState("")

const [checkAdd, setCheckAdd] = useState(false);



  useEffect(() => {
    if (checkAdd) {
      const timeout = setTimeout(() => {
        navigate("/base/order/list");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      return () => clearTimeout(timeout);
    }
  }, [checkAdd, navigate]);


  const handleAddOrder = (event) => {
    event.preventDefault();

    if (
      firstName !== "" &&
      lastName !== "" &&
      phone !== "" &&
      email !== "" &&
      passwordHash !== ""
    ) {
      const order = {
        firstName,
        lastName,
        phone,
        email,
        passwordHash,

      };


      addOrders("orders", order).then((item) => {
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
                  First_name
                </Typography>
                <TextField
                  id="name"
                  onChange={(e) => setOrdersFirstName(e.target.value)}
                  value={firstName}
                  name="name"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                Last_name
                </Typography>
                <TextField
                  id="icon"
                  onChange={(e) => setOrdersLastName(e.target.value)}
                  value={lastName}
                  name="icon"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                Email
                </Typography>
                <TextField
                  id="icon"
                  onChange={(e) => setOrdersEmail(e.target.value)}
                  value={email}
                  name="icon"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                Password
                </Typography>
                <TextField
                  id="icon"
                  onChange={(e) => setOrdersPasswordstName(e.target.value)}
                  value={passwordHash}
                  name="icon"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                Phone
                </Typography>
                <TextField
                  id="icon"
                  onChange={(e) => setOrdersPhone(e.target.value)}
                  value={phone}
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
