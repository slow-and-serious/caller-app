import {
    Button,
    Checkbox,
    Container,
    CssBaseline,
    LinearProgress,
    Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axios";
import { useHistory } from "react-router-dom";

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

export default function Profile() {
    const classes = useStyles();
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");


    return (

        <Formik
            // initialValues={(values) => {
            //     axiosInstance.get("/api/v1/profile")
            //         .then(res => {
            //             let pn = res.data.phone_number
            //             let an = res.data.allow_notifications
            //         })
            //     phoneNumber: pn
            //     allow_notifications: an
            // }}
            validate={(values) => {
                const errors: Partial<Values> = {};
                if (!values.phoneNumber) {
                    errors.phoneNumber = "xxx-xxx-xxxx";
                } else if (
                    !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(values.phoneNumber)
                ) {
                    errors.phoneNumber = "Invalid Phone Number";
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setErrorMessage("");
                axiosInstance
                    .post(`/profile`, {
                        phoneNumber: values.phoneNumber,
                        password: values.password,
                    })
                    .then((res) => {
                        sessionStorage.setItem("phone_number", res.data.phone_number);
                        sessionStorage.setItem("True", res.data.allow_notifications);
                        axiosInstance.defaults.headers["Authorization"] =
                            "JWT " + sessionStorage.getItem("access_token");
                    })
                    .then(() => {
                        history.push("/");
                        window.location.reload();
                    })
                    .catch((err) => {
                        setErrorMessage("Your preferences could not be changed");
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

                        <Typography component="h1" variant="h5">
                            Profile Preferences
            </Typography>
                        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                        <Form className={classes.form}>
                            <Field
                                component={TextField}
                                name="phoneNumber"
                                type="phoneNumber"
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
                                name="notify"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                            />Notify
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
};

