import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { login } from "../../services/api";

export const Login = () => {
  return (
    <Grid
      spacing={1}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <form noValidate autoComplete="off">
          <TextField variant="outlined" label="Email" />
          <TextField variant="outlined" label="Password" />
          <Button onClick={login}>Login</Button>
        </form>
      </Grid>
    </Grid>
  );
};
