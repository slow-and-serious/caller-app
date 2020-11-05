import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
// import Green from "./Green";
import LoadingComponent from "./LoadingLinear";
import BasicTable from "./Table";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    padding: "1rem",
    marginBottom: "1rem",
  },
});

export default function Notifications() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const headers = [
    "ID",
    "Start Date",
    "End Date",
    "Your name",
    "Manager",
    "Notification Type",
    "Message",
    "Your Response",
  ];
  const Loading = LoadingComponent(BasicTable);

  useEffect(() => {
    axiosInstance.get("notification/notification-history").then((data) => {
      const rows = data.data.filter((row) => row.completed);
      setRows(rows);
      setLoading(false);
    });
  }, []);

  function conditional(text) {
    if (text === "ACCEPT") {
      return "green";
    } else if (text === "DECLINE") {
      return "red";
    } else {
      return null;
    }
  }

  return (
    <Container>
      <Typography variant="h3" className={classes.header}>
        Notification History
      </Typography>
      <Loading
        isLoading={loading}
        rows={rows}
        headers={headers}
        conditional={conditional}
      />
    </Container>
  );
}
