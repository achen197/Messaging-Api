import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { ReactNode } from "react";

interface IFormDialogProps {
  title: string;
  contentText?: string;
  children?: ReactNode;
  action: string;
  isOpen: boolean;
  buttonText: string;
  onAgreeClick: () => void;
  onDisagreeClick: () => void;
}

export const FormDialog = (props: IFormDialogProps) => {
  const onAgreeClick = () => {
    props.onAgreeClick && props.onAgreeClick();
  };

  const onDisagreeClick = () => {
    props.onDisagreeClick && props.onDisagreeClick();
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={onDisagreeClick}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.contentText}</DialogContentText>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onDisagreeClick} color="secondary">
            Cancel
          </Button>
          <Button onClick={onAgreeClick} color="primary">
            {props.action}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
