import React from "react";
import { Button, Card } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import { UserValidationSchema } from "../../validation/userSchema";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/usersSlice";

export default function UserForm() {
  const dispatch = useDispatch();
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
            console.log(values);
            // dispatch(addUser(values));
            resetForm({ values: "" });
          } catch (ok) {}
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
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}
