import React, { useCallback } from 'react';
import T from 'prop-types';
import { withInputWrapper } from '@splunk/dashboard-inputs';
import SUISelect from '@splunk/react-ui/Select';

const defaultItems = [
    { label: 'Young Adults', value: '0,39' },
    { label: 'Middle Aged Adults', value: '40,59' },
    { label: 'Older Adults', value: '60,1000' },
];

const defaultOptions = { items: defaultItems };

const AgeSelect = ({ value, onValueChange, options: { defaultValue = '0,39', items } = defaultOptions }) => {
    const handleClick = useCallback(
        (evt, { value: itemValue }) => {
            onValueChange(evt, itemValue);
        },
        [onValueChange]
    );

    return (
        <SUISelect appearance="link" value={value || defaultValue} onChange={handleClick} placeholder="Age">
            {(items || defaultItems).map(({ label: l, value: v }) => (
                <SUISelect.Option value={v} label={l} key={l} />
            ))}
        </SUISelect>
    );
};

AgeSelect.propTypes = {
    value: T.string,
    onValueChange: T.func,
    options: T.object,
};

AgeSelect.defaultProps = {
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
AgeSelect.valueToTokens = (value, { token }) => {
    if (!token) {
        return {};
    }
    if (!value) {
        return {
            [token]: null,
        };
    }
    const vals = value.split(',');
    return {
        [`${token}.min`]: `${vals[0]}`,
        [`${token}.max`]: `${vals[1]}`,
    };
};

export default withInputWrapper(AgeSelect);
