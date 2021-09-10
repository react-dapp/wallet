# Wallet

A Minimalistic ethereum based wallet powered by web3-react with a simple wallet modal.

[Live Demo](https://react-dapp-wallet.web.app/)

You can find full usage of the package [here](https://github.com/react-dapp/wallet/blob/main/src/index.js).


## Getting Started

This package uses `@web3-react` under the  hood with a react modal to easily hook into any dapps, so first you need to install the following `peerDependencies` to use the package.

Reuired!
```
"web3": "^1.3.5",
"ethers": "^5.1.2",
"@web3-react/core": "^6.1.9",
"@web3-react/injected-connector": "^6.0.7",
"@web3-react/walletconnect-connector": "^6.2.4",
"@binance-chain/bsc-connector": "^1.0.0"
"@material-ui/core": "^4.11.3",
"@material-ui/icons": "^4.11.2",

```
Optional (required in **useApproval, useBalance, useLp, useInputValue** hooks)
```
"bignumber.js": "^9.0.1",
"ethereum-multicall": "^2.7.0",
```


Copy paste the following dependencies into your package.json, dependencies section, and run `npm install`.  

    
To use the package, first you need to import the `WalletProvider` and place it at the top level in the component tree.
Use the config property, to configure supported chain and provide native wrapped token addresses (WETH, WBNB etc...)

```

import { WalletProvider } from "@react-dapp/wallet";
...

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider config={{
      chainId: 56,
      bsc: true,
      darkMode: false,
      wrappedNative: {
          address: '',
          symbol: ''
      },
      usd: {
          address: '',
          symbol: ''
      },
      nativeUsdLp: {
          address: '',
          symbol: ''
      },
      rpcUrls: {
          56: 'https://bsc-dataseed.binance.org/',
          97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
      },
      walletConnectPoolingInterval: 12000,
      supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
      unsupportedChainSetup: {
          97: {
              chainId: `0x61`,
              chainName: 'Binance Smart Chain Testnet',
              nativeCurrency: {
                  name: 'BNB',
                  symbol: 'bnb',
                  decimals: 18,
              },
              rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
              blockExplorerUrls: ['https://testnet.bscscan.com'],
          },
    }}>
      ...
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


```

> - `isBSC` prop will render the `Binance Wallet Button` if `true`.
> - Provide `chainId` of the network you wanna connect.
> - `isDarkMode` controls between dark and light theme of the modal.

<br/>  

To open wallet modal, use `uesWalletModal` hook

```

import { useWalletModal, useWeb3 } from "@react-dapp/wallet";
...

const Connect = ()=> {

    const { open, setOpen } = useWalletModal();
    const { account } = useWeb3();

    return (
        <Button onClick={() => setOpen(true)}>
          {account ? account.substring(0, 5) + "..." : "Connect"}
        </Button>
    )
}

```

To use the current **web3 provider** and connected **account** use `useWeb3` hook

```

const { account, web3 } = useWeb3();

```

Following are some of the useful hooks that can be helpful in many dapps.

### useLp
This is can be used to fetch info about the LP token used by pancake or similar exchanges.

```
@params: 
LpAddress: required,
baseTokenSymbol: optional, 
baseTokenAddress: optional

@returns
{
    loading,
    lp: {
        name,
        symbol,
        token0,
        token1,
    },
    token0: {
        name,
        symbol,
        decimals,
        address,
        totalSupply,
        lpBalance
    },
    token0: ...,
    price: {
        token0,
        token1,
        basePrice
    }

}
```

### useERC20Approval

useERC20Approval to approve tokens, and check state of approval

```
@returns 
{ 
  approve
  isApproved,
  approvedBalance,
  approveState,
}
```

### useERC20Balance

useERC20Balance to check balance of the connected account

```
@returns 
{ 
  balance
  displayBalance,
}
```

### useWalletSign

useWalletSign hook is used to sign messages

```
@returns
{
  sign,
  signState,
  signature
}
```

### useInputValue

This hook makes it easy to take inputs for token amounts, most tokens values contain big decimals, which end user don't know about, but we need full values, so this hook takes the max value a user can select in the most basic unit and converts that to displayable value, and gives ability to convert user inputed value which don't contain decimals to convert them into full values that account for decimals

```
@returns
{
  value,
  maxDisplayValue,
  error,
  setValue,
  getValue,
  selectMaxValue 
}
```