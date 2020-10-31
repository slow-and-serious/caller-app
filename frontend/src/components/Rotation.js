import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import LoadingComponent from "./LoadingLinear";
import BasicTable from "./Table";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    padding: "1rem",
    marginBottom: '1rem',
  },
});

export default function Rotation() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const headers = [
    "ID",
    "Date",
    "Message",
    "Manager",
    "Number of calls"
  ];
  const Loading = LoadingComponent(BasicTable);

  useEffect(() => {
    axiosInstance.get("notification/rotation-history").then((data) => {
      setRows(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h3" className={classes.header}>Rotations</Typography>
      <Loading isLoading={loading} rows={rows} headers={headers} />
    </Container>
  );
}