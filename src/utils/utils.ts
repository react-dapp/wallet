import { Network, WalletToken } from "../config/types";

export const switchChain = async (network: Network): Promise<boolean> => {
    const provider = (window as any).ethereum
    if (provider) {
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: network.chainId }],
            });
            return true
        } catch (error) {
            // This error code indicates that the chain has not been added to MetaMask.
            if ((error as any).code === 4902) {
                try {
                    await provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [network],
                    });
                    return true
                } catch (addError) {
                    console.error("Can't setup the network on metamask because window.ethereum is undefined")
                    return false
                }
            }
            console.error("Can't setup the network on metamask because window.ethereum is undefined")
            return false
        }
    }
    return false;
}

export const addTokenToWallet = async (token: WalletToken) => {
    const tokenAdded = await (window as any).ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: token,
        },
    })
    return tokenAdded
}
