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

export default function Profile(props) {
    const classes = useStyles();
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");


    return (

        <Formik
            initialValues={{
                phoneNumber: props.profile.phone_number,
                allow_notifications: props.profile.allow_notifications
            }}
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
                console.log(values)
                axiosInstance
                    .put(`/user/profile`, {
                        phone_number: values.phoneNumber,
                        allow_notifications: values.notify,

                    }).then(() => props.setProfile({
                        ...props.profile,
                        phone_number: values.phoneNumber,
                        allow_notifications: values.notify
                    }))
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

