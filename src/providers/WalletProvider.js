import React, { useEffect, useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import ModalManager from "../components/ModalManager/ModalManager";
import { WalletModal } from "../components/WalletModal/WalletModal";
import WalletModalContext from "../contexts/walletModalContext";
import { ConfigContextProvider } from "../contexts/configContext";
import { RefreshContextProvider } from "../contexts/refreshContext";
import BigNumber from "bignumber.js";
import { StylesProvider, ThemeProvider, createGenerateClassName } from "@material-ui/core";
import Theme from "../constants/theme";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const WalletProvider = ({ children, config }) => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (error) console.log("Unable to connect Wallet!", error);
  }, [error]);
  const generateClassName = createGenerateClassName({
    productionPrefix: '@react-dapp/wallet',
    disableGlobal: true,
    seed: "@react-dapp/wallet"
  });
  return (
    <Web3ReactProvider getLibrary={(provider) => provider}>
      <WalletModalContext.Provider
        value={{
          open: isWalletOpen,
          setOpen: setIsWalletOpen,
          error: error,
          setError: setError,
        }}
      >
        <ConfigContextProvider config={config}>
          <RefreshContextProvider>
            {children}
            <ThemeProvider theme={Theme}>
              <StylesProvider generateClassName={generateClassName}>
              <ModalManager
                open={isWalletOpen}
                close={() => setIsWalletOpen(false)}
                >
                <WalletModal />
              </ModalManager>
                </StylesProvider>
            </ThemeProvider>
          </RefreshContextProvider>
        </ConfigContextProvider>
      </WalletModalContext.Provider>
    </Web3ReactProvider>
  );
};
