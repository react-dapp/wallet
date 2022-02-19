import { useWeb3React } from '@web3-react/core';
import { useContext, useEffect } from 'react';
import WalletModalContext from '../contexts/walletModalContext'

export const useWallet = () => {
    const { deactivate, account, library, chainId, connector, error: web3ReactError } = useWeb3React()
    const { open, setOpen, error, setError } = useContext(WalletModalContext);

    useEffect(() => {
        if (web3ReactError)
            console.log('@web3react:', web3ReactError)
    }, [web3ReactError])

    useEffect(() => {
        if (error)
            console.log('@react-dapp/wallet:', error)
    }, [error])


    return { open, account, library, chainId, connector, error, connected: Boolean(account), setOpen, deactivate, setError };
}