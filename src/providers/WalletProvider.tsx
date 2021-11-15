import { useEffect, useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { WalletModal } from "../components/WalletModal/WalletModal";
import { ConfigContextProvider } from "../contexts/configContext";
import { WalletConfig } from "../config/types";
import WalletModalContext from "../contexts/walletModalContext";
import ModalManager from "../components/ModalManager/ModalManager";

export const WalletProvider = ({ children, config }: { children: React.ReactNode, config: WalletConfig }) => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

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
          {children}
          <ModalManager
            open={isWalletOpen}
            close={() => setIsWalletOpen(false)}
          >
            <WalletModal />
          </ModalManager>
        </ConfigContextProvider>
      </WalletModalContext.Provider>
    </Web3ReactProvider>
  );
};
