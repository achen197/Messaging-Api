import { Route, Switch } from "react-router-dom";
import React from "react";
import { Shell } from "./components/Shell/Shell";
import { Messages } from "./views/Messages/Messages";

export const Routes = () => {
  return (
    <Shell>
      <Switch>
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
