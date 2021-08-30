import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { useConfig } from '../contexts/configContext'
import { useEffect, useState } from 'react'

export const connectorNames = {
    injected: "INJECTED",
    walletConnect: "WALLET_CONNECT",
    bsc: "BSC"
};

export const useConnectors = () => {
    const { config } = useConfig();
    const [connectorsByName, setConnectorsByName] = useState(undefined)

    useEffect(() => {
        const injected = new InjectedConnector({
            supportedChainIds: config.supportedChainIds
        })

        const bsc = new BscConnector({
            supportedChainIds: config.supportedChainIds
        })

        const walletconnect = new WalletConnectConnector({
            rpc: config.rpcUrls,
            bridge: 'https://bridge.walletconnect.org',
            qrcode: true,
            pollingInterval: config.walletConnectPoolingInterval
        })

        setConnectorsByName({
            [connectorNames.injected]: injected,
            [connectorNames.bsc]: bsc,
            [connectorNames.walletConnect]: walletconnect
        })

    }, [config])

    return connectorsByName;
}