import {
  Button,
  Container,
  CssBaseline,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { Field, Form, Formik } from "formik";
import { Checkbox, TextField } from "formik-material-ui";
import React, { useState } from "react";
import axiosInstance from "../services/axios";

interface Values {
  phoneNumber: string;
}

const useStyles = makeStyles((theme) => ({
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
  input: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Formik
      initialValues={{
        phone_number: props.profile.phone_number,
        allow_notifications: props.profile.allow_notifications,
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.phone_number) {
          errors.phone_number = "xxx-xxx-xxxx";
        } else if (
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
            values.phone_number
          )
        ) {
          errors.phone_number = "Invalid Phone Number";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setErrorMessage("");
        console.log(values);
        axiosInstance
          .put(`/user/profile`, {
            phone_number: values.phone_number,
            allow_notifications: values.allow_notifications,
          })
          .then(() =>
            props.setProfile({
              ...props.profile,
              phone_number: values.phone_number,
              allow_notifications: values.allow_notifications,
            })
          )
          .catch((err) => {
            setErrorMessage("Your preferences could not be changed");
          });
        setTimeout(() => {
          setSubmitting(false);
        }, 800);
      }}
    >
      {({ submitForm, isSubmitting, setFieldValue }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Profile Preferences
            </Typography>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <Form className={classes.form}>
              <Field
                component={TextField}
                name="phone_number"
                type="phone_number"
                label="Phone Number"
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
              />
              <br />
              <Field
                component={Checkbox}
                type="checkbox"
                name="allow_notifications"
                variant="outlined"
                margin="normal"
                // value={true}
                required
                fullWidth
                // checked={}
                // onChange={(e) =>
                //     setFieldValue("checked", "")
                // }
              />
              Notify
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
                Submit changes
              </Button>
            </Form>
          </div>
        </Container>
      )}
    </Formik>
  );
}
