import React from 'react'

const WalletModalContext = React.createContext({
    open: false,
    error: undefined,
    setOpen: () => { },
    setError: () => { },
});

export default WalletModalContext;