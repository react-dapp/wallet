import React from 'react'

declare function setOpen(value: boolean): void;
declare function setError(value: string | null): void;

const WalletModalContext = React.createContext<{
    open: boolean,
    error: string | null,
    setOpen: typeof setOpen,
    setError: typeof setError,
}>({
    open: false,
    error: null,
    setOpen: () => null,
    setError: () => null,
});

export default WalletModalContext;