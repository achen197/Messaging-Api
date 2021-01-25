import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs>
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
        <Link to={"/sign-up"}>
          <Button>Sign-up</Button>
        </Link>
      </Grid>
    </Grid>
  );
};
