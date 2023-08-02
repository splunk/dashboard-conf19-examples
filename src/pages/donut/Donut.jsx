/* eslint-env browser */
import React, { useCallback, useMemo } from 'react';
import T from 'prop-types';
import * as d3 from 'd3';
import styled from 'styled-components';

const useD3 = (renderChartFn) => {
    const ref = React.useRef();

    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
    }, [renderChartFn]);

    return ref;
};

const Container = styled.div`
    background: ${(props) => props.background};
    color: white;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Splunk Platform Sans', sans-serif;
    width: ${(props) => props.width};
    height: ${(props) => props.width};
`;

const processData = (dataSources) => {
    // remember encoding
    if (!dataSources || !dataSources.primary || !dataSources.primary.data) {
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
    const fieldNames = dataSources.primary.data.fields.map((f) => f.name);
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

const Donut = ({ dataSources, width, height, options }) => {
    const d3Data = useMemo(() => processData(dataSources), [dataSources]);

    const d3RenderFn = useCallback(
        (svg) => {
            const { value } = d3Data;
            const internalHeight = height - 25;
            const radius = Math.min(width, internalHeight) / 2.5;

            const colorScheme = options.colorScheme || 'schemeCategory10';
            const color = d3.scaleOrdinal(d3[colorScheme]);

            const pie = d3
                .pie()
                .value((d) => d)
                .sort(null);
            const arc = d3
                .arc()
                .innerRadius(radius - 50)
                .outerRadius(radius - 10);

            svg.append('g').attr('transform', `translate(${width / 2.5},${height / 2})`);

            // join data
            let arcs = svg.selectAll('.arc').data(pie(value));

            // remove unneeded arcs
            arcs.exit().remove();

            // enter arc
            arcs = arcs.enter().append('g').attr('class', 'arc');

            arcs.append('path')
                .attr('fill', (d, i) => color(i))
                .attr('d', arc);

            // note: for demo purpose
            // arcs.append('text')
            //     .attr('transform', (d) => {
            //         const [x, y] = arc.centroid(d);
            //         return `translate(${x - 8},${y})`;
            //     })
            //     .style('font-size', 8)
            //     .text((d) => d.value);

            // const { label } = d3Data;
            // const legend = svg.selectAll('.legend').data(label).enter().append('g').attr('class', 'legend');

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
            //     .text((d) => d);
        },
        [d3Data, width, height, options]
    );

    const ref = useD3(d3RenderFn);

    return (
        <Container width={width} height={height} background={options.backgroundColor}>
            <svg width={width} height={height} ref={ref} />
        </Container>
    );
};

Donut.propTypes = {
    /**
     * width in pixel or string, defaults to 100%
     */
    width: T.oneOfType([T.string, T.number]),
    /**
     * height in pixel or string
     */
    height: T.oneOfType([T.string, T.number]),
    /**
     * visualization formatting options
     */
    options: T.object,
    /**
     * datasource state which include data and request params, object key indicate the datasource type.
     */
    dataSources: T.objectOf(
        T.shape({
            /**
             * current request params
             */
            requestParams: T.object,
            /**
             * current dataset
             */
            data: T.shape({
                fields: T.array,
                columns: T.array,
            }),
            /**
             * error
             */
            error: T.shape({
                level: T.string,
                message: T.string,
            }),
            /**
             * meta data that came with the dataset
             */
            meta: T.object,
        })
    ),
};

Donut.defaultProps = {
    options: {},
    height: 250,
    width: 600,
    dataSources: {},
};

export default Donut;
