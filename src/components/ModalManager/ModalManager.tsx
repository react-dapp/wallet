import React from "react";
import { useConfig } from "../../contexts/configContext";
import styles from "./ModalManager.module.css";
import ReactModal from "react-modal";

const ModalManager: React.FC<ModalManagerProps> = ({ open, close, ...props }) => {
  const { config } = useConfig();

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={() => {
        close();
      }}
      className={styles.modal}
      overlayClassName={styles.overlay}
      parentSelector={() => document.body}
      ariaHideApp={false}
    >
      <div
        className={styles.closeIcon}
        style={{
          background: config?.theme?.closeBackgroundColor,
          color: config.theme?.closeTextColor,
          ...config.theme?.closeBtnStyle,
        }}
        onClick={close}
      >
        x
      </div>

      {props.children}
    </ReactModal>
  );
};

export default ModalManager;

interface ModalManagerProps {
  open: boolean;
  close: () => void;
}

