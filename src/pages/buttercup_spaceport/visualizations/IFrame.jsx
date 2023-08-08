import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const Container = styled.div.attrs(({ $width, $height }) => ({
    style: { width: `${$width}px`, height: `${$height}px` },
}))``;

const Frame = styled.iframe.attrs(({ $width, $height }) => ({
    width: $width,
    height: $height,
}))`
    border: 0;
    overflow: hidden;
    margin: 0;
`;

const IFrameViz = ({ options, width, height }) => (
    <Container $height={height} $width={width}>
        <Frame $width={width} $height={height} src={options.url} allow="autoplay; encrypted-media" />
    </Container>
);

IFrameViz.propTypes = {
    options: T.object,
    width: T.number,
    height: T.number,
};

export default IFrameViz;
