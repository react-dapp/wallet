import { useState, useEffect } from "react";
import { Multicall } from "ethereum-multicall";
import { useConfig } from "../contexts/configContext";
import { useWeb3 } from './useWeb3'
import lp_abi from "../assets/abis/lpAbi.json";
import erc20_abi from "../assets/abis/erc20Abi.json";
import BigNumber from "bignumber.js";
/**
 * 
 * A easy to use hook, to get token info and price of tokens of an LP token
 * 
 * @param {Address Of LP Token} address 
 * @param {Symbol of token to use as base token to calculate price} baseTokenSymbol 
 * @param {Address of token to use as base token to calculate price} baseTokenAddress 
 * @returns 
 * 
 * If baseTokenSymbol is provided, it will be given priority over baseTokenAddress
 * 
 */
export const useLp = (address, baseTokenSymbol, baseTokenAddress) => {
    const { web3 } = useWeb3();
    const [loading, setLoading] = useState(false);
    const [lp, setLp] = useState({
        name: undefined,
        symbol: undefined,
        token0: undefined,
        token1: undefined,
    });

    const [token0, setToken0] = useState({
        name: undefined,
        symbol: undefined,
        decimals: undefined,
        address: undefined,
        totalSupply: undefined,
        lpBalance: undefined
    });

    const [token1, setToken1] = useState({
        name: undefined,
        symbol: undefined,
        decimals: undefined,
        address: undefined,
        totalSupply: undefined,
        lpBalance: undefined
    });

    const [price, setPrice] = useState({
        token0: undefined,
        token1: undefined,
        basePrice: undefined,
    });

    const fetchData = async () => {
        setLoading(true);
        try {
            const multicall = new Multicall({ web3Instance: web3, tryAggregate: true });
            const lpCall = [
                {
                    reference: "lp",
                    contractAddress: address,
                    abi: lp_abi,
                    calls: [
                        {
                            methodName: "token0",
                            methodParameters: [],
                        },
                        {
                            methodName: "token1",
                            methodParameters: [],
                        },
                        {
                            methodName: "name",
                            methodParameters: [],
                        },
                        {
                            methodName: "symbol",
                            methodParameters: [],
                        },
                    ],
                },
            ];
            const data1 = await multicall.call(lpCall);
            const lpresult = data1.results.lp.callsReturnContext;

            setLp({
                token0: lpresult[0].returnValues[0],
                token1: lpresult[1].returnValues[0],
                name: lpresult[2].returnValues[0],
                symbol: lpresult[3].returnValues[0],
            });

            const tokensCall = [
                {
                    reference: "token0",
                    contractAddress: lpresult[0].returnValues[0],
                    abi: erc20_abi,
                    calls: [
                        {
                            methodName: "name",
                            methodParameters: [],
                        },
                        {
                            methodName: "symbol",
                            methodParameters: [],
                        },
                        {
                            methodName: "decimals",
                            methodParameters: [],
                        },
                        {
                            methodName: "totalSupply",
                            methodParameters: [],
                        },
                        {
                            methodName: "balanceOf",
                            methodParameters: [address],
                        },
                    ],
                },
                {
                    reference: "token1",
                    contractAddress: lpresult[1].returnValues[0],
                    abi: erc20_abi,
                    calls: [
                        {
                            methodName: "name",
                            methodParameters: [],
                        },
                        {
                            methodName: "symbol",
                            methodParameters: [],
                        },
                        {
                            methodName: "decimals",
                            methodParameters: [],
                        },
                        {
                            methodName: "totalSupply",
                            methodParameters: [],
                        },
                        {
                            methodName: "balanceOf",
                            methodParameters: [address],
                        },
                    ],
                },
            ];

            const data2 = await multicall.call(tokensCall);
            const token0result = data2.results.token0.callsReturnContext;
            const token1result = data2.results.token1.callsReturnContext;
            setToken0({
                address: lp.token0,
                name: token0result[0].returnValues[0],
                symbol: token0result[1].returnValues[0],
                decimals: token0result[2].returnValues[0],
                totalSupply: token0result[3].returnValues[0],
                lpBalance: token0result[4].returnValues[0],
            });

            setToken1({
                address: lp.token1,
                name: token1result[0].returnValues[0],
                symbol: token1result[1].returnValues[0],
                decimals: token1result[2].returnValues[0],
                totalSupply: token1result[3].returnValues[0],
                lpBalance: token1result[4].returnValues[0],
            });
        }
        catch (e) {
            console.log(`Error During Multicall: ${e}`)
        }
        setLoading(false);
    };

    useEffect(() => {
        if (web3)
            fetchData();
    }, [web3]);

    useEffect(() => {
        if (lp.name && token0.name && token1.name) {
            const token0Balance = new BigNumber(token0.lpBalance.hex, 16);
            const token1Balance = new BigNumber(token1.lpBalance.hex, 16);

            const token0Price = token1Balance
                .div(new BigNumber(10).exponentiatedBy(token1.decimals))
                .div(
                    token0Balance.div(new BigNumber(10).exponentiatedBy(token0.decimals))
                );

            const token1Price = token0Balance
                .div(new BigNumber(10).exponentiatedBy(token0.decimals))
                .div(
                    token1Balance.div(new BigNumber(10).exponentiatedBy(token1.decimals))
                );

            setPrice({
                token0: token0Price,
                token1: token1Price,
                basePrice:
                    token0.symbol === baseTokenSymbol
                        ? token0Price
                        : token1.symbol === baseTokenSymbol
                            ? token1Price
                            : token0.address === baseTokenAddress ?
                                token0Price : token1.address === baseTokenAddress ?
                                    token1Price : "Invalid Symbol/Address",
            });
        }
    }, [lp, token0, token1]);

    return { lp, token0, token1, price, loading };
};

/**
 * Use this hook with token-native lp to get usd price
 * 
 * @param {Address of TOKEN-NATIVE lp pair} address 
 * @returns 
 */
export const useUSDLp = (address) => {
    const { config } = useConfig();
    const { nativeUsdLp, wrappedNative } = config

    const native_usd_lp = useLp(nativeUsdLp.address, wrappedNative.symbol);
    const token_native_lp = useLp(address, wrappedNative.symbol);
    const [price, setPrice] = useState(undefined);

    useEffect(() => {
        if (native_usd_lp?.price?.basePrice && token_native_lp?.price?.basePrice && !native_usd_lp.loading && !token_native_lp.loading) {
            const _price = native_usd_lp.price.basePrice.div(
                token_native_lp.price.basePrice
            );
            setPrice(_price);
        }
    }, [native_usd_lp.loading, token_native_lp.loading]);

    return {
        lp: token_native_lp.lp,
        token0: token_native_lp.token0,
        token1: token_native_lp.token1,
        loading: token_native_lp.loading || nativeUsdLp.loading,
        price: { ...token_native_lp.price, usdPrice: price },
    };
};