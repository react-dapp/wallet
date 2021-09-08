import React, { useEffect, useState } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import ModalManager from '../components/ModalManager/ModalManager';
import { WalletModal } from '../components/WalletModal/WalletModal'
import WalletModalContext from '../contexts/walletModalContext'
import ConfigProvider from '../contexts/configContext'
import BigNumber from 'bignumber.js';

BigNumber.config({
    EXPONENTIAL_AT: 1000,
    DECIMAL_PLACES: 80,
})

export const WalletProvider = ({ children, config }) => {
    const [isWalletOpen, setIsWalletOpen] = useState(false);
    const [error, setError] = useState(undefined)

    useEffect(() => {
        if (error)
            console.log('Unable to connect Wallet!', error)
    }, [error])

    return (
        <Web3ReactProvider getLibrary={(provider) => provider}>
            <WalletModalContext.Provider value={{ open: isWalletOpen, setOpen: setIsWalletOpen, error: error, setError: setError }}>
                <ConfigProvider config={config}>
                    {children}
                    <ModalManager open={isWalletOpen} close={() => setIsWalletOpen(false)}>
                        <WalletModal />
                    </ModalManager>
                </ConfigProvider>
            </WalletModalContext.Provider>
        </Web3ReactProvider>
    );
}