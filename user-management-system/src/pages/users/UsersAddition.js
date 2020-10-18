import { PersonAddOutlined } from "@material-ui/icons";
import React, { Fragment } from "react";
import FormHeader from "../../components/FormHeader";
import UserForm from "./userForm";

export default function UsersAddition() {
  return (
    <Fragment>
      <FormHeader
        title='New User'
        subTitle='Please enter details about the user'
        icon={<PersonAddOutlined />}
      ></FormHeader>
  
      <UserForm />
    </Fragment>
  );
}
