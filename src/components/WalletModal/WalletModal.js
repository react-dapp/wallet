import React, { useEffect } from "react";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import wallets from "../../constants/walletsConfig";
import useWallet from "../../hooks/useWallet";
import { connectorNames } from "../../hooks/useConnectors";
import { useWalletModal } from "../../hooks/useWalletModal";
import { useConfig } from "../../contexts/configContext";
import { useWeb3React } from "@web3-react/core";
import style from "./WalletModal.module.css";

export const WalletModal = () => {
  const { config } = useConfig();
  const login = useWallet();
  const { setOpen } = useWalletModal();
  const { library } = useWeb3React();

  useEffect(() => {
    if (library) {
      setOpen(false);
    }
  }, [library]);

  return (
    <div className={style.root}>
      <p className={config.darkMode?style.darkHeading:style.heading}>Connect Wallet</p>
      <div className={style.divider} />
      <div spacing={1} className={style.grid}>
        {wallets
          .filter((i) => config.bsc || i.connector !== connectorNames.bsc)
          .map((item, index) => (
            <div key={index} style={{ marginBottom: 7 }}>
              <div
                className={`${
                  config.darkMode ? style.darkWalletBtn : style.walletBtn
                }`}
                onClick={() => login(item.connector)}
              >
                <p className={config.darkMode ? style.darkTitle : style.title}>
                  {item.title}
                </p>
                <img alt="" src={item.image} />
              </div>
            </div>
          ))}
      </div>
      <p className={`${style.learnText}`}>
        <HelpOutlineOutlinedIcon />
        &nbsp;Learn how to connect
      </p>
    </div>
  );
};
