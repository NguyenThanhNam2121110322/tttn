import React from 'react'
import Button from "@mui/material/Button";


import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  addTags,
} from "../../../api/TagsService";

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

const AddTag = () => {

  const classes = useStyles();
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const navigate = useNavigate();

  const [icon, setTagsIcon] = useState("");
  const [name, setTagsName] = useState("");
//   const { id: idTags } = useParams();
const [checkAdd, setCheckAdd] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const tag = await getTagsById("tags", idTags);
//         console.log(tag.data);
//         setTagsIcon(tag.data.icon);
//         setTagsName(tag.data.name);

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [idTags]);

  useEffect(() => {
    if (checkAdd) {
      const timeout = setTimeout(() => {
        navigate("/base/tag/list");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      return () => clearTimeout(timeout);
    }
  }, [checkAdd, navigate]);


  const handleAddTag = (event) => {
    event.preventDefault();

    if (
        icon !== "" &&
        name !== ""
    ) {
        const tag = {
            icon,
            name
    
          };
      
      
      addTags("tags", tag).then((item) => {
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
              Add Tag
            </Typography>
            <Grid item xs={12} container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Name
                </Typography>
                <TextField
                  id="name"
                  onChange={(e) => setTagsName(e.target.value)}
                  value={name}
                  name="name"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Icon
                </Typography>
                <TextField
                  id="icon"
                  onChange={(e) => setTagsIcon(e.target.value)}
                  value={icon}
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
                  onClick={handleAddTag}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add tag
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </div>
  )
}

export default AddTag
