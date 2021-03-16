import { Button, FormHelperText, Grid, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import moment from "moment";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FormDialog } from "../../components/FormDialog";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { SubscriptionDto } from "../../models/interfaces";
import { createSubscription, getSubscription } from "../../services/api";
import styles from "./Subscriptions.module.scss";

export const Subscriptions = () => {
  const [subscription, setSubscription] = useState<SubscriptionDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [activeDays, setActiveDays] = useState<number>(30);

  const validateNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const setValue = value <= 1825 ? value : activeDays;
    setActiveDays(setValue);
  };

  useEffect(() => {
    setIsLoading(true);
    getSubscription()
      .then((res) => {
        setSubscription(res);
      })
      .catch((e) => {
        toast.error("Error retrieving subscriptions");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleCreateSubscription = (days: number) => {
    createSubscription(days).catch((e) => toast.error(e));
    setIsDialogOpen(false);
    setActiveDays(30);
  };

  return (
    <Grid
      container
      direction="column"
      spacing={1}
      className={styles.subscriptionsContainer}
    >
      <Grid item xs={12}>
        <h2>Subscriptions</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsDialogOpen(true)}
          startIcon={<Add />}
        >
          New Subscription
        </Button>
        <FormDialog
          buttonText={"New Subscription"}
          title={"Create A New Subscription"}
          action="Create"
          isOpen={isDialogOpen}
          onAgreeClick={() => handleCreateSubscription(activeDays)}
          onDisagreeClick={() => setIsDialogOpen(false)}
          contentText={
            "Set the number of days for which this number is provisioned/active. Default is 30 days, max is 5 years (1825 days)"
          }
        >
          <TextField
            id="active-days"
            type="number"
            autoFocus
            fullWidth
            label="No. of Active Days"
            value={activeDays}
            inputProps={{ max: 1825 }}
            onChange={validateNumber}
          />
          <FormHelperText id="expiry-date">
            Expires on: {moment().add(activeDays, "d").format("DD/MM/YYYY")}
          </FormHelperText>
        </FormDialog>
      </Grid>
      {!isLoading ? (
        <Grid container item xs={12} direction="column">
          <h3>Active Numbers:</h3>
          <ul>
            {subscription.map((s) => (
              <li key={s._id}>
                {s.number} expires on {moment(s.expires).format("DD/MM/YYYY")}
              </li>
            ))}
          </ul>
        </Grid>
      ) : (
        <LoadingIndicator />
      )}
    </Grid>
  );
};
