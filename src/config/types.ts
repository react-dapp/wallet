import { AbstractConnector } from '@web3-react/abstract-connector'

export interface WalletConfig {
    defaultConnector: Connectors,
    chainId: number,
    rpcUrl: string,
    showBSCWallet: true,
    darkMode: false,
    walletConnectPoolingInterval: 12000,
    supportedChainIds: number[],
    unsupportedChainSetup: {
        [key: number]: Network
    }
}

export interface Network {
    chainId: string,
    chainName: string,
    nativeCurrency: {
        name: string,
        symbol: string,
        decimals: number,
    },
    rpcUrls: string[],
    blockExplorerUrls: string[],
}

export interface WalletToken {
    address: string,
    name: string,
    symbol: string,
    decimals: number,
    image?: string,
}

export enum Connectors {
    INJECTED,
    WALLET_CONNECT,
    BSC
};

export interface ConnectorList {
    [key: number]: AbstractConnector,
}