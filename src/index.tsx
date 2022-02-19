import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useEagerConnect } from './hooks/useEgerConnect'
import { useWallet } from './hooks/useWallet'
import { WalletProvider } from './providers';

function App() {
    const [eagerConnect, setEagerConnect] = useState(false)

    useEagerConnect(eagerConnect);
    const { setOpen, deactivate, error: walletError } = useWallet();
    const { account, connected } = useWallet();

    return (
        <div className="App" style={{ display: 'flex', alignItems: 'cetner', justifyContent: 'center' }}>
            <header className="App-header" style={{ textAlign: 'center' }}>
                <h2>Wallet Modal Test</h2>
                <button onClick={() => connected ? deactivate() : setOpen(true)}>{connected ? 'Disconnect' : 'Connect'}</button>
                <br />
                <button onClick={() => setEagerConnect(!eagerConnect)}>{eagerConnect ? 'Disable Eager Connect' : 'Enable Eager Connect'}</button>
                <p>{connected && account}</p>
                <p style={{ color: 'red' }}>{walletError && walletError}</p>
            </header>
        </div >
    );
}

ReactDOM.render(
    <React.StrictMode>
        <WalletProvider>
            <App />
        </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
);