import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { MessageDto } from "./Messages";
import styles from "./Messages.module.scss";

interface IMessagesListProps {
  messages: MessageDto[];
  selectedMessage: MessageDto | undefined;
  setSelectedMessage: (value: MessageDto) => void;
}

export const MessagesList = (props: IMessagesListProps) => {
  return (
    <Box className={styles.list}>
      {props.messages.length > 0 ? (
        props.messages.map((m, i) => (
          <List key={i} className={styles.message}>
            <ListItem
              button
              onClick={() =>
                props.setSelectedMessage && props.setSelectedMessage(m)
              }
              alignItems="flex-start"
              classes={{ selected: styles.messageSelected }}
              className={styles.messageListContainer}
              selected={props.selectedMessage === m}
            >
              <ListItemAvatar>
                <Avatar classes={{ root: styles.avatar }}>
                  {m.messageId.slice(0, 1)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <div className={styles.messageTitle}>
                    {m.from}
                    <span>{moment(m.sentTimestamp).format("DD/MM/YYYY")}</span>
                  </div>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={styles.inline}
                    color="textSecondary"
                  >
                    {m.body}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="middle" component="li" />
          </List>
        ))
      ) : (
        <>You have no messages</>
      )}
    </Box>
  );
};
