import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { UserScreen } from "../components/user/UserScreen";
import { NavBarUser } from "../components/user/NavBar_User";

export const UserRoute = () => {
  return (
    <Route>
      <div className="user__main-content">
        <NavBarUser />
      </div>

      <div>
        <Switch>
          <Route exact path="/user" component={UserScreen} />
          <Redirect to="/user" />
        </Switch>
      </div>
    </Route>
  );
};
