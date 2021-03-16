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
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/paper-plane.png";
import { SubscriptionDto } from "../../models/interfaces";
import { getSubscription } from "../../services/api";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [subscription, setSubscription] = useState<SubscriptionDto>();

  const location = useLocation();

  useEffect(() => {
    getSubscription()
      .then((res) => {
        setSubscription(res[0]);
      })
      .catch((e) => toast.error("Error retrieving subscription"));
  }, []);

  return (
    <>
      {location.pathname !== "/" ? (
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
              <Link to="/messages">
                <ListItem button>
                  <ListItemIcon>
                    <MessageOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Messages" />
                </ListItem>
              </Link>
              <Link to="/subscriptions">
                <ListItem button>
                  <ListItemIcon>
                    <EditOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Subscriptions" />
                </ListItem>
              </Link>
              <Link to="/settings">
                <ListItem button>
                  <ListItemIcon>
                    <SettingsOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
              </Link>
            </List>
            {subscription && (
              <List>
                <ListItem>
                  <ListItemText
                    primary={"Subscription Details"}
                    secondary={
                      <span className={styles.subscriptionDetails}>
                        {subscription.number}
                        <span>
                          Subscription expires{" "}
                          {moment(subscription.expires).format("DD/MM/YYYY")}
                        </span>
                      </span>
                    }
                  />
                </ListItem>
              </List>
            )}
          </div>
        </Drawer>
      ) : null}
    </>
  );
};
