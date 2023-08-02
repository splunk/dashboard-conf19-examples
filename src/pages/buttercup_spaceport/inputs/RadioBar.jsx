import React, { useCallback } from 'react';
import T from 'prop-types';
import { withInputWrapper } from '@splunk/dashboard-inputs';
import SUIRadioBar from '@splunk/react-ui/RadioBar';

const noItems = [];
const noOptions = {};

const RadioBar = ({ value, onValueChange, options: { defaultValue, items = noItems } = noOptions }) => {
    const handleClick = useCallback(
        (evt, { value: itemValue }) => {
            onValueChange(evt, itemValue);
        },
        [onValueChange]
    );

    return (
        <SUIRadioBar value={value || defaultValue} onChange={handleClick} inline>
            {items.map(({ label: l, value: v }) => (
                <SUIRadioBar.Option value={v} label={l} key={l} />
            ))}
        </SUIRadioBar>
    );
};

RadioBar.propTypes = {
    value: T.string,
    onValueChange: T.func,
    options: T.object,
};

RadioBar.defaultProps = {
    onValueChange: () => undefined,
};

/**
 * Transforms the value or values from the input to a set of token: value pairs
 * @param {String} value Select only the selected item value
 * @param {Object} meta
 * @param {String} meta.token The token name
 * @param {String} meta.prefix Content that prepends the value
 * @param {String} meta.suffix Content that appends the value
 * @returns {Object}
 */
RadioBar.valueToTokens = (value, { token }) => {
    if (!token) {
        return {};
    }
    if (!value) {
        return {
            [token]: null,
        };
    }
    return {
        [token]: `${value}`,
    };
};

export default withInputWrapper(RadioBar);
