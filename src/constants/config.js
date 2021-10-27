import BigNumber from 'bignumber.js/bignumber'
import { connectorNames } from '../hooks/useConnectors'

BigNumber.config({
    EXPONENTIAL_AT: 1000,
    DECIMAL_PLACES: 80,
})

const config = {
    defaultConnector: connectorNames.injected,
    chainId: 56,
    bsc: true,
    darkMode: false,
    wrappedNative: {
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        symbol: 'WBNB'
    },
    usd: {
        address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        symbol: 'BUSD'
    },
    nativeUsdLp: {
        address: '0x2E28b9B74D6d99D4697e913b82B41ef1CAC51c6C',
        symbol: 'Cake-LP'
    },
    rpcUrls: {
        56: 'https://bsc-dataseed.binance.org/',
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
    },
    walletConnectPoolingInterval: 12000,
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