import { useCallback } from 'react'
import { UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import { connectorLocalStorageKey } from './../constants/constants'
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
import { useWalletModal } from './useWalletModal'

const useWallet = () => {
    const { setError, activate } = useWalletModal();
    const { config } = useConfig();
    const connectorsByName = useConnectors();

    const login = useCallback((connectorID) => {
        if (!connectorsByName) return;
        const connector = connectorsByName[connectorID]
        if (connector) {
            window.localStorage.setItem(connectorLocalStorageKey, connectorID);
            activate(connector, async (error) => {
                if (error instanceof UnsupportedChainIdError) {
                    const network = config.unsupportedChainSetup[config.chainId];
                    const hasSetup = await switchChain(network ?? { chainId: `0x${parseInt(config.chainId).toString(16)}` })
                    if (hasSetup) {
                        await activate(connector)
                        setError(undefined)
                    } else {
                        setError(`Unable to connect to required network ${config.chainId}`)
                    }
                } else {
                    window.localStorage.removeItem(connectorLocalStorageKey)
                    if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
                        setError('Provider Error', 'No provider was found')
                    } else if (
                        error instanceof UserRejectedRequestErrorInjected ||
                        error instanceof UserRejectedRequestErrorWalletConnect
                    ) {
                        if (connector instanceof WalletConnectConnector) {
                            connector.walletConnectProvider = null
                        }
                        setError('Authorization Error', 'Please authorize to access your account')
                    } else {
                        setError(error.name, error.message)
                    }
                }
            })
        } else {
            setError("Can't find connector", 'The connector config is wrong')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectorsByName])

    return login
}

export default useWallet