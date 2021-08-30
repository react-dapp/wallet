import MetamaskIco from "../assets/icons/metamask.svg";
import TrustWalletIco from "../assets/icons/trustwallet.svg";
import MathWalletIco from "../assets/icons/mathwallet.svg";
import TokenpocketIco from "../assets/icons/tokenpocket.svg";
import WalletConnectIco from "../assets/icons/walletconnect.svg";
import BinanceWalletIco from "../assets/icons/binancewallet.svg";
import SafePalIco from "../assets/icons/safepalwallet.svg";
import { connectorNames } from '../hooks/useConnectors';

const wallets = [
    {
        title: "MetaMask",
        image: MetamaskIco,
        connector: connectorNames.injected
    },
    {
        title: "Binance Chain Wallet",
        image: BinanceWalletIco,
        connector: connectorNames.bsc
    },
    {
        title: "Trust Wallet",
        image: TrustWalletIco,
        connector: connectorNames.injected,
    },
    {
        title: "Wallet Connect",
        image: WalletConnectIco,
        connector: connectorNames.walletConnect,
    },
    {
        title: "Math Wallet",
        image: MathWalletIco,
        connector: connectorNames.injected,
    },
    {
        title: "Token Pocket",
        image: TokenpocketIco,
        connector: connectorNames.injected,
    },
    {
        title: "SafePal Wallet",
        image: SafePalIco,
        connector: connectorNames.injected,
    },
];

export default wallets;