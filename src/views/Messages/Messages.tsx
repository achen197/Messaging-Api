import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { MessageDetail } from "./MessageDetail";
import styles from "./Messages.module.scss";
import { MessagesList } from "./MessagesList";

export interface MessageDto {
  to: string;
  from: string;
  body: string;
  sentTimestamp: string;
  messageId: string;
}

const data = [
  {
    to: "+61472880123",
    from: "+61412345678",
    body: "yeet",
    sentTimestamp: "2018-04-20T14:24:35",
    messageId: "1",
  },
  {
    to: "+61472880123",
    from: "+61412345678",
    body: "toot",
    sentTimestamp: "2018-04-20T14:24:35",
    messageId: "2",
  },
  {
    to: "+61472880123",
    from: "+61412345678",
    body: "yate",
    sentTimestamp: "2018-04-20T14:24:35",
    messageId: "3",
  },
];

export const Messages = () => {
    const [selectedMessage, setSelectedMessage] = useState<MessageDto | undefined>();

  return (
    <Grid
      container
      direction="row"
      spacing={1}
      className={styles.messagesContainer}
    >
      <Grid container item xs={4}>
        <MessagesList selectedMessage={selectedMessage} setSelectedMessage={setSelectedMessage} messages={data} />
      </Grid>
      <Grid container item xs={8}>
        <MessageDetail message={selectedMessage} />
      </Grid>
    </Grid>
  );
};
