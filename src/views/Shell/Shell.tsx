import { Toolbar } from "@material-ui/core";
import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Shell.module.css";

interface IShellProps {
  children: React.ReactNode;
}

export const Shell = (props: IShellProps) => {
  return (
    <div className={styles.root}>
      <Navigation />
      <main className={styles.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
};
