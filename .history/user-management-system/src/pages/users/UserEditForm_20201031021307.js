import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import { UserValidationSchema } from "../../validation/userSchema";
import { editUser } from "../../store/usersSlice";

export default function UserEditForm(props) {
  const { recordForEdit } = props;
  const dispatch = useDispatch();
  const users =  useSelector(state => state.users)
  return (
    <Card
      variant='outlined'
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Formik
        initialValues={{
          id: recordForEdit.id,
          firstName: recordForEdit.firstName,
          lastName: recordForEdit.lastName,
          email: recordForEdit.email,
        }}
        onSubmit={(values, { resetForm }) => {
          try {
            dispatch(editUser(values));
            dispatch(co)
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
                style={{ marginBottom: "20px", marginLeft: "56px" }}
                variant='outlined'
                type='submit'
                color='primary'
                disabled={!isValid || isSubmitting}
              >
                Edit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}
