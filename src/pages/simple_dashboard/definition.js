export default {
    dataSources: {
        total_count_search: {
            type: 'ds.search',
            options: {
                query: 'index=_internal | stats count',
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
            backgroundColor: '#eff0f1',
        },
        structure: [
            {
                item: 'sv_total_event',
                position: {
                    x: 1,
                    y: 1,
                    w: 12,
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
                backgroundColor: '#ffffff',
            },
            dataSources: {
                primary: 'total_count_search',
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
