import React, { useEffect, useState } from "react";
import "../App.css";
import Items from "./Items";
import LoadingComponent from "./LoadingCircular";
import axiosInstance from "../services/axios";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    padding: "1rem",
    marginBottom: "1rem",
  },
});

export default function Landing() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography variant="h3" className={classes.header}>
        Landing page
      </Typography>
    </div>
  );
}
