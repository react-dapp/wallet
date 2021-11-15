import { useCallback } from 'react'
import { UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import { connectorLocalStorageKey } from './../config/constants'
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

    const login = useCallback(async (connectorID) => {
        if (!connectorsByName) return;
        const connector = connectorsByName[connectorID]
        if (connector) {
            window.localStorage.setItem(connectorLocalStorageKey, connectorID);
            setError(null)
            await activate(connector, async (error) => {
                if (error instanceof UnsupportedChainIdError) {
                    console.log(error)
                    const network = config.unsupportedChainSetup[config.chainId];
                    const hasSetup = await switchChain(network ?? { chainId: `0x${parseInt(config.chainId.toString()).toString(16)}` })
                    if (hasSetup) {
                        setError(null)
                        await activate(connector, async (e) => {
                            setError(`@react-dapp/wallet: ${error.message}`)
                        })
                    } else {
                        setError(`@react-dapp/wallet: Unable to connect to required network ${config.chainId}`)
                    }
                } else {
                    window.localStorage.removeItem(connectorLocalStorageKey)
                    if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
                        setError('@react-dapp/wallet: No wallet provider was found')
                    } else if (
                        error instanceof UserRejectedRequestErrorInjected ||
                        error instanceof UserRejectedRequestErrorWalletConnect
                    ) {
                        if (connector instanceof WalletConnectConnector) {
                            connector.walletConnectProvider = null
                        }
                        setError('@react-dapp/wallet: Please authorize to access your account')
                    } else if ((error as any).code === -32002) {
                        setError(`@react-dapp/wallet: Already processing wallet connect requuest, please click on wallet to unlock it!`)
                    } else {
                        setError(`@react-dapp/wallet: ${error.message}`)
                    }
                }
            })
        } else {
            setError(`@react-dapp/wallet: Cannot find connector in the connector config`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectorsByName])

    return login
}

export default useWallet