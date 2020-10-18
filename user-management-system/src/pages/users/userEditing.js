import React, { Fragment } from "react";
import FormHeader from "../../components/FormHeader";
import { PeopleAltRounded } from "@material-ui/icons";
import UserEditForm from "./userEditForm";

export default function UserEditing() {
  return (
    <Fragment>
      <FormHeader
        title='Edit User'
        subTitle='Please edit user details'
        icon={<PeopleAltRounded />}
      ></FormHeader>
      <UserEditForm />
    </Fragment>
  );
}
