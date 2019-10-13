export default {
    dataSources: {
        ds_1: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Eating',
                        },
                        {
                            name: 'Drinking',
                        },
                        {
                            name: 'Sleeping',
                        },
                        {
                            name: 'Designing',
                        },
                        {
                            name: 'Coding',
                        },
                        {
                            name: 'Cycling',
                        },
                        {
                            name: 'Running',
                        },
                    ],
                    columns: [[65, 28], [59, 48], [90, 40], [81, 19], [56, 96], [55, 27], [40, 100]],
                },
            },
        },
    },
    inputs: {},
    layout: {
        type: 'absolute',
        options: {},
        structure: [
            {
                item: 'viz1',
                type: 'block',
                position: {
                    h: 700,
                    w: 700,
                    x: 30,
                    y: 30,
                },
            },
        ],
    },
    description: '',
    visualizations: {
        viz1: {
            type: 'viz.donut',
            options: {},
            dataSources: {
                primary: 'ds_1',
            },
        },
    },
};
