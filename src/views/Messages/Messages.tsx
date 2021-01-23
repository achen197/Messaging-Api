import React from "react";
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
    messageId: "DMASApiA0000000146",
  },
  {
    to: "+61472880123",
    from: "+61412345678",
    body: "toot",
    sentTimestamp: "2018-04-20T14:24:35",
    messageId: "DMASApiA0000000146",
  },
  {
    to: "+61472880123",
    from: "+61412345678",
    body: "yate",
    sentTimestamp: "2018-04-20T14:24:35",
    messageId: "DMASApiA0000000146",
  },
];

export const Messages = () => {
  return (
    <div className={styles.messagesContainer}>
      <MessagesList messages={data} />
    </div>
  );
};
