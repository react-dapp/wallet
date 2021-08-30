import {
  useERC721,
  useERC1155,
  useERC20,
} from "./useContract";
import { useState, useEffect } from "react";
import { useWeb3 } from "../hooks/useWeb3";
import BigNumber from "bignumber.js";
import { ZERO_ADDRESS, MAX_UINT } from "../constants/constants";
import { STATE } from "../constants/enums";

export const ZERO_BALANCE = new BigNumber(0);

export const useERC20Approval = (erc20Address, toApprove, requiredApprovedBalance) => {
  const [approvedBalance, setApprovedBalance] = useState(ZERO_BALANCE);
  const [approveState, setApproveState] = useState(STATE.IDLE);
  const [isApproved, setIsApproved] = useState(false);

  const { account } = useWeb3();
  const token = useERC20(erc20Address);

  const fetchApprovedBalance = async () => {
    if (erc20Address === ZERO_ADDRESS) {
      setIsApproved(true);
      return;
    }
    try {
      const bal = await token.methods.allowance(account, toApprove).call();
      const approveBal = new BigNumber(bal);
      setApprovedBalance(approveBal);
      setIsApproved(approveBal.gte(new BigNumber(requiredApprovedBalance ? requiredApprovedBalance : 1)));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (account && token) {
      fetchApprovedBalance();
    }
  }, [account, token]);

  const approve = async () => {
    try {
      setApproveState(STATE.BUSY);

      await token.methods.approve(toApprove, MAX_UINT).send({ from: account });
      await fetchApprovedBalance();

      setApproveState(STATE.SUCCEED);
    } catch (e) {
      console.log(e);
      setApproveState(STATE.FAILED);
    }
  };

  return { approvedBalance, isApproved, approveState, approve };
};

export const useERC721Approval = (erc721Address, toApprove) => {
  const [isApproved, setIsApproved] = useState(false);
  const [approveState, setApproveState] = useState(STATE.BUSY);
  const { account } = useWeb3();
  const contract = useERC721(erc721Address);

  const fetchApproved = async () => {
    setApproveState(STATE.BUSY);
    const _isApproved = await contract.methods
      .isApprovedForAll(account, toApprove)
      .call();
    setIsApproved(_isApproved);
    setApproveState(STATE.SUCCEED);
  };

  useEffect(() => {
    if (account && contract) {
      fetchApproved();
    }
  }, [account, contract]);

  const approve = async () => {
    try {
      setApproveState(STATE.BUSY);
      await contract.methods
        .setApprovalForAll(toApprove, true)
        .send({ from: account });
      await fetchApproved();
      setApproveState(STATE.SUCCEED);
    } catch (e) {
      console.log(e);
      setApproveState(STATE.FAILED);
    }
  };

  return { isApproved, approveState, approve };
};
