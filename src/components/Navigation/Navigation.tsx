import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  EditOutlined,
  MessageOutlined,
  SettingsOutlined,
} from "@material-ui/icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/paper-plane.png";
import { SubscriptionDto } from "../../models/interfaces";
import { getSubscription } from "../../services/api";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [subscription, setSubscription] = useState<SubscriptionDto>();

  useEffect(() => {
    getSubscription()
      .then((res) => {
        setSubscription(res[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Drawer
      className={styles.navigation}
      classes={{ paper: styles.paper }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <img src={logo} alt="Logo" />
        <Typography variant="h6" noWrap>
          Not Atlassian
        </Typography>
      </Toolbar>
      <Divider />
      <div className={styles.items}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <MessageOutlined />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EditOutlined />
            </ListItemIcon>
            <ListItemText primary="Subscriptions" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsOutlined />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        {subscription && (
          <List>
            <ListItem>
              <ListItemText
                primary={"Subscription Details"}
                secondary={
                  <div className={styles.subscriptionDetails}>
                    {subscription.number}
                    <span>
                      Subscription expires{" "}
                      {moment(subscription.expires).format("DD/MM/YYYY")}
                    </span>
                  </div>
                }
              />
            </ListItem>
          </List>
        )}
      </div>
    </Drawer>
  );
};
