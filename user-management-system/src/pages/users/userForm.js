import React from "react";
import { TextField, Button, LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { UserValidationSchema } from "../../validation/userSchema";

export default function UserForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={UserValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name='firstName'
            type='text'
            label='First Name'
          />
          <br />
          <Field
            component={TextField}
            variant=""
            name='lastName'
            type='text'
            label='Last Name'
          />
          <br />
          <Field
            component={TextField}
            name='email'
            type='email'
            label='Email'
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <br />
          <Button
            variant='outlined'
            color='primary'
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
