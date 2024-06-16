import React from 'react'
import Button from "@mui/material/Button";


import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getCustomersById,
  editCustomers,
} from "../../../api/CustomerService";

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

const EditCustomers = () => {

  const classes = useStyles();
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const navigate = useNavigate();

  const [firstName, setCustomersFirstName] = useState("");
  const [lastName, setCustomersLastName] = useState("");
  const [phone, setCustomersPhone] = useState("");
  const [email, setCustomersEmail] = useState("");
  const [passwordHash, setCustomersPasswordstName] = useState("");
  const { id: idCustomers } = useParams();
  const [checkUpdate, setCheckUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customer = await getCustomersById("customers", idCustomers);
        console.log(customer.data);
        setCustomersFirstName(customer.data.firstName);
        setCustomersLastName(customer.data.lastName);
        setCustomersPhone(customer.data.phone);
        setCustomersEmail(customer.data.email);
        setCustomersPasswordstName(customer.data.passwordHash);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [idCustomers]);

  useEffect(() => {
    if (checkUpdate) {
      const timeout = setTimeout(() => {
        navigate("/base/customer/list");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      // Xóa timeout khi component unmount hoặc khi checkUpdate thay đổi
      return () => clearTimeout(timeout);
    }
  }, [checkUpdate, navigate]);

  const handleEditCustomer = async (event) => {
    event.preventDefault();

    if (
      firstName !== "" &&
      lastName !== "" &&
      phone !== "" &&
      email !== "" &&
      passwordHash !== ""
    ) {
      const customer = {
        firstName,
        lastName,
        phone,
        email,
        passwordHash,

      };
      console.log(customer);
      try {
        const editedCustomer = await editCustomers(
          `customers/${idCustomers}`,
          customer
        );
        if (editedCustomer.status === 200) {

          setCheckUpdate(true);

        } else {
          alert("Bạn chưa nhập đủ thông tin!");
        }
      } catch (error) {
        console.error("Error editing customer:", error);
      }
    }
  };

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Edit Customer
            </Typography>
            <Grid item xs={12} container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  First_name
                </Typography>
                <TextField
                  id="name"
                  onChange={(e) => setCustomersFirstName(e.target.value)}
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
                  onChange={(e) => setCustomersLastName(e.target.value)}
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
                  onChange={(e) => setCustomersEmail(e.target.value)}
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
                  onChange={(e) => setCustomersPasswordstName(e.target.value)}
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
                  onChange={(e) => setCustomersPhone(e.target.value)}
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
                  onClick={handleEditCustomer}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Update Customer
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </div>
  )
}

export default EditCustomers
