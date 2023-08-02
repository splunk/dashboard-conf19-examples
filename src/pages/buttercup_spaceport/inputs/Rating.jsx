import React, { useMemo } from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import SVG from '@splunk/react-icons/SVG';
import Tooltip from '@splunk/react-ui/Tooltip';
import { withInputWrapper } from '@splunk/dashboard-inputs';

const Title = styled.div`
    font-weight: bold;
`;

const IconContainer = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;

    & > svg {
        margin-right: 5px;
    }
`;

const FlexContainer = styled.div`
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
`;

// eslint-disable-next-line react/prop-types
const KeyValueViewer = ({ title, value }) => (
    <FlexContainer>
        <span>{title}</span>
        <span>{value}</span>
    </FlexContainer>
);

const Rating1 = (
    <SVG viewBox="0 0 24 20" size="26px">
        <path
            opacity="0.9"
            d="M12 1L22.3923 19H1.6077L12 1Z"
            fill="#E72D2D"
            fillOpacity="0.1"
            stroke="#E72D2D"
            strokeLinecap="square"
        />
    </SVG>
);

const Rating2 = (
    <SVG viewBox="0 0 22 26" size="26px">
        <path
            opacity="0.9"
            d="M11 1L21.3923 7V19L11 25L0.607696 19V7L11 1Z"
            fill="#F58B00"
            fillOpacity="0.1"
            stroke="#F58B00"
            strokeLinecap="square"
        />
    </SVG>
);

const Rating3 = (
    <SVG viewBox="0 0 26 26" size="26px">
        <path
            opacity="0.9"
            d="M13 1L25 13L13 25L1 13L13 1Z"
            fill="#424D8F"
            fillOpacity="0.1"
            stroke="#424D8F"
            strokeLinecap="square"
        />
    </SVG>
);

const Rating4 = (
    <SVG viewBox="0 0 26 24" size="26px">
        <path
            d="M13 1L17.0205 7.46632L24.4127 9.2918L19.5052 15.1137L20.0534 22.7082L13 19.84L5.94658 22.7082L6.49477 15.1137L1.58732 9.2918L8.97955 7.46632L13 1Z"
            fill="#008C80"
            fillOpacity="0.1"
            stroke="#008C80"
        />
    </SVG>
);

const Rating5 = (
    <SVG viewBox="0 0 26 26" size="26px">
        <path
            d="M13 1L15.8553 4.21224L20.0534 3.2918L20.4753 7.56886L24.4127 9.2918L22.24 13L24.4127 16.7082L20.4753 18.4311L20.0534 22.7082L15.8553 21.7878L13 25L10.1447 21.7878L5.94658 22.7082L5.52468 18.4311L1.58732 16.7082L3.76 13L1.58732 9.2918L5.52468 7.56886L5.94658 3.2918L10.1447 4.21224L13 1Z"
            fill="#99B100"
            fillOpacity="0.1"
            stroke="#A8C106"
        />
    </SVG>
);

const defaultOptions = {};

const Rating = ({ dataSources, loading: isLoading, isError, options: { tooltipTitle } = defaultOptions }) => {
    const rating = useMemo(() => {
        if (isLoading || isError || !dataSources || !dataSources.primary || !dataSources.primary.data) {
            return 0;
        }
        let total = 0;
        dataSources.primary.data.columns[1].forEach((val) => {
            total += parseFloat(val);
        });
        return Math.round(total / dataSources.primary.data.columns[1].length);
    }, [isLoading, isError, dataSources]);

    const { icon, ratingText } = useMemo(() => {
        let el = null;
        let txt = '';

        switch (rating) {
            case 1:
                el = Rating1;
                txt = 'Very Dissatisfied';
                break;
            case 2:
                el = Rating2;
                txt = 'Dissatisfied';
                break;
            case 3:
                el = Rating3;
                txt = 'Neutral';
                break;
            case 4:
                el = Rating4;
                txt = 'Satisfied';
                break;
            case 5:
                el = Rating5;
                txt = 'Very Satisfied';
                break;
            default:
        }
        return { icon: el, ratingText: txt };
    }, [rating]);

    const tooltipContent = useMemo(() => {
        if (!dataSources.primary || !dataSources.primary.data) {
            return null;
        }

        const { columns } = dataSources.primary.data;

        return (
            <>
                <Title>{tooltipTitle}</Title>
                <IconContainer>
                    {icon}
                    {ratingText}
                </IconContainer>
                {columns[0].map((key, idx) => (
                    <KeyValueViewer title={key} key={key} value={Math.round(columns[1][idx])} />
                ))}
            </>
        );
    }, [dataSources, tooltipTitle, icon, ratingText]);

    if (!icon) {
        return null;
    }

    // We wanted a light tooltip, default behavior is to invert colors
    return (
        <Tooltip content={tooltipContent} appearance="normal">
            {icon}
        </Tooltip>
    );
};

Rating.propTypes = {
    dataSources: T.object,
    loading: T.bool,
    isError: T.bool,
    options: T.object,
};

export default withInputWrapper(Rating);
