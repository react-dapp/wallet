import { WalletConfig, Connectors } from './types';

const config: WalletConfig = {
    defaultConnector: Connectors.INJECTED,
    chainId: 56,
    showBSCWallet: true,
    darkMode: false,
    walletConnectPoolingInterval: 12000,
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
    unsupportedChainSetup: {
        97: {
            chainId: `0x61`,
            chainName: 'Binance Smart Chain Testnet',
            nativeCurrency: {
                name: 'BNB',
                symbol: 'bnb',
                decimals: 18,
            },
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
            blockExplorerUrls: ['https://testnet.bscscan.com'],
        },
        56: {
            chainId: `0x38`,
            chainName: 'Binance Smart Chain Mainnet',
            nativeCurrency: {
                name: 'BNB',
                symbol: 'bnb',
                decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/'],
        },
    }
}

export default config;