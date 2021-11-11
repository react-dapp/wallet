import MetamaskIco from "../assets/icons/metamask.svg";
import TrustWalletIco from "../assets/icons/trustwallet.svg";
import MathWalletIco from "../assets/icons/mathwallet.svg";
import TokenpocketIco from "../assets/icons/tokenpocket.svg";
import WalletConnectIco from "../assets/icons/walletconnect.svg";
import BinanceWalletIco from "../assets/icons/binancewallet.svg";
import SafePalIco from "../assets/icons/safepalwallet.svg";
import { Connectors } from "./types";

const wallets = [
    {
        title: "MetaMask",
        image: MetamaskIco,
        connector: Connectors.INJECTED
    },
    {
        title: "Binance Chain Wallet",
        image: BinanceWalletIco,
        connector: Connectors.BSC
    },
    {
        title: "Trust Wallet",
        image: TrustWalletIco,
        connector: Connectors.INJECTED,
    },
    {
        title: "Wallet Connect",
        image: WalletConnectIco,
        connector: Connectors.WALLET_CONNECT,
    },
    {
        title: "Math Wallet",
        image: MathWalletIco,
        connector: Connectors.INJECTED,
    },
    {
        title: "Token Pocket",
        image: TokenpocketIco,
        connector: Connectors.INJECTED,
    },
    {
        title: "SafePal Wallet",
        image: SafePalIco,
        connector: Connectors.INJECTED,
    },
];

export default wallets;