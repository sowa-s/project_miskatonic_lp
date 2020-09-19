import React from "react";
import styled from "styled-components";
import { theme } from "../../thema";
import Modal from "@material-ui/core/Modal";
import { Backdrop, Fade } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

type ModalContainerProps = {
  titleImage: string;
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
export const ModalContainer = (props: ModalContainerProps) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <ModalContent>
          <div id="transition-modal-title">
            <img
              src={props.titleImage}
              style={{ marginTop: "10px", height: "50px" }}
            />
          </div>
          {props.children}
        </ModalContent>
      </Fade>
    </Modal>
  );
};
const ModalContent = styled.div`
  width: min(80%, 1000px);
  height: min(90%, 600px);
  color: white;
  border: "2px solid #000";
  box-shadow: ${theme.palette.background.paper};
  padding: ${theme.spacing(2, 4, 3)};
  background-color: ${theme.palette.primary.dark};
  :focus {
    outline: 0;
  }
`;
