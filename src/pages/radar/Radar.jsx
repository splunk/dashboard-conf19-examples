import React from 'react';
import Radar from 'react-chartjs-2';
import BaseVisualization from '@splunk/dashboard-visualizations/common/BaseVisualization';

// Options for each dataset. These could also be passed in from the visualization config options
const defaultOptions = {
    backgroundColor: ['rgba(179,181,198,0.2)', 'rgba(255,99,132,0.2)'],
    borderColor: ['rgba(179,181,198,1)', 'rgba(255,99,132,1)'],
    pointBackgroundColor: ['rgba(179,181,198,1)', 'rgba(255,99,132,1)'],
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: ['rgba(179,181,198,1)', 'rgba(255,99,132,1)'],
};

/**
 * Pulls out a flattened set of options for a dataset, e.g. where a list of colors are given for a specific option it will chose one
 * @param {Object} options The options object
 * @param {Number} itr An iterator representing which dataset is being configured
 * @returns {Object} A flattened set of options for the given dataset
 */
const getOptions = (options, itr) => {
    const config = {};
    Object.keys(options).forEach(key => {
        config[key] = Array.isArray(options[key]) ? options[key][itr] : options[key];
    });

    return config;
};

/**
 * Extract data from the datasource to the chart.js format
 * @param {Object} dataSources Hashmap of configured datasources
 * @param {Object} options Visualization options to be applied to the dataset
 */
const extractData = (dataSources, options) => {
    if (!dataSources.primary.data) {
        return {
            labels: [],
            datasets: [],
        };
    }

    /**
     * Converting data to Chart.js expected format.
     * Typically, this would be handled with an encoding parser where the uesr-defined encoding prop
     * is read to determine how to process the dataSources and its data
     */
    // Pulling the labels as the column names
    const labels = dataSources.primary.data.fields.map(l => l.name);
    // initial format for Chart.js data
    const chartData = {
        labels,
        datasets: [],
    };

    // Pulling data for each column into the dataset
    dataSources.primary.data.columns.forEach(col => {
        col.forEach((val, itr) => {
            // Create a new dataset object if it doesn't already exist
            if (!chartData.datasets[itr]) {
                chartData.datasets.push({
                    // Add the options to style the dataset
                    ...getOptions({ ...defaultOptions, ...options }, itr),
                    label: `data${itr}`,
                    data: [],
                });
            }

            // Add data from the column to the dataset
            const ds = chartData.datasets[itr];
            ds.data.push(val);
        });
    });

    return chartData;
};

const RadarViz = ({ options, width, height, dataSources }) => {
    const chartData = extractData(dataSources, options);

    // Provide some defaults for chart options
    const displayLegend = options.legend === undefined ? true : !!options.legend;
    const legendPosition =
        options.legendPosition && ['top', 'bottom', 'left', 'right'].includes(options.legendPosition)
            ? options.legendPosition
            : 'top';

    return (
        <Radar
            // type shouldn't be required here, but for some reason it isn't setting the chart type correctly without it
            type="radar"
            data={chartData}
            width={width}
            height={height}
            options={{
                // colors for dark mode
                scale: {
                    pointLabels: {
                        fontColor: '#fff',
                    },
                    angleLines: {
                        color: '#fff',
                    },
                    gridLines: {
                        color: '#fff',
                    },
                },
                legend: {
                    display: displayLegend,
                    position: legendPosition,
                },
            }}
        />
    );
};

RadarViz.propTypes = BaseVisualization.propTypes;

RadarViz.defaultProps = {
    ...BaseVisualization.defaultProps,
    height: 250,
    width: 300,
};

export default RadarViz;
