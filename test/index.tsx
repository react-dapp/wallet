import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CHAIN_ID } from '../src/config/types';
import { useEagerConnect } from '../src/hooks/useEgerConnect'
import { useWallet } from '../src/hooks/useWallet'
import { WalletProvider } from '../src/providers';

function App() {
    const [eagerConnect, setEagerConnect] = useState(false)

    useEagerConnect(eagerConnect);
    const { setOpen, deactivate, error: walletError } = useWallet();
    const { account } = useWallet();

    return (
        <div className="App" style={{ display: 'flex', alignItems: 'cetner', justifyContent: 'center' }}>
            <header className="App-header" style={{ textAlign: 'center' }}>
                <h2>Wallet Modal Test</h2>
                <button onClick={() => account ? deactivate() : setOpen(true)}>{account ? 'Disconnect' : 'Connect'}</button>
                <br />
                <button onClick={() => setEagerConnect(!eagerConnect)}>{eagerConnect ? 'Disable Eager Connect' : 'Enable Eager Connect'}</button>
                <br />
                <button onClick={() => console.log('hello')}>test</button>
                <p>{account && account}</p>
                <p style={{ color: 'red' }}>{walletError && walletError}</p>
            </header>

        </div >
    );
}

ReactDOM.render(
    <React.StrictMode>
        {/* @ts-ignore */}
        <WalletProvider>
            <App />
        </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


