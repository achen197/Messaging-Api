import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import styles from "./Messages.module.scss";
import noMessage from "../../assets/images/no-message.png";
import moment from "moment";
import { MessageDto } from "../../models/interfaces";

interface IMessageDetailProps {
  message: MessageDto | undefined;
}
export const MessageDetail = (props: IMessageDetailProps) => {
  return (
    <>
      {props.message ? (
        <Grid container direction="column" className={styles.messageDetail}>
          <Grid item className={styles.title}>
            <div className={styles.details}>
              <Avatar classes={{ root: styles.avatar }}>?</Avatar>
              <span>{props.message.from}</span>
            </div>
            <span>{moment.unix(parseInt(props.message.received)).calendar()}</span>
          </Grid>
          <Grid item>
            <p>{props.message.body}</p>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={styles.noMessage}
        >
          <img src={noMessage} alt="no message" />
          <div>Select a message to view</div>
        </Grid>
      )}
    </>
  );
};
