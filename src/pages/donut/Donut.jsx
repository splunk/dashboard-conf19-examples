import React from 'react';
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

export default class Donut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            d3: '',
        };
    }

    componentDidMount() {
        const data = this.processData();
        this.setState({
            d3: this.drawChart({ data }),
        });
    }

    processData() {
        // remember encoding
        const { dataSources } = this.props;
        // todo: should use Base Parser. (need fix one issue in parser)
        const fieldNames = dataSources.primary.options.data.fields.map(f => f.name);
        const donutData = {
            label: dataSources.primary.options.data.columns[0],
            value: dataSources.primary.options.data.columns[1],
            _meta: {
                fieldNames: {
                    label: fieldNames[0],
                    value: fieldNames[1],
                },
            },
        };

        return donutData;
    }

    // d3 code example is from https://bl.ocks.org/mbostock/1346395
    drawChart({ data = null }) {
        const node = document.createElement('div');
        const { value } = data;
        const { width } = this.props;
        const height = this.props.height - 25;
        const radius = Math.min(width, height) / 2;

        const colorScheme = this.props.options.colorScheme || 'schemeCategory10';
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
        //         const [x, y] =  arc.centroid(d);
        //         return 'translate(' + (x - 8) + ',' + y + ')';
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
        //     .attr('x', 80)
        //     .attr('y', (d, i) => i * 10)
        //     .attr('fill', (d, i) => color(i))

        // legend
        //     .append('text')
        //     .attr('fill', 'white')
        //     .style('font-size', 10)
        //     .attr('x', 100)
        //     .attr('y', (d, i) => i * 10)
        //     .attr('dy', '0.8em')
        //     .text(d => d);

        return node;
    }

    render() {
        const { width, height, background = 'transparent', title, description } = this.props;

        return (
            <Container width={width} height={height} background={background}>
                <div id="title">{title}</div>
                <div id="description">{description}</div>
                <RD3Component data={this.state.d3} />
            </Container>
        );
    }
}

Donut.propTypes = {
    ...BaseVisualization.propTypes,
};

Donut.defaultProps = {
    ...BaseVisualization.defaultProps,
    height: 250,
    width: 600,
};
