import React from 'react'
import Button from "@mui/material/Button";


import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getTagsById,
  editTags,
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

const EditTags = () => {

  const classes = useStyles();
  const [page, setPage] = useState(0); // Thêm state cho trang hiện tại
  const navigate = useNavigate();

  const [icon, setTagsIcon] = useState("");
  const [name, setTagsName] = useState("");
  const { id: idTags } = useParams();
  const [checkUpdate, setCheckUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tag = await getTagsById("tags", idTags);
        console.log(tag.data);
        setTagsIcon(tag.data.icon);
        setTagsName(tag.data.name);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [idTags]);

  useEffect(() => {
    if (checkUpdate) {
      const timeout = setTimeout(() => {
        navigate("/base/tag/list");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      // Xóa timeout khi component unmount hoặc khi checkUpdate thay đổi
      return () => clearTimeout(timeout);
    }
  }, [checkUpdate, navigate]);

  const handleEditTag = async (event) => {
    event.preventDefault();

    if (
      icon !== "" &&
      name !== ""
    ) {
      const tag = {
        icon,
        name,

      };
      console.log(tag);
      try {
        const editedTag = await editTags(
          `tags/${idTags}`,
          tag
        );
        if (editedTag.status === 200) {

          setCheckUpdate(true);

        } else {
          alert("Bạn chưa nhập đủ thông tin!");
        }
      } catch (error) {
        console.error("Error editing tag:", error);
      }
    }
  };

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Edit Tag
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
                  onClick={handleEditTag}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Update tag
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </div>
  )
}

export default EditTags
