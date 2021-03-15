import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { login } from "../../services/api";

export const Login = () => {
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  function handleSubmit(e:React.FormEvent<HTMLInputElement>){
    e.preventDefault()
    login(email, password)
  } 
  return(
    <Grid
      spacing={1}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item onSubmit={handleSubmit}>
        <form noValidate autoComplete="off">
          <TextField variant="outlined" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <TextField type="password" variant="outlined" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button type="submit">Login</Button>
        </form>
      </Grid>
    </Grid>
  );
};
