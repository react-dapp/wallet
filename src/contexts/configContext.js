import React, { useState, useContext } from 'react'
import defaultConfig from '../constants/config'

const ConfigContext = React.createContext({
    config: defaultConfig,
    setConfig: () => { }
});

const ConfigContextProvider = ({ children, config }) => {
    const [_config, _setConfig] = useState({
        ...defaultConfig,
        ...config,
        rpcUrls: {
            ...defaultConfig,
            ...config,
        },
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