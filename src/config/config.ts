import { WalletConfig, Connectors } from "./types";

const config: WalletConfig = {
  defaultConnector: Connectors.INJECTED,
  chainId: 56,
  showBSCWallet: true,
  darkMode: false,
  walletConnectPoolingInterval: 12000,
  rpcUrl: "https://bsc-dataseed.binance.org/",
  supportedChainIds: [
    { id: 1, rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" },
    { id: 3, rpcUrl: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" },
    { id: 4, rpcUrl: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" },
    { id: 5, rpcUrl: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" },
    { id: 42, rpcUrl: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" },
    { id: 56, rpcUrl: "https://bsc-dataseed.binance.org/" },
    { id: 97, rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
  ],
  unsupportedChainSetup: {
    97: {
      chainId: `0x61`,
      chainName: "Binance Smart Chain Testnet",
      nativeCurrency: {
        name: "BNB",
        symbol: "bnb",
        decimals: 18,
      },
      rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
      blockExplorerUrls: ["https://testnet.bscscan.com"],
    },
    56: {
      chainId: `0x38`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "BNB",
        symbol: "bnb",
        decimals: 18,
      },
      rpcUrls: ["https://bsc-dataseed.binance.org/"],
      blockExplorerUrls: ["https://bscscan.com/"],
    },
  },
};

export default config;
