export default {
    dataSources: {
        warning_over_time: {
            name: 'warning count over time',
            type: 'ds.search',
            options: {
                query: 'index=_internal warning | timechart count',
                queryParameters: {
                    latest: 'now',
                    earliest: '-7d',
                },
            },
        },
        error_over_time: {
            name: 'error count over time',
            type: 'ds.search',
            options: {
                query: 'index=_internal error | timechart count',
                queryParameters: {
                    latest: 'now',
                    earliest: '-7d',
                },
            },
        },
        count_over_time: {
            name: 'count over time',
            type: 'ds.search',
            options: {
                query: 'index=_internal | timechart count',
                queryParameters: {
                    latest: 'now',
                    earliest: '-7d',
                },
            },
        },
    },
    inputs: {},
    layout: {
        type: 'absolute',
        options: {
            width: 1200,
            height: 600,
        },
        structure: [
            {
                item: 'text1',
                type: 'block',
                position: {
                    h: 50,
                    w: 490,
                    x: 20,
                    y: 10,
                },
            },
            {
                item: 'line_chart',
                type: 'block',
                position: {
                    h: 350,
                    w: 1080,
                    x: 20,
                    y: 70,
                },
            },
            {
                item: 'sv_warning',
                type: 'block',
                position: {
                    h: 150,
                    w: 150,
                    x: 150,
                    y: 150,
                },
            },
            {
                item: 'sv_error',
                type: 'block',
                position: {
                    h: 150,
                    w: 150,
                    x: 300,
                    y: 150,
                },
            },
        ],
    },
    title: 'Absolute Dashboard',
    description: '',
    visualizations: {
        line_chart: {
            title: 'total count',
            type: 'viz.area',
            dataSources: {
                primary: 'count_over_time',
            },
        },
        sv_error: {
            title: 'error count',
            type: 'viz.singlevalueradial',
            dataSources: {
                primary: 'error_over_time',
            },
        },
        text1: {
            type: 'viz.text',
            options: {
                content: 'You can place one widget on top of another',
            },
        },
        sv_warning: {
            title: 'warning count',
            type: 'viz.singlevalueradial',
            dataSources: {
                primary: 'warning_over_time',
            },
        },
    },
};
