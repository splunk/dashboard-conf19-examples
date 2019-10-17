/* eslint-env browser */
import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import rd3 from 'react-d3-library';
import styled from 'styled-components';
import BaseVisualization from '@splunk/dashboard-visualizations/common/BaseVisualization';

const RD3Component = rd3.Component;

const Container = styled.div`
    background: ${props => props.background};
    color: white;
    font-weight: 600;
    font-size: 14px;
    font-family: Splunk Platform Sans, sans-serif;
    width: ${props => props.width};
    height: ${props => props.width};
`;

const processData = dataSources => {
    // remember encoding
    if (!dataSources.primary.data) {
        return {
            label: [],
            value: [],
            _meta: {
                fieldNames: {
                    label: '',
                    value: '',
                },
            },
        };
    }
    // todo: should use Base Parser. (need fix one issue in parser)
    const fieldNames = dataSources.primary.data.fields.map(f => f.name);
    const donutData = {
        label: dataSources.primary.data.columns[0],
        value: dataSources.primary.data.columns[1],
        _meta: {
            fieldNames: {
                label: fieldNames[0],
                value: fieldNames[1],
            },
        },
    };

    return donutData;
};

// d3 code example is from https://bl.ocks.org/mbostock/1346395
const drawChart = ({ data = null, width, height: initialHeight, options }) => {
    const node = document.createElement('div');
    const { value } = data;
    const height = initialHeight - 25;
    const radius = Math.min(width, height) / 2.5;

    const colorScheme = options.colorScheme || 'schemeCategory10';
    const color = d3.scaleOrdinal(d3[colorScheme]);

    const pie = d3
        .pie()
        .value(d => d)
        .sort(null);
    const arc = d3
        .arc()
        .innerRadius(radius - 50)
        .outerRadius(radius - 10);

    const svg = d3
        .select(node)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2.5},${height / 2})`);

    // join data
    let arcs = svg.selectAll('.arc').data(pie(value));

    // remove unneeded arcs
    arcs.exit().remove();

    // enter arc
    arcs = arcs
        .enter()
        .append('g')
        .attr('class', 'arc');

    arcs.append('path')
        .attr('fill', (d, i) => color(i))
        .attr('d', arc);

    // note: for demo purpose
    // arcs.append('text')
    //     .attr('transform', d => {
    //         const [x, y] = arc.centroid(d);
    //         return `translate(${x - 8},${y})`;
    //     })
    //     .style('font-size', 8)
    //     .text(d => d.value);

    // const { label } = data;
    // const legend = svg
    //     .selectAll('.legend')
    //     .data(label)
    //     .enter()
    //     .append('g')
    //     .attr('class', 'legend');

    // legend
    //     .append('rect')
    //     .attr('width', 10)
    //     .attr('height', 8)
    //     .attr('x', radius)
    //     .attr('y', (d, i) => i * 10)
    //     .attr('fill', (d, i) => color(i));

    // legend
    //     .append('text')
    //     .attr('fill', 'white')
    //     .style('font-size', 10)
    //     .attr('x', radius + 12)
    //     .attr('y', (d, i) => i * 10)
    //     .attr('dy', '0.8em')
    //     .text(d => d);

    return node;
};

const Donut = ({ dataSources, width, height, background = 'transparent', title, description, options }) => {
    const [d3Data, setD3Data] = useState('');

    useEffect(() => {
        const data = processData(dataSources);
        setD3Data(drawChart({ data, width, height, options }));
    }, [dataSources]);

    return (
        <Container width={width} height={height} background={background}>
            <div id="title">{title}</div>
            <div id="description">{description}</div>
            <RD3Component data={d3Data} />
        </Container>
    );
};

Donut.propTypes = {
    ...BaseVisualization.propTypes,
};

Donut.defaultProps = {
    ...BaseVisualization.defaultProps,
    height: 250,
    width: 600,
};

export default Donut;
