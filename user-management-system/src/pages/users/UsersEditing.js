import React, { Fragment } from "react";
import FormHeader from "../../components/FormHeader";
import { PeopleAltRounded } from "@material-ui/icons";
import UserEditForm from "./UserEditForm";

const UsersEditing = (props) => {
  const { recordForEdit } = props;
  return (
    <Fragment>
      <FormHeader
        title='Edit User'
        subTitle='Please edit user details'
        icon={<PeopleAltRounded />}
      ></FormHeader>
      <UserEditForm recordForEdit={recordForEdit} />
    </Fragment>
  );
};

export default UsersEditing;
