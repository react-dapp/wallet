import { useEffect } from "react";
import wallets from "../../config/walletsConfig";
import useWallet from "../../hooks/useWallet";
import { useWalletModal } from "../../hooks/useWalletModal";
import { useConfig } from "../../contexts/configContext";
import { useWeb3React } from "@web3-react/core";
import style from "./WalletModal.module.css";
import { Connectors } from "../../main";

export const WalletModal : React.FC = () => {
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
      <p className={config.darkMode ? style.darkHeading : style.heading}>Connect Wallet</p>
      <div className={style.divider} />
      <div  className={style.grid}>
        {wallets
          .filter((i) => config.bsc || i.connector !== Connectors.BSC)
          .map((item, index) => (
            <div key={index} style={{ marginBottom: 7 }}>
              <div
                className={`${config.darkMode ? style.darkWalletBtn : style.walletBtn
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
        &nbsp;Learn how to connect
      </p>
    </div>
  );
};
