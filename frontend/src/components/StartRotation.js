import {
  Button,
  Container,
  CssBaseline,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import LoadingComponent from "./LoadingLinear";
import BasicTable from "./Table";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    padding: "1rem",
    marginBottom: "1rem",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function StartRotation() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const history = useHistory();

  const headers = [
    "ID",
    "First Name",
    "Last Name",
    "Email",
    "Phone Number",
    "Allow Notifications",
  ];
  const Loading = LoadingComponent(BasicTable);

  useEffect(() => {
    axiosInstance.get("user/list").then((data) => {
      const rows = data.data.map((row) => {
        row["allow_notifications"] = row["allow_notifications"] ? "Yes" : "No";
        delete row.is_manager;
        return row;
      });
      setRows(rows);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h3" className={classes.header}>
        Start Rotation
      </Typography>
      <Loading isLoading={loading} rows={rows} headers={headers} />

      <Formik
        initialValues={{
          message: "",
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (!values.message) {
            errors.message = "Required";
          } else if (values.message.length < 10) {
            errors.message =
              "Message length must be greater than 10 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axiosInstance
            .post(`notification/start-rotation`, {
              message: `${values.message}. Press 1 for yes and 2 for no`,
            })
            .then((res) => {
              console.log(res.data);
              history.push(`/rotation-detail/${res.data}`);
            })
            .catch((err) => {
              console.log(err);
            });
          setTimeout(() => {
            setSubmitting(false);
          }, 800);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Form className={classes.form}>
                <Field
                  component={TextField}
                  name="message"
                  type="message"
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  multiline={true}
                  fullWidth
                  autoFocus
                />
                <br />
                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Notify Employees
                </Button>
              </Form>
            </div>
          </Container>
        )}
      </Formik>
    </Container>
  );
}
