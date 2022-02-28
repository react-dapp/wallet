import React, { useState, useContext } from "react";
import defaultConfig from "../config/config";
import { WalletConfig } from "../config/types";

const ConfigContext = React.createContext<{ config: WalletConfig; setConfig: (config: WalletConfig) => void }>({
  config: defaultConfig,
  setConfig: () => null,
});

const ConfigContextProvider = ({ children, config }: { children: React.ReactNode; config: WalletConfig }) => {
  const [_config, _setConfig] = useState<WalletConfig>({
    ...defaultConfig,
    ...config,
    rpcUrl:
      config.rpcUrl ||
      config.supportedChainIds?.find((c) => c.id === config.chainId)?.rpcUrl ||
      defaultConfig.supportedChainIds?.find((c) => c.id === config.chainId)?.rpcUrl ||
      defaultConfig.rpcUrl,
  });

  return <ConfigContext.Provider value={{ config: _config, setConfig: _setConfig }}>{children}</ConfigContext.Provider>;
};

export const useConfig = () => {
  return useContext(ConfigContext);
};

export { ConfigContext, ConfigContextProvider };
