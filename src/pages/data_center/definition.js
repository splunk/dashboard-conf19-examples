export default {
    visualizations: {
        viz_BQQxwipa: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                fill: '#ffffff',
                fillOpacity: 0.2,
                stroke: 'transparent',
            },
        },
        viz_es48cFur: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                fill: '#ffffff',
                fillOpacity: 0.2,
                stroke: 'transparent',
            },
        },
        viz_JUNd5JdH: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                fill: '#ffffff',
                fillOpacity: 0.2,
                stroke: 'transparent',
            },
        },
        viz_FhaFy99F: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                fill: '#ffffff',
                fillOpacity: 0.2,
                stroke: 'transparent',
            },
        },
        viz_0z5USc8k: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: false,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: '#53a051',
            },
            dataSources: {
                primary: 'search1',
            },
        },
        viz_gSCFjAX3: {
            type: 'viz.text',
            options: {
                content: 'ServiceHealthScore',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 12,
            },
        },
        viz_ShQLzIgR: {
            type: 'viz.singlevalueradial',
            options: {
                backgroundColor: '#dc4e41',
            },
            dataSources: {
                primary: 'search2',
            },
        },
        viz_bDAhNoYZ: {
            type: 'viz.text',
            options: {
                content: 'CPU Utilization %',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 12,
            },
        },
        viz_IP1KWswv: {
            type: 'viz.text',
            options: {
                content: 'West',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 22,
            },
        },
        viz_l6r80wMC: {
            type: 'viz.text',
            options: {
                content: 'Data Center Overview',
                backgroundColor: 'transparent',
                color: '#0877a6',
                fontSize: 16,
            },
        },
        viz_M6akZVFI: {
            type: 'viz.singlevalueradial',
            options: {
                backgroundColor: '#dc4e41',
            },
            dataSources: {
                primary: 'search2',
            },
        },
        viz_NJeJdvcs: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: false,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: '#53a051',
            },
            dataSources: {
                primary: 'search1',
            },
        },
        viz_voBUlZmz: {
            type: 'viz.singlevalueradial',
            options: {
                backgroundColor: '#dc4e41',
            },
            dataSources: {
                primary: 'search2',
            },
        },
        viz_xVioP174: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: false,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: '#53a051',
            },
            dataSources: {
                primary: 'search1',
            },
        },
        viz_ZtDnP0Fs: {
            type: 'viz.singlevalueradial',
            options: {
                backgroundColor: '#dc4e41',
            },
            dataSources: {
                primary: 'search2',
            },
        },
        viz_I1tMmHEB: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: false,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: '#53a051',
            },
            dataSources: {
                primary: 'search1',
            },
        },
        viz_7ECX44YZ: {
            type: 'viz.text',
            options: {
                content: 'Requests',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 18,
            },
        },
        viz_cmZDGsHf: {
            type: 'viz.text',
            options: {
                content: 'Errors',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 18,
            },
        },
        viz_MoQSmEFW: {
            type: 'viz.text',
            options: {
                content: 'Web Response Time',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 18,
            },
        },
        viz_NEWyzYk9: {
            type: 'abslayout.line',
            options: {
                toArrow: false,
                fromArrow: false,
                strokeColor: '#ffffff',
                strokeDasharray: 4,
                strokeWidth: 1,
            },
        },
        viz_aI5IcN5M: {
            type: 'abslayout.line',
            options: {
                fromArrow: false,
                toArrow: false,
                strokeWidth: 1,
                strokeDasharray: 4,
                strokeColor: '#ffffff',
            },
        },
        viz_vLShmXtz: {
            type: 'abslayout.line',
            options: {
                fromArrow: false,
                toArrow: false,
                strokeWidth: 1,
                strokeDasharray: 4,
                strokeColor: '#ffffff',
            },
        },
        viz_fOG4XyMX: {
            type: 'abslayout.line',
            options: {
                toArrow: false,
                fromArrow: false,
                strokeColor: '#ffffff',
                strokeWidth: 1,
                strokeDasharray: 4,
            },
        },
        viz_qOQ0RiO2: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: false,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: '#f1813f',
            },
            dataSources: {
                primary: 'search2',
            },
        },
        viz_De0Q085K: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: false,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: '#53a051',
                rangeValues: [0, 25, 50, 75, 100],
                rangeColors: ['#c3cbd4', '#dc4e41', '#f8be34', '#53a051', '#c3cbd4'],
            },
            dataSources: {
                primary: 'search2',
            },
            eventHandlers: [
                {
                    type: 'drilldown.customUrl',
                    options: {
                        url: 'https://docs.splunk.com/Documentation/ITSI/4.2.0/User/Sourceediting',
                    },
                },
            ],
        },
        viz_H2sZWjvL: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://e0d86062-d930-4425-b100-13089d4caa6b',
                backgroundColor: 'transparent',
            },
        },
        viz_TexC1ecv: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://95040bb0-36fd-411b-aa6c-ecb3d542557c',
                backgroundColor: 'transparent',
            },
        },
        viz_pmn2ctU4: {
            type: 'viz.text',
            options: {
                content: 'East',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 22,
            },
        },
        viz_qvMWQl9T: {
            type: 'viz.text',
            options: {
                content: 'CPU Utilization %',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 12,
            },
        },
        viz_jkQBH6RD: {
            type: 'viz.text',
            options: {
                content: 'ServiceHealthScore',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 12,
            },
        },
        viz_zl8gxMFT: {
            type: 'viz.text',
            options: {
                content: 'Southwest',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 22,
            },
        },
        viz_kIi1soGf: {
            type: 'viz.text',
            options: {
                content: 'CPU Utilization %',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 12,
            },
        },
        viz_xKSRaS1V: {
            type: 'viz.text',
            options: {
                content: 'CPU Utilization %',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 12,
            },
        },
        viz_tsOZAAQj: {
            type: 'viz.text',
            options: {
                content: 'Southeast',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 22,
            },
        },
        viz_EI2wumBv: {
            type: 'viz.text',
            options: {
                content: 'ServiceHealthScore',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 12,
            },
        },
        viz_Qa6BCEba: {
            type: 'viz.text',
            options: {
                content: 'ServiceHealthScore',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: 12,
            },
        },
        viz_8SAf99G1: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://f36dac7e-fcca-49db-ac2e-a632ed583e52',
                backgroundColor: 'transparent',
            },
        },
        viz_H3GD36aj: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://95cf36c3-87d4-40cf-85eb-569b06ccfd5b',
                backgroundColor: 'transparent',
            },
        },
        viz_3WegcVL1: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://a070397a-bf9c-4e23-9ccd-961c865ea648',
                backgroundColor: 'transparent',
            },
        },
        viz_pedR5O1c: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://a070397a-bf9c-4e23-9ccd-961c865ea648',
                backgroundColor: 'transparent',
            },
        },
        viz_gv2TLU0g: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://a070397a-bf9c-4e23-9ccd-961c865ea648',
                backgroundColor: 'transparent',
            },
        },
        viz_aaxFnSUG: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://a070397a-bf9c-4e23-9ccd-961c865ea648',
                backgroundColor: 'transparent',
            },
        },
        viz_dDbKEp9R: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: false,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: '#dc4e41',
                rangeValues: [0, 25, 50, 75, 100],
                rangeColors: ['#c3cbd4', '#dc4e41', '#f8be34', '#53a051', '#c3cbd4'],
            },
            dataSources: {
                primary: 'search2',
            },
            eventHandlers: [
                {
                    type: 'drilldown.customUrl',
                    options: {
                        url: 'https://splunk.com',
                    },
                },
            ],
        },
        viz_fnXJAwah: {
            type: 'viz.singlevalueicon',
            options: {
                showValue: false,
                icon: 'local://33b4bb39-bc34-47f4-a807-1ac4301b7633',
                backgroundColor: 'transparent',
            },
        },
    },
    dataSources: {
        search1: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                    columns: [
                        ['95', '88', '88', '83', '84', '88', '88', '95', '98'],
                        ['1', '2', '3', '4', '5', '6', '7', '8'],
                    ],
                },
                meta: {},
            },
        },
        search2: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                    columns: [
                        ['95', '88', '88', '83', '84', '88', '88', '95', '96'],
                        ['1', '2', '3', '4', '5', '6', '7', '8'],
                    ],
                },
                meta: {},
            },
        },
    },
    inputs: {},
    layout: {
        type: 'absolute',
        options: {
            width: 1200,
            height: 800,
            backgroundColor: 'transparent',
            backgroundImage: {
                src:
                    'https://gallerytemplate2234f1c0a72745efad6eff8e9261a99b-develop.s3.us-west-2.amazonaws.com/public/BackgroundImage.jpg',
                x: 0,
                y: 0,
                sizeType: 'contain',
            },
            display: 'auto-scale',
        },
        structure: [
            {
                item: 'viz_BQQxwipa',
                type: 'block',
                position: {
                    x: 30,
                    y: 200,
                    w: 158,
                    h: 230,
                },
            },
            {
                item: 'viz_es48cFur',
                type: 'block',
                position: {
                    x: 30,
                    y: 460,
                    w: 158,
                    h: 230,
                },
            },
            {
                item: 'viz_JUNd5JdH',
                type: 'block',
                position: {
                    x: 1000,
                    y: 200,
                    w: 158,
                    h: 230,
                },
            },
            {
                item: 'viz_FhaFy99F',
                type: 'block',
                position: {
                    x: 1000,
                    y: 460,
                    w: 158,
                    h: 230,
                },
            },
            {
                item: 'viz_0z5USc8k',
                type: 'block',
                position: {
                    x: 40,
                    y: 340,
                    w: 140,
                    h: 60,
                },
            },
            {
                item: 'viz_gSCFjAX3',
                type: 'block',
                position: {
                    x: 50,
                    y: 390,
                    w: 120,
                    h: 30,
                },
            },
            {
                item: 'viz_ShQLzIgR',
                type: 'block',
                position: {
                    x: 40,
                    y: 240,
                    w: 140,
                    h: 68,
                },
            },
            {
                item: 'viz_bDAhNoYZ',
                type: 'block',
                position: {
                    x: 60,
                    y: 300,
                    w: 100,
                    h: 30,
                },
            },
            {
                item: 'viz_IP1KWswv',
                type: 'block',
                position: {
                    x: 80,
                    y: 200,
                    w: 60,
                    h: 40,
                },
            },
            {
                item: 'viz_l6r80wMC',
                type: 'block',
                position: {
                    x: 137,
                    y: 120,
                    w: 180,
                    h: 43,
                },
            },
            {
                item: 'viz_M6akZVFI',
                type: 'block',
                position: {
                    x: 40,
                    y: 500,
                    w: 140,
                    h: 68,
                },
            },
            {
                item: 'viz_NJeJdvcs',
                type: 'block',
                position: {
                    x: 40,
                    y: 600,
                    w: 140,
                    h: 60,
                },
            },
            {
                item: 'viz_voBUlZmz',
                type: 'block',
                position: {
                    x: 1010,
                    y: 240,
                    w: 140,
                    h: 68,
                },
            },
            {
                item: 'viz_xVioP174',
                type: 'block',
                position: {
                    x: 1010,
                    y: 340,
                    w: 140,
                    h: 60,
                },
            },
            {
                item: 'viz_ZtDnP0Fs',
                type: 'block',
                position: {
                    x: 1010,
                    y: 500,
                    w: 140,
                    h: 68,
                },
            },
            {
                item: 'viz_I1tMmHEB',
                type: 'block',
                position: {
                    x: 1010,
                    y: 600,
                    w: 140,
                    h: 60,
                },
            },
            {
                item: 'viz_7ECX44YZ',
                type: 'block',
                position: {
                    x: 640,
                    y: 35,
                    w: 110,
                    h: 43,
                },
            },
            {
                item: 'viz_cmZDGsHf',
                type: 'block',
                position: {
                    x: 910,
                    y: 35,
                    w: 110,
                    h: 43,
                },
            },
            {
                item: 'viz_MoQSmEFW',
                type: 'block',
                position: {
                    x: 370,
                    y: 35,
                    w: 190,
                    h: 43,
                },
            },
            {
                item: 'viz_NEWyzYk9',
                type: 'line',
                position: {
                    from: {
                        x: 188,
                        y: 316,
                    },
                    to: {
                        item: 'viz_3WegcVL1',
                        port: 'w',
                    },
                },
            },
            {
                item: 'viz_aI5IcN5M',
                type: 'line',
                position: {
                    from: {
                        x: 186,
                        y: 580,
                    },
                    to: {
                        x: 550,
                        y: 560,
                    },
                },
            },
            {
                item: 'viz_vLShmXtz',
                type: 'line',
                position: {
                    from: {
                        item: 'viz_gv2TLU0g',
                        port: 'e',
                    },
                    to: {
                        item: 'viz_JUNd5JdH',
                        port: 'w',
                    },
                },
            },
            {
                item: 'viz_fOG4XyMX',
                type: 'line',
                position: {
                    from: {
                        item: 'viz_aaxFnSUG',
                        port: 'e',
                    },
                    to: {
                        item: 'viz_FhaFy99F',
                        port: 'w',
                    },
                },
            },
            {
                item: 'viz_qOQ0RiO2',
                type: 'block',
                position: {
                    x: 330,
                    y: 80,
                    w: 230,
                    h: 70,
                },
            },
            {
                item: 'viz_De0Q085K',
                type: 'block',
                position: {
                    x: 600,
                    y: 80,
                    w: 230,
                    h: 70,
                },
            },
            {
                item: 'viz_H2sZWjvL',
                type: 'block',
                position: {
                    x: 330,
                    y: 40,
                    w: 35,
                    h: 35,
                },
            },
            {
                item: 'viz_TexC1ecv',
                type: 'block',
                position: {
                    x: 600,
                    y: 40,
                    w: 35,
                    h: 35,
                },
            },
            {
                item: 'viz_pmn2ctU4',
                type: 'block',
                position: {
                    x: 1050,
                    y: 200,
                    w: 60,
                    h: 40,
                },
            },
            {
                item: 'viz_qvMWQl9T',
                type: 'block',
                position: {
                    x: 60,
                    y: 560,
                    w: 100,
                    h: 30,
                },
            },
            {
                item: 'viz_jkQBH6RD',
                type: 'block',
                position: {
                    x: 50,
                    y: 650,
                    w: 120,
                    h: 30,
                },
            },
            {
                item: 'viz_zl8gxMFT',
                type: 'block',
                position: {
                    x: 55,
                    y: 460,
                    w: 110,
                    h: 40,
                },
            },
            {
                item: 'viz_kIi1soGf',
                type: 'block',
                position: {
                    x: 1030,
                    y: 300,
                    w: 100,
                    h: 30,
                },
            },
            {
                item: 'viz_xKSRaS1V',
                type: 'block',
                position: {
                    x: 1030,
                    y: 560,
                    w: 100,
                    h: 30,
                },
            },
            {
                item: 'viz_tsOZAAQj',
                type: 'block',
                position: {
                    x: 1030,
                    y: 460,
                    w: 110,
                    h: 40,
                },
            },
            {
                item: 'viz_EI2wumBv',
                type: 'block',
                position: {
                    x: 1030,
                    y: 390,
                    w: 120,
                    h: 30,
                },
            },
            {
                item: 'viz_Qa6BCEba',
                type: 'block',
                position: {
                    x: 1030,
                    y: 650,
                    w: 120,
                    h: 30,
                },
            },
            {
                item: 'viz_8SAf99G1',
                type: 'block',
                position: {
                    x: 330,
                    y: 40,
                    w: 35,
                    h: 35,
                },
            },
            {
                item: 'viz_H3GD36aj',
                type: 'block',
                position: {
                    x: 600,
                    y: 40,
                    w: 35,
                    h: 35,
                },
            },
            {
                item: 'viz_3WegcVL1',
                type: 'block',
                position: {
                    x: 360,
                    y: 340,
                    w: 40,
                    h: 40,
                },
            },
            {
                item: 'viz_pedR5O1c',
                type: 'block',
                position: {
                    x: 550,
                    y: 540,
                    w: 40,
                    h: 40,
                },
            },
            {
                item: 'viz_gv2TLU0g',
                type: 'block',
                position: {
                    x: 810,
                    y: 380,
                    w: 40,
                    h: 40,
                },
            },
            {
                item: 'viz_aaxFnSUG',
                type: 'block',
                position: {
                    x: 710,
                    y: 530,
                    w: 40,
                    h: 40,
                },
            },
            {
                item: 'viz_dDbKEp9R',
                type: 'block',
                position: {
                    x: 870,
                    y: 80,
                    w: 230,
                    h: 70,
                },
            },
            {
                item: 'viz_fnXJAwah',
                type: 'block',
                position: {
                    x: 870,
                    y: 40,
                    w: 35,
                    h: 35,
                },
            },
        ],
    },
    title: 'Data Center Overview',
    description: 'Example of a single value in the absolute layout',
};
