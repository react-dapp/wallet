import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import CustomCard from "../CustomCard/CustomCard";
import { useConfig } from "../../contexts/configContext";
import styles from "./ModalManager.module.css";
import * as ReactModal from "react-modal";

const ModalManager = ({ open, close, ...props }) => {
  const { config } = useConfig();

  return (
    // <Dialog
    //     open={open}
    //     onClose={close}
    //     maxWidth={"xl"}
    //     BackdropProps={{
    //         style: {
    //             backgroundColor: "rgba(0, 0, 0, 0.7)",
    //         },
    //     }}
    //     // disableBackdropClick
    //     PaperProps={{
    //         style: {
    //             overflow: "visible",
    //             borderRadius: 15,
    //         },
    //     }}
    // >
    <ReactModal
      isOpen={open}
      onRequestClose={() => {
        close();
      }}
      className={config.darkMode ? styles.darkModal : styles.modal}
      overlayClassName={styles.overlay}
      parentSelector={() => document.body}
    >
      <CloseIcon
        className={config.darkMode ? styles.darkCloseIcon : styles.closeIcon}
        fontSize="small"
        onClick={close}
      />
      {config.darkMode ? (
        <CustomCard style={{ overflow: "auto" }}>{props.children}</CustomCard>
      ) : (
        <div className={styles.root}>{props.children}</div>
      )}
    </ReactModal>
    // </Dialog>
  );
};

export default ModalManager;
