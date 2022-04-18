import { useEffect } from "react";
import wallets from "../../config/walletsConfig";
import useWalletLogin from "../../hooks/useWalletLogin";
import { useWallet } from "../../hooks/useWallet";
import { useConfig } from "../../contexts/configContext";
import { useWeb3React } from "@web3-react/core";
import style from "./WalletModal.module.css";

export const WalletModal: React.FC = () => {
  const { config } = useConfig();
  const login = useWalletLogin();
  const { setOpen } = useWallet();
  const { library } = useWeb3React();

  useEffect(() => {
    if (library) {
      setOpen(false);
    }
  }, [library, setOpen]);

  return (
    <div className={style.root}>
      <p className={style.heading} style={{ color: config?.theme?.headingColor }}>
        Connect a Web3 Wallet
      </p>
      <div className={style.walletsContainer}>
        <div className={style.walletBtnContainer} onClick={() => login(wallets[0].connector)}>
          <img src={wallets[0].image} alt="Metamask" height="90px" />
          <p className={style.title} style={{ color: config?.theme?.textColor }}>
            MetaMask
          </p>
        </div>
        <div className={style.divider}  style={{ background: config?.theme?.lineColor }}/>
        <div className={style.walletBtnContainer} onClick={() => login(wallets[1].connector)}>
          <img src={wallets[1].image} alt="WalletConnect" height="60px" />
          <p className={style.title} style={{ color: config?.theme?.textColor, marginTop: 15 }}>
            Wallet Connect
          </p>
        </div>
      </div>
    </div>
  );
};

