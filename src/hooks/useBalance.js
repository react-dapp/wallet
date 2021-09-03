import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { toLower } from "../utils/utils";
import { useERC20 } from "./useContract"
import { useWeb3 } from "./useWeb3";

export const useERC20Balance = (address, decimals = '18') => {
    const [balance, setBalance] = useState(undefined);
    const [displayBalance, setDisplayBalance] = useState(undefined)

    const contract = useERC20(address);
    const { account } = useWeb3();

    useEffect(() => {
        const fetch = async () => {
            const bal = await contract.methods.balanceOf(account).call();
            setBalance(new BigNumber(bal));
            setDisplayBalance(toLower(bal, decimals).toNumber())
        }
        if (contract) {
            fetch();
        }
    }, [contract])

    return { balance, displayBalance };
}