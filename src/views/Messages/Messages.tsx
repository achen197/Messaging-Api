import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { MessageDto } from "../../models/interfaces";
import { getMessages } from "../../services/api";
import { MessageDetail } from "./MessageDetail";
import styles from "./Messages.module.scss";
import { MessagesList } from "./MessagesList";

export const Messages = () => {
  const [messages, setMessages] = useState<MessageDto[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<
    MessageDto | undefined
  >();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getMessages()
      .then((res) => {
        setMessages(res);
      })
      .catch((e) => {
        toast.error(e,  {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid
      container
      direction="row"
      spacing={1}
      className={styles.messagesContainer}
    >
      <Grid container item xs={4}>
        {!isLoading ? (
          <MessagesList
            selectedMessage={selectedMessage}
            setSelectedMessage={setSelectedMessage}
            messages={messages}
          />
        ) : (
          <LoadingIndicator />
        )}
      </Grid>
      <Grid container item xs={8}>
        <MessageDetail message={selectedMessage} />
      </Grid>
    </Grid>
  );
};
