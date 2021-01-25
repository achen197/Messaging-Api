import React from "react";
import styles from "./LoadingIndicator.module.scss";
import { CircularProgress } from "@material-ui/core";

interface ILoadingIndicatorProps {
  text?: string;
  size?: number | string;
  className?: string;
}

export const LoadingIndicator = (props: ILoadingIndicatorProps) => {
  return (
    <div className={styles.container}>
      <CircularProgress size={props.size} />
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};
