import { useEffect, useState, useRef } from 'react'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { useConfig } from '../contexts/configContext'

/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the provider change
 */
export const useWeb3 = () => {
    const { config } = useConfig()
    let httpProvider
    let web3NoAccount;
    const rpc = config.rpcUrls[config.chainId]
    if (rpc) {
        httpProvider = new Web3.providers.HttpProvider(rpc)
        web3NoAccount = new Web3(httpProvider)
    }

    const { library, account } = useWeb3React()
    const refEth = useRef(library)
    const [web3, setweb3] = useState(library ? new Web3(library) : web3NoAccount)


    useEffect(() => {
        if (library !== refEth.current) {
            setweb3(library ? new Web3(library) : web3NoAccount)
            refEth.current = library
        }
    }, [library])

    return { web3, account, connected: account ? true : false }
}