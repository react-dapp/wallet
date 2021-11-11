import React, { useState, useContext } from 'react'
import defaultConfig from '../config/config'
import { WalletConfig } from '../config/types';

const ConfigContext = React.createContext<{ config: WalletConfig, setConfig: (config: WalletConfig) => void }>({
    config: defaultConfig,
    setConfig: () => null
});

const ConfigContextProvider = ({ children, config }: { children: React.ReactNode, config: WalletConfig }) => {
    const [_config, _setConfig] = useState({
        ...defaultConfig,
        ...config
    })

    return (
        <ConfigContext.Provider value={{ config: _config, setConfig: _setConfig }}>
            {children}
        </ConfigContext.Provider>
    )
}

export const useConfig = () => {
    return useContext(ConfigContext);
}

export { ConfigContext, ConfigContextProvider };