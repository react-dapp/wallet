import { useWeb3React } from '@web3-react/core'

export const useWalletProvider = () => {
    const { deactivate, account, library, chainId, connector } = useWeb3React()
    return { deactivate, account, library, chainId, connector, connected: Boolean(account) }
}