import { useWeb3React } from '@web3-react/core';
import { useContext, useEffect } from 'react';
import WalletModalContext from '../contexts/walletModalContext'

export const useWalletModal = () => {
    const { activate, deactivate, error: web3ReactError } = useWeb3React()
    const { open, setOpen, error, setError } = useContext(WalletModalContext);

    useEffect(() => {
        if (web3ReactError)
            console.log('Web3 React:', web3ReactError)
    }, [web3ReactError])

    useEffect(() => {
        if (error)
            console.log('@react-dapp/wallet:', error)
    }, [error])


    return { open, error, setOpen, activate, deactivate, setError };
}