import React from "react";
import { Route, Switch } from "react-router-dom";
import UsersTable from "./pages/users/UsersList";
import UsersAddition from "./pages/users/UsersAddition";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <UsersTable />
      </Route>
      <Route path='/add'>
        <UsersAddition />
      </Route>
    </Switch>
  );
};

export { AppRoutes };
