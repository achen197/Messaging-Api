import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

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
          <Button>Login</Button>
        </form>
      </Grid>
    </Grid>
  );
};
