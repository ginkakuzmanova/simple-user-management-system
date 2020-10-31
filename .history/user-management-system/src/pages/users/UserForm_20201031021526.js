import React from "react";
import { Button, Card } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import { UserValidationSchema } from "../../validation/userSchema";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/usersSlice";
import {copyUsers} from "../../store/copySlice";
import { useHistory } from "react-router-dom";
import Notification from "../../components/Notification"

export default function UserForm() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const history = useHistory();
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });
  return (
    <Card variant='outlined'>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values, { resetForm }) => {
          try {
            dispatch(addUser(values));
            dispatch(copyUsers())
            setNotify({
              isOpen: true,
              message: "User created successfully.",
              type: "success",
            });
            resetForm({ values: "" });
          } catch (error) {
            resetForm({ values: "" });
          }
        }}
        validationSchema={UserValidationSchema}
      >
        {({ isValid, isSubmitting }) => {
          return (
            <Form>
              <Field
                component={TextField}
                type='text'
                name='firstName'
                label='First Name'
              />
              <br />
              <Field
                component={TextField}
                type='text'
                name='lastName'
                label='Last Name'
              />
              <br />
              <Field
                component={TextField}
                type='text'
                name='email'
                label='Email'
              />
              <br />
              <br />
              <Button
                style={{ marginBottom: "20px" }}
                variant='outlined'
                color='primary'
                type='submit'
                disabled={!isValid || isSubmitting}
              >
                Submit
              </Button>
              <Button
                style={{ marginBottom: "20px", marginLeft: "1em" }}
                variant='outlined'
                color='primary'
                onClick={() => history.push("/")}
              >
                Back
              </Button>
            </Form>
          );
        }}
      </Formik>
      <Notification
                notify={notify}
                setNotify={setNotify}
            />
    </Card>
  );
}
