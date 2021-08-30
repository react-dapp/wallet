import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

import {
  useEagerConnect,
  useWeb3,
  WalletProvider,
  useWalletModal,
  useUSDLp,
  useERC20Approval,
  useWaleltSign,
  useInputValue,
} from './main'

function App() {
  const [messageToSign, setMessageToSign] = useState('')

  useEagerConnect();

  const { setOpen, deactivate, error: walletError } = useWalletModal();
  const { account, connected } = useWeb3();
  const { price, loading } = useUSDLp('0x70fD59a757567Eb412ce96b4fcd5506c90ACEDbA')
  const { approve, approveState, approvedBalance, isApproved } = useERC20Approval('0x40619dc9F00ea34e51D96b6EC5d8a6aD75457434', '0x046564e17dD76df34fF06200527b58B9173b4fdE');
  const { sign, signState, signature } = useWaleltSign();
  const { value, maxDisplayValue, error, setValue, getValue, selectMaxValue } = useInputValue('123456789000000000000000');

  return (
    <div className="App" style={{ display: 'flex', alignItems: 'cetner', justifyContent: 'center' }}>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <h2>Wallet Modal Test</h2>
        <Button variant='outlined' onClick={() => connected ? deactivate() : setOpen(true)}>{connected ? 'Disconnect' : 'Connect'}</Button>
        <p>{connected && account}</p>
        <p style={{ color: 'red' }}>{walletError && walletError}</p>

        <h2>LP Test</h2>
        <p>{loading ? 'Loading Price...' : `$USD Price: ${price.usdPrice?.toFixed()}`}</p>

        <h2>Approval Test</h2>
        <p>{`Approval Status: ${approveState}`}</p>
        <p>{isApproved ? 'Approved' : 'Not Approved'}</p>
        <Button variant='outlined' onClick={() => approve()}>{'Approve'}</Button>

        <h2>Signature Test</h2>
        <p>{`Signature Status: ${signState}`}</p>
        <Button variant='outlined' onClick={() => sign('Hello World!')}>{'Sign'}</Button>

        <div style={{ marginTop: '10px' }} />
        <input value={messageToSign} onChange={(e) => setMessageToSign(e.currentTarget.value)} />
        <div style={{ marginTop: '10px' }} />
        <Button variant='outlined' onClick={() => sign(messageToSign)}>{'Sign Message'}</Button>

        <p>{signature ? `Signature Hash: ${signature}` : ''}</p>

        <h2>Input Value Test</h2>
        <p>Max Value: {maxDisplayValue}</p>
        <input value={value} onChange={(e) => setValue(e.target.value)} /> <button onClick={selectMaxValue}>MAX</button>
        <p>{error ? `Input Error: ${error}` : 'All Ok!'}</p>
        <p>Value: {getValue()}</p>

      </header>
    </div >
  );
}

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider config={{
      chainId: 56,
      supportedChainIds: [56],
      wrappedNative: {
        address: '',
        symbol: 'WBNB'
      },
      usd: {
        address: '',
        symbol: 'BUSD'
      },
      nativeUsdLp: {
        address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
        symbol: ''
      }
    }}>
      <App />
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
);