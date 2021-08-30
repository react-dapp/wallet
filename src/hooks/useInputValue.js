import { useEffect, useState } from "react";
import { toLower, toUpper } from '../utils/utils'
import BigNumber from "bignumber.js";

export const useInputValue = (maxValue, decimals = "18", fixedDecimals = 2) => {
    const [value, _setValue] = useState('');
    const [max, _setMax] = useState(false);
    const [error, setError] = useState(null);
    const [maxDisplayValue, setMaxDisplayValue] = useState(null);

    useEffect(() => {
        setMaxDisplayValue(toLower(maxValue, decimals).toFixed(fixedDecimals));
    }, [maxValue]);

    const setValue = (_value) => {
        _setValue(_value ?? 0);

        if (_value !== '' && isNaN(_value)) {
            setError("Invalid Number!");
            return;
        }
        if (!_value || _value === "" || _value === "0") {
            setError(null)
            return
        };

        if (maxDisplayValue === _value) return;
        _setMax(false);

        if (toUpper(_value, decimals).gt(BigNumber(maxValue)))
            setError("Invalid Amount!");
        else setError(null);
    };

    const getValue = () => {
        return max
            ? new BigNumber(maxValue).toString()
            : toUpper(value, decimals, true).toString();
    };

    const selectMaxValue = () => {
        setError(null);
        _setMax(true);
        _setValue(toLower(maxValue, decimals).toFixed(fixedDecimals));
    };

    return { value, maxDisplayValue, error, setValue, getValue, selectMaxValue };
};
