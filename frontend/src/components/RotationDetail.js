import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import LoadingComponent from "./LoadingLinear";
import BasicTable from "./Table";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    padding: "1rem",
    marginBottom: "1rem",
  },
});

export default function RotationDetail(props) {
  const { id } = useParams();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const headers = [
    "ID",
    "Start Date",
    "End Date",
    "Employee name",
    "Manager name",
    "Notification Type",
    "Message",
    "Response",
    "Completed",
  ];
  const Loading = LoadingComponent(BasicTable);

  function conditional(text) {
    if (text === "ACCEPT") {
      return "green";
    } else if (text === "DECLINE") {
      return "red";
    } else {
      return null;
    }
  }

  useEffect(() => {
    axiosInstance.get(`notification/rotation/${id}`).then((data) => {
      const rows = data.data.map((row) => {
        row["completed"] = row["completed"] ? "Yes" : "No";
        delete row.is_manager;
        return row;
      });
      setRows(rows);
      setLoading(false);
    });
  }, [id]);

  return (
    <Container>
      <Typography variant="h3" className={classes.header}>
        Rotation Detail
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
