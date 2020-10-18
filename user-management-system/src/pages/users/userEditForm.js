import React, { Fragment, useState } from "react";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import AutorenewIcon from "@material-ui/icons/Autorenew";
const UserEditForm = ({ userToEdit }) => {
  const [show, setShow] = useState(false);
  //TODO: FIX THE LOGIC FOR EDITING
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  return (
    <Fragment>
      <Button
        onClick={() => {
          showModal();
        }}
      >
        <AutorenewIcon />
      </Button>

      <Formik
        onSubmit={async (values, { resetForm }) => {
          console.log(values);

          closeModal();
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Form>
              <Modal.Body>
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
              </Modal.Body>

              <Modal.Footer>
                <Button
                  disabled={isSubmitting}
                  variant='primary'
                  block
                  type='submit'
                  fitContent
                  resizeable={false}
                >
                  Edit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        )}
      </Formik>
    </Fragment>
  );
};

export default UserEditForm;
