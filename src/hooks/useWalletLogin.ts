import { useCallback } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import { LOCAL_STORAGE_CONNECTOR } from '../config/constants'
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
    WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { switchChain } from '../utils/utils'
import { useConnectors } from './useConnectors'
import { useConfig } from '../contexts/configContext'
import { useWallet } from './useWallet'
import { Network } from '../config/types'

const useWalletLogin = () => {
    const { setError } = useWallet();
    const { activate } = useWeb3React();
    const { config } = useConfig();
    const connectorsByName = useConnectors();

    const login = useCallback(async (connectorID) => {
        if (!connectorsByName) return;
        const connector = connectorsByName[connectorID]
        console.log(connector)
        if (connector) {
            window.localStorage.setItem(LOCAL_STORAGE_CONNECTOR, connectorID);
            setError(null)
            await activate(connector, async (error) => {
                if (error instanceof UnsupportedChainIdError) {
                    console.log(error)
                    const network = config?.unsupportedChainSetup && config?.unsupportedChainSetup[config.chainId];
                    const hasSetup = await switchChain(network ?? { chainId: `0x${parseInt(config.chainId.toString()).toString(16)}` } as Network)
                    if (hasSetup) {
                        setError(null)
                        await activate(connector, async () => {
                            setError(`${error.message}`)
                        })
                    } else {
                        setError(`Unable to connect to required network ${config.chainId}`)
                    }
                } else {
                    window.localStorage.removeItem(LOCAL_STORAGE_CONNECTOR)
                    if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
                        setError('No wallet provider was found')
                    } else if (
                        error instanceof UserRejectedRequestErrorInjected ||
                        error instanceof UserRejectedRequestErrorWalletConnect
                    ) {
                        if (connector instanceof WalletConnectConnector) {
                            connector.walletConnectProvider = undefined
                        }
                        setError('Please authorize to access your account')
                    } else if ((error as any).code === -32002) {
                        setError(`Already processing wallet connect requuest, please click on wallet to unlock it!`)
                    } else {
                        setError(`${error.message}`)
                    }
                }
            })
        } else {
            setError(`Cannot find connector in the connector config`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectorsByName])

    return login
}

export default useWalletLogin