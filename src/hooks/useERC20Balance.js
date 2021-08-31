import { useEffect, useState } from "react";
import { useERC20 } from "./useContract"
import { useWeb3 } from "./useWeb3";

export const useERC20Balance = (address) => {
    const [balance, setBalance] = useState(undefined);

    const contract = useERC20(address);
    const { account } = useWeb3();

    useEffect(() => {
        const fetch = async () => {
            const bal = await contract.methods.balanceOf(account).call();
            setBalance(bal);
        }
        if (contract) {
            fetch();
        }
    }, [contract])

    return balance;
}