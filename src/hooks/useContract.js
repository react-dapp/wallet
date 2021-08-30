import { useMemo } from "react";
import { useWeb3 } from "../hooks/useWeb3";
import ERC20_ABI from "../assets/abis/erc20Abi.json";
import ERC721_ABI from "../assets/abis/erc721Abi.json";
import ERC1155_ABI from "../assets/abis/erc1155Abi.json";

const getContract = (abi, address, web3) => {
  if (web3)
    return new web3.eth.Contract(abi, address);
};

export const useERC721 = (address) => {
  const { web3 } = useWeb3();
  return useMemo(() => getContract(ERC721_ABI, address, web3), [web3]);
};

export const useERC1155 = (address) => {
  const { web3 } = useWeb3();
  return useMemo(() => getContract(ERC1155_ABI, address, web3), [web3]);
};

export const useERC20 = (address) => {
  const { web3 } = useWeb3();
  return useMemo(() => getContract(ERC20_ABI, address, web3), [web3]);
};
