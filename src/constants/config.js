const config = {
    chainId: 56,
    bsc: true,
    darkMode: false,
    wrappedNative: {
        address: '',
        symbol: ''
    },
    usd: {
        address: '',
        symbol: ''
    },
    nativeUsdLp: {
        address: '',
        symbol: ''
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