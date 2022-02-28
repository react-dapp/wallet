import React from "react";
import ReactDOM from "react-dom";
import { useEagerConnect, useWallet, WalletProvider } from "..";

function App() {
  useEagerConnect();
  const { account, error, chainId, setOpen, deactivate } = useWallet();

  return (
    <div className="App" style={{ display: "flex", alignItems: "cetner", justifyContent: "center" }}>
      <header className="App-header" style={{ textAlign: "center" }}>
        <h6>Connected Acc: {account}</h6>
        <h6>ChainId: {chainId}</h6>
        <h6>Error: {error}</h6>
        <button onClick={() => setOpen(true)}>Connect</button>
        <button onClick={deactivate}>Disconnect</button>
      </header>
    </div>
  );
}

// function WalletHOC(){
//     return (

//     )
// }

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
