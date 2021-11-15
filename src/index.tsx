import React from 'react';
import ReactDOM from 'react-dom';

import {
  useEagerConnect,
  WalletProvider,
  useWalletModal,
  useWalletProvider
} from './main/index'

function App() {
  useEagerConnect();
  const { setOpen, deactivate, error: walletError } = useWalletModal();
  const { account, active: connected } = useWalletProvider();

  return (
    <div className="App" style={{ display: 'flex', alignItems: 'cetner', justifyContent: 'center' }}>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <h2>Wallet Modal Test</h2>
        <button onClick={() => connected ? deactivate() : setOpen(true)}>{connected ? 'Disconnect' : 'Connect'}</button>
        <p>{connected && account}</p>
        <p style={{ color: 'red' }}>{walletError && walletError}</p>
      </header>
    </div >
  );
}

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider config={{
      chainId: 56,
      supportedChainIds: [56],
      unsupportedChainSetup : {},
      darkMode: false,
      grid: false,
      wrappedNative: {
        address: '',
        symbol: 'WBNB'
      },
      theme: {
        // closeTextColor: "red",
        // closeBackgroundColor: "blue",
        // headingColor: "orange",
        // textColor: "green",
        // backgroundColor: "coral",
        // btnColor: "cyan",
      }
    }}>
      <App />
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
);