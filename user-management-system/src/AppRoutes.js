import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UsersTable from "./pages/users/usersList";
import UsersAddition from "./pages/users/UsersAddition";
import UserEditing from "./pages/users/userEditing";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <UsersTable />
      </Route>
      <Route path='/add'>
        <UsersAddition />
      </Route>
      <Route path='/edit'>
        <UserEditing />
      </Route>
    </Switch>
  );
};

export { AppRoutes };
