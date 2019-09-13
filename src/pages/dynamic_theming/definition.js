export default {
    dataSources: {
        total_count_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal | stats count',
            },
        },
        error_count_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal error | stats count',
            },
        },
        info_count_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal info | stats count',
            },
        },
        warning_count_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal warning| stats count',
            },
        },
        event_by_component_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal | stats count by component',
            },
        },
        timechart_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal | timechart count',
            },
        },
    },
    inputs: {},
    layout: {
        type: 'grid',
        options: {
            padding: 20,
            margin: 10,
        },
        structure: [
            {
                item: 'sv_total_event',
                position: {
                    x: 1,
                    y: 1,
                    w: 3,
                    h: 2,
                },
            },
            {
                item: 'sv_info',
                position: {
                    x: 4,
                    y: 1,
                    w: 3,
                    h: 2,
                },
            },
            {
                item: 'sv_warning',
                position: {
                    x: 7,
                    y: 1,
                    w: 3,
                    h: 2,
                },
            },
            {
                item: 'sv_error',
                position: {
                    x: 10,
                    y: 1,
                    w: 3,
                    h: 2,
                },
            },
            {
                item: 'sv_event_by_component',
                position: {
                    x: 1,
                    y: 3,
                    w: 6,
                    h: 2,
                },
            },
            {
                item: 'event_over_time',
                position: {
                    x: 7,
                    y: 3,
                    w: 6,
                    h: 2,
                },
            },
        ],
    },
    title: 'Simple Dashboard',
    description: '',
    visualizations: {
        sv_total_event: {
            title: '_internal event count',
            type: 'viz.singlevalue',
            options: {
                backgroundColor: '#53a051',
            },
            dataSources: {
                primary: 'total_count_search',
            },
        },
        sv_error: {
            title: 'error count',
            type: 'viz.singlevalue',
            options: {
                backgroundColor: '#dc4e41',
            },
            dataSources: {
                primary: 'error_count_search',
            },
        },
        sv_warning: {
            title: 'warning count',
            type: 'viz.singlevalue',
            options: {
                backgroundColor: '#f8be34',
            },
            dataSources: {
                primary: 'warning_count_search',
            },
        },
        sv_info: {
            title: 'info count',
            type: 'viz.singlevalue',
            options: {
                backgroundColor: '#294e70',
            },
            dataSources: {
                primary: 'info_count_search',
            },
        },
        sv_event_by_component: {
            title: '_internal event count by component',
            type: 'viz.pie',
            dataSources: {
                primary: 'event_by_component_search',
            },
        },
        event_over_time: {
            title: '_internal event count over time',
            type: 'viz.area',
            dataSources: {
                primary: 'timechart_search',
            },
        },
    },
};
