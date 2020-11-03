import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState } from "react";
import axiosInstance from "../services/axios";
import { useHistory } from "react-router-dom";

interface Values {
  email: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 4) {
          errors.password = "Password length must be greater than 4 characters";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setErrorMessage("");
        axiosInstance
          .post(`user/login`, {
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            sessionStorage.setItem("access_token", res.data.access);
            sessionStorage.setItem("refresh_token", res.data.refresh);
            axiosInstance.defaults.headers["authorization"] =
              "JWT " + sessionStorage.getItem("access_token");
            props.setLoggedIn(true);
          })
          .then(() => {
            axiosInstance.get("user/profile").then((data) => {
              props.setProfile(data.data);
            });
          })
          .then(() => {
            history.push("/");
          })
          .catch((err) => {
            setErrorMessage("The email and password do not match our records");
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
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <form
              className={classes.form}
              onSubmit={submitForm}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitForm();
                }
              }}
            >
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email Address"
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
              />
              <br />
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
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
                Submit
              </Button>
            </form>
          </div>
        </Container>
      )}
    </Formik>
  );
}
