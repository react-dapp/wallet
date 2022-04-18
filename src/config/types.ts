import { AbstractConnector } from "@web3-react/abstract-connector";

export interface WalletConfig {
  defaultConnector?: Connectors;
  chainId: number;
  rpcUrl?: string;
  // showBSCWallet: boolean;
  // darkMode: boolean;
  walletConnectPoolingInterval?: 12000;
  supportedChainIds?: { id: number; rpcUrl: string }[];
  unsupportedChainSetup?: {
    [key: number]: Network;
  };
  grid?: boolean;
  theme?: WalletTheme;
}

export const CHAIN_ID = {
  ETH: 1,
  GOERLI: 5,
  BSC: 56,
  BSC_TESTNET: 97,
};
export interface WalletTheme {
  closeTextColor?: string;
  closeBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  closeBtnStyle?: React.CSSProperties;
  lineColor?: string;
}

export interface Network {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

export interface WalletToken {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  image?: string;
}

export enum Connectors {
  INJECTED,
  WALLET_CONNECT,
  BSC,
}

export interface ConnectorList {
  [key: number]: AbstractConnector;
}

