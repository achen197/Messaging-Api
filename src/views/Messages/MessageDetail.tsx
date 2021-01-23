import { Grid } from "@material-ui/core";
import React from "react";
import { MessageDto } from "./Messages";
import styles from "./Messages.module.scss";
import noMessage from "../../assets/images/no-message.png";

interface IMessageDetailProps {
  message: MessageDto | undefined;
}
export const MessageDetail = (props: IMessageDetailProps) => {
  return (
    <>
      {props.message ? (
        <div className={styles.messageDetail}>{props.message.body}</div>
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
