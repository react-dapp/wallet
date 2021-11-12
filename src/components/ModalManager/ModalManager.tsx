import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import { useConfig } from "../../contexts/configContext";
import styles from "./ModalManager.module.css";
import ReactModal from "react-modal";

const ModalManager : React.FC<ModalManagerProps> = ({ open, close, ...props }) => {
  const { config } = useConfig();

  return (
     <ReactModal
      isOpen={open}
      onRequestClose={() => {
        close();
      }}
      className={config.darkMode ? styles.darkModal : styles.modal}
      overlayClassName={styles.overlay}
      parentSelector={() => document.body}
      ariaHideApp={false}
    >
      <button
        className={config.darkMode ? styles.darkCloseIcon : styles.closeIcon}
        onClick={close}
      />
      {config.darkMode ? (
        <CustomCard style={{ overflow: "auto" }}>{props.children}</CustomCard>
      ) : (
        <div className={styles.root}>{props.children}</div>
      )}
    </ReactModal>
  );
};

export default ModalManager;

interface ModalManagerProps {
  open: boolean;
  close: () => void;
}