import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { useConfig } from '../contexts/configContext'
import { useEffect, useState } from 'react'
import { Connectors, ConnectorList } from '../config/types'

export const useConnectors = () => {
    const { config } = useConfig();
    const [connectorsByName, setConnectorsByName] = useState<ConnectorList>()

    useEffect(() => {
        const injected = new InjectedConnector({
            supportedChainIds: config.supportedChainIds
        })

        const bsc = new BscConnector({
            supportedChainIds: config.supportedChainIds
        })

        const walletconnect = new WalletConnectConnector({
            rpc: { [config.chainId]: config.rpcUrl },
            bridge: 'https://bridge.walletconnect.org',
            qrcode: true
        })

        setConnectorsByName({
            [Connectors.INJECTED]: injected,
            [Connectors.BSC]: bsc,
            [Connectors.WALLET_CONNECT]: walletconnect
        })

    }, [config])

    return connectorsByName;
}