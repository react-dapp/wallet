import { useWeb3 } from "./useWeb3";
import { useState } from "react";
import { STATE } from "../constants/enums";

export const useWaleltSign = () => {
  const [signature, setSignature] = useState(null);
  const [signState, setSignState] = useState(STATE.IDLE);
  const { account, web3 } = useWeb3();

  const sign = async (hash, pauseSuccessState) => {
    try {
      // const value = ethers.utils.arrayify(hash);
      setSignState(STATE.BUSY);
      const sig = await web3.eth.personal.sign(hash, account);

      setSignature(sig);
      if (!pauseSuccessState) setSignState(STATE.SUCCEED);
      return sig;
    } catch (e) {
      console.log(e);
      setSignState(STATE.FAILED);
      return null;
    }
  };

  return { sign, signState, signature, setSignState, setSignature };
};
