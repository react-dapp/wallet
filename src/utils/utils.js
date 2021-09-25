import BigNumber from "bignumber.js";

export const switchChain = async (network) => {
    const provider = (window).ethereum
    if (provider) {
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: network.chainId }],
            });
            return true
        } catch (error) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (error.code === 4902) {
                try {
                    await provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [network],
                    });
                    return true
                } catch (addError) {
                    console.error("Can't setup the network on metamask because window.ethereum is undefined")
                    return false
                }
            }
            console.error("Can't setup the network on metamask because window.ethereum is undefined")
            return false
        }
    }
}

export const addTokenToWallet = async (
    tokenAddress,
    tokenSymbol,
    tokenDecimals,
    tokenImage,
) => {
    const tokenAdded = await (window).ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
        },
    })

    return tokenAdded
}

export const toLower = (value, decimals = "18", bignumber = true) => {
    let ans = new BigNumber("0");
    if (value)
        ans = new BigNumber(value.toString()).div(
            new BigNumber(10).exponentiatedBy(decimals)
        );
    if (bignumber) return ans;
    else return ans.toNumber();
};

export const toUpper = (value, decimals = "18", bignumber = true) => {
    let ans = new BigNumber("0");
    if (value) {
        ans = new BigNumber(value.toString()).times(
            new BigNumber(10).exponentiatedBy(decimals)
        );
    }
    if (bignumber) return ans;
    else return ans.toNumber();
};

export const getTimeLeft = (delta) => {
    if (!delta) return "";
    if (delta && delta === "0") return null;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    days = parseInt(days);

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    hours = parseInt(hours);

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    minutes = parseInt(minutes);

    // what's left is seconds
    var seconds = delta % 60;
    seconds = parseInt(seconds);

    return { days, hours, minutes, seconds };
};

export const getApy = (
    stakingTokenPrice,
    rewardTokenPrice,
    totalStaked,
    tokenPerBlock,
    blocksPerYear = new BigNumber(10512000)
) => {
    const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(blocksPerYear)
    const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
    const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
    return apy.isNaN() || !apy.isFinite() ? null : apy.toNumber()
}