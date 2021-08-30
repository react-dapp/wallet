import { useWeb3React } from '@web3-react/core';
import { useContext } from 'react';
import WalletModalContext from '../contexts/walletModalContext'

export const useWalletModal = () => {
    const { activate, deactivate } = useWeb3React()
    const { open, setOpen, error, setError } = useContext(WalletModalContext);
    return { open, setOpen, activate, deactivate, error, setError };
}