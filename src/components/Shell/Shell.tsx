import React from "react";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Shell.module.scss";

interface IShellProps {
  children: React.ReactNode;
}

export const Shell = (props: IShellProps) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.content}>{props.children}</main>
    </div>
  );
};
