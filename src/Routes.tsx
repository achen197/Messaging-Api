import { Route, Switch } from "react-router-dom";
import React from "react";
import { Shell } from "./components/Shell/Shell";
import { Messages } from "./views/Messages/Messages";
import { Welcome } from "./views/Welcome/Welcome";
import { Login } from "./views/Login/Login";

export const Routes = () => {
  return (
    <Shell>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/sign-up">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route exact path={"messages/:messageId"}>
          <Messages />
        </Route>
        <Route exact path="/subscriptions">
          <Messages />
        </Route>
        <Route exact path="/settings">
          <Messages />
        </Route>
      </Switch>
    </Shell>
  );
};
