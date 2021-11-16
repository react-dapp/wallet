import { useEffect } from 'react'
import { Connectors } from '../config/types'
import { connectorLocalStorageKey } from '../config/constants'
import { useConfig } from '../contexts/configContext'
import useWallet from './useWallet'

const _binanceChainListener = async () =>
    new Promise<void>((resolve) =>
        Object.defineProperty(window, 'BinanceChain', {
            get() {
                return this.bsc
            },
            set(bsc) {
                this.bsc = bsc
                resolve()
            },
        }),
    )

export const useEagerConnect = (shouldConnect: boolean = true) => {
    const login = useWallet()
    const { config } = useConfig();

    useEffect(() => {
        console.log('in eager connect...')
        if (!shouldConnect) return;

        const connectorId = window.localStorage.getItem(connectorLocalStorageKey);

        if (connectorId && Number.isInteger(connectorId)) {
            const isConnectorBinanceChain = Number(connectorId) === Connectors.BSC
            const isBinanceChainDefined = Reflect.has(window, 'BinanceChain')

            // Currently BSC extension doesn't always inject in time.
            // We must check to see if it exists, and if not, wait for it before proceeding.
            if (isConnectorBinanceChain && !isBinanceChainDefined) {
                _binanceChainListener().then(() => login(connectorId))
                return
            }

            login(connectorId)
        } else {
            login(config.defaultConnector)
        }
    }, [login, config.defaultConnector, shouldConnect])
}