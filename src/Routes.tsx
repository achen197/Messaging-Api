import { Route, Switch } from "react-router-dom";
import React from "react";
import { Shell } from "./views/Shell/Shell";
import { Messages } from "./views/Messages/Messages";

export const Routes = () => {
  return (
    <Shell>
      <Switch>
        <Route exact path="/">
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
