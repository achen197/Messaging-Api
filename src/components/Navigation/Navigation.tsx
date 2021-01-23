import { Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MessageOutlined, EditOutlined, SettingsOutlined } from "@material-ui/icons";
import React from "react";
import logo from "./paper-plane.png";
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <Drawer className={styles.navigation} variant="permanent" anchor="left">
      <Toolbar>
        <img src={logo} alt="Logo" />
        <Typography variant="h6" noWrap>
          Not Atlassian
        </Typography>
      </Toolbar>
      <div className={styles.toolbar} />
      <Divider />
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
    </Drawer>
  );
};
