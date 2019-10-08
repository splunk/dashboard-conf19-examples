export default {
    dataSources: {
        search1_sparkline: {
            options: {
                data: {
                    columns: [
                        ['98', '80', '80', '4', '4', '10', '100', '95', '100'],
                        ['100', '100', '90', '30', '25', '5', '15', '95', '100'],
                    ],
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                },
                meta: {},
            },
            type: 'ds.test',
        },
        search2_sparkline2: {
            options: {
                data: {
                    columns: [['28', '27'], ['42', '41']],
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                },
                meta: {},
            },
            type: 'ds.test',
        },
        search_nosparkline: {
            options: {
                data: {
                    columns: [['0', '10'], ['0', '10']],
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                },
                meta: {},
            },
            type: 'ds.test',
        },
        search_nosparkline1: {
            options: {
                data: {
                    columns: [['9', '10'], ['1', '2']],
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                },
                meta: {},
            },
            type: 'ds.test',
        },
        search_nosparkline2: {
            options: {
                data: {
                    columns: [['363', '10'], ['28', '10']],
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                },
                meta: {},
            },
            type: 'ds.test',
        },
        search_nosparkline4: {
            options: {
                data: {
                    columns: [['100', '10'], ['79', '10']],
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                },
                meta: {},
            },
            type: 'ds.test',
        },
        search_nosparkline6: {
            options: {
                data: {
                    columns: [['N/A', '10'], ['N/A', '10']],
                    fields: [
                        {
                            name: 'foo',
                        },
                        {
                            name: 'bar',
                        },
                    ],
                },
                meta: {},
            },
            type: 'ds.test',
        },
    },
    description: 'glass table financial of absolute layout',
    layout: {
        options: {
            height: 1000,
            width: 1400,
        },
        structure: [
            {
                item: 'viz_image',
                position: {
                    h: 1000,
                    w: 1400,
                    x: 0,
                    y: 0,
                },
            },
            {
                item: 'viz_sparkline1',
                position: {
                    h: 90,
                    w: 185,
                    x: 45,
                    y: 295,
                },
            },
            {
                item: 'viz_text1a',
                position: {
                    h: 50,
                    w: 110,
                    x: 45,
                    y: 230,
                },
            },
            {
                item: 'viz_sparkline2',
                position: {
                    h: 90,
                    w: 185,
                    x: 45,
                    y: 790,
                },
            },
            {
                item: 'viz_text2a',
                position: {
                    h: 50,
                    w: 110,
                    x: 45,
                    y: 725,
                },
            },
            {
                item: 'viz_sparkline3',
                position: {
                    h: 90,
                    w: 185,
                    x: 1125,
                    y: 145,
                },
            },
            {
                item: 'viz_text3aa',
                position: {
                    h: 50,
                    w: 110,
                    x: 1185,
                    y: 80,
                },
            },
            {
                item: 'viz_text3a',
                position: {
                    h: 30,
                    w: 100,
                    x: 1075,
                    y: 300,
                },
            },
            {
                item: 'viz_value3a',
                position: {
                    h: 95,
                    w: 90,
                    x: 1075,
                    y: 340,
                },
            },
            {
                item: 'viz_text3b',
                position: {
                    h: 30,
                    w: 40,
                    x: 1100,
                    y: 440,
                },
            },
            {
                item: 'viz_value3b',
                position: {
                    h: 95,
                    w: 90,
                    x: 1175,
                    y: 340,
                },
            },
            {
                item: 'viz_text3c',
                position: {
                    h: 30,
                    w: 125,
                    x: 1160,
                    y: 440,
                },
            },
            {
                item: 'viz_text4a',
                position: {
                    h: 30,
                    w: 100,
                    x: 1075,
                    y: 550,
                },
            },
            {
                item: 'viz_value4a',
                position: {
                    h: 95,
                    w: 90,
                    x: 1075,
                    y: 590,
                },
            },
            {
                item: 'viz_text4b',
                position: {
                    h: 30,
                    w: 60,
                    x: 1100,
                    y: 690,
                },
            },
            {
                item: 'viz_value4b',
                position: {
                    h: 95,
                    w: 100,
                    x: 1175,
                    y: 590,
                },
            },
            {
                item: 'viz_text4c',
                position: {
                    h: 30,
                    w: 150,
                    x: 1170,
                    y: 690,
                },
            },
            {
                item: 'viz_text5a',
                position: {
                    h: 30,
                    w: 175,
                    x: 1075,
                    y: 800,
                },
            },
            {
                item: 'viz_value5a',
                position: {
                    h: 80,
                    w: 140,
                    x: 1085,
                    y: 845,
                },
            },
            {
                item: 'viz_text5b',
                position: {
                    h: 30,
                    w: 90,
                    x: 1085,
                    y: 940,
                },
            },
            {
                item: 'viz_value5b',
                position: {
                    h: 80,
                    w: 140,
                    x: 1230,
                    y: 844,
                },
            },
            {
                item: 'viz_text5c',
                position: {
                    h: 30,
                    w: 90,
                    x: 1230,
                    y: 940,
                },
            },
            {
                item: 'viz_text1',
                position: {
                    h: 30,
                    w: 85,
                    x: 310,
                    y: 90,
                },
            },
            {
                item: 'viz_value1',
                position: {
                    h: 95,
                    w: 85,
                    x: 310,
                    y: 140,
                },
            },
            {
                item: 'viz_text2',
                position: {
                    h: 30,
                    w: 85,
                    x: 310,
                    y: 240,
                },
            },
            {
                item: 'viz_value2',
                position: {
                    h: 95,
                    w: 85,
                    x: 310,
                    y: 300,
                },
            },
            {
                item: 'viz_text3',
                position: {
                    h: 30,
                    w: 85,
                    x: 310,
                    y: 400,
                },
            },
            {
                item: 'viz_text4',
                position: {
                    h: 30,
                    w: 85,
                    x: 460,
                    y: 90,
                },
            },
            {
                item: 'viz_value3',
                position: {
                    h: 95,
                    w: 85,
                    x: 460,
                    y: 140,
                },
            },
            {
                item: 'viz_text5',
                position: {
                    h: 30,
                    w: 85,
                    x: 460,
                    y: 240,
                },
            },
            {
                item: 'viz_value4',
                position: {
                    h: 95,
                    w: 85,
                    x: 460,
                    y: 300,
                },
            },
            {
                item: 'viz_text6',
                position: {
                    h: 30,
                    w: 85,
                    x: 460,
                    y: 400,
                },
            },
            {
                item: 'viz_text7',
                position: {
                    h: 30,
                    w: 85,
                    x: 620,
                    y: 90,
                },
            },
            {
                item: 'viz_value5',
                position: {
                    h: 95,
                    w: 85,
                    x: 620,
                    y: 140,
                },
            },
            {
                item: 'viz_text8',
                position: {
                    h: 30,
                    w: 85,
                    x: 620,
                    y: 240,
                },
            },
            {
                item: 'viz_value6',
                position: {
                    h: 95,
                    w: 85,
                    x: 620,
                    y: 300,
                },
            },
            {
                item: 'viz_text9',
                position: {
                    h: 30,
                    w: 85,
                    x: 620,
                    y: 400,
                },
            },
            {
                item: 'viz_text7a',
                position: {
                    h: 30,
                    w: 85,
                    x: 850,
                    y: 90,
                },
            },
            {
                item: 'viz_value7',
                position: {
                    h: 95,
                    w: 85,
                    x: 780,
                    y: 140,
                },
            },
            {
                item: 'viz_text7b',
                position: {
                    h: 30,
                    w: 85,
                    x: 780,
                    y: 340,
                },
            },
            {
                item: 'viz_value8',
                position: {
                    h: 95,
                    w: 85,
                    x: 910,
                    y: 215,
                },
            },
            {
                item: 'viz_text8a',
                position: {
                    h: 30,
                    w: 115,
                    x: 900,
                    y: 410,
                },
            },
            {
                item: 'viz_text10',
                position: {
                    h: 30,
                    w: 85,
                    x: 310,
                    y: 590,
                },
            },
            {
                item: 'viz_value9',
                position: {
                    h: 95,
                    w: 85,
                    x: 310,
                    y: 640,
                },
            },
            {
                item: 'viz_text11',
                position: {
                    h: 30,
                    w: 85,
                    x: 310,
                    y: 740,
                },
            },
            {
                item: 'viz_value10',
                position: {
                    h: 95,
                    w: 85,
                    x: 310,
                    y: 800,
                },
            },
            {
                item: 'viz_text12',
                position: {
                    h: 30,
                    w: 145,
                    x: 280,
                    y: 900,
                },
            },
            {
                item: 'viz_text13',
                position: {
                    h: 30,
                    w: 125,
                    x: 445,
                    y: 590,
                },
            },
            {
                item: 'viz_value11',
                position: {
                    h: 95,
                    w: 85,
                    x: 460,
                    y: 640,
                },
            },
            {
                item: 'viz_text14',
                position: {
                    h: 30,
                    w: 85,
                    x: 460,
                    y: 740,
                },
            },
            {
                item: 'viz_value12',
                position: {
                    h: 95,
                    w: 85,
                    x: 460,
                    y: 800,
                },
            },
            {
                item: 'viz_text15',
                position: {
                    h: 30,
                    w: 85,
                    x: 460,
                    y: 900,
                },
            },
            {
                item: 'viz_text16',
                position: {
                    h: 30,
                    w: 85,
                    x: 620,
                    y: 590,
                },
            },
            {
                item: 'viz_value13',
                position: {
                    h: 95,
                    w: 85,
                    x: 620,
                    y: 640,
                },
            },
            {
                item: 'viz_text17',
                position: {
                    h: 30,
                    w: 100,
                    x: 615,
                    y: 740,
                },
            },
            {
                item: 'viz_value14',
                position: {
                    h: 95,
                    w: 85,
                    x: 620,
                    y: 800,
                },
            },
            {
                item: 'viz_text18',
                position: {
                    h: 30,
                    w: 110,
                    x: 610,
                    y: 900,
                },
            },
            {
                item: 'viz_text15a',
                position: {
                    h: 30,
                    w: 70,
                    x: 850,
                    y: 590,
                },
            },
            {
                item: 'viz_value15',
                position: {
                    h: 95,
                    w: 85,
                    x: 780,
                    y: 710,
                },
            },
            {
                item: 'viz_text15b',
                position: {
                    h: 30,
                    w: 50,
                    x: 800,
                    y: 815,
                },
            },
            {
                item: 'viz_value16',
                position: {
                    h: 95,
                    w: 85,
                    x: 925,
                    y: 795,
                },
            },
            {
                item: 'viz_text16a',
                position: {
                    h: 30,
                    w: 40,
                    x: 945,
                    y: 900,
                },
            },
        ],
        type: 'absolute',
    },
    title: 'Glass Table Financial in Absolute Layout',
    visualizations: {
        viz_image: {
            dataSources: {
                primary: 'search1',
            },
            options: {
                src: 'https://gt-wygjmgtktt.now.sh',
            },
            type: 'viz.img',
        },
        viz_sparkline1: {
            dataSources: {
                primary: 'search1_sparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                sparklineLocation: 'before',
            },
            type: 'viz.singlevalue',
        },
        viz_text1a: {
            options: {
                markdown: 'FINANCIAL\nPERFORMANCE',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_sparkline2: {
            dataSources: {
                primary: 'search1_sparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                field: 'bar',
                showTrendIndicator: false,
                sparklineLocation: 'before',
            },
            type: 'viz.singlevalue',
        },
        viz_text2a: {
            options: {
                markdown: 'OPERATIONAL\nPERFORMANCE',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_sparkline3: {
            dataSources: {
                primary: 'search1_sparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                field: 'bar',
                showTrendIndicator: false,
                sparklineLocation: 'before',
            },
            type: 'viz.singlevalue',
        },
        viz_text3aa: {
            options: {
                markdown: 'CUSTOMER\nSATISFACTION',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text3a: {
            options: {
                markdown: 'Service Center',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value3a: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
            },
            type: 'viz.singlevalue',
        },
        viz_text3b: {
            options: {
                markdown: 'FCR',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value3b: {
            dataSources: {
                primary: 'search_nosparkline1',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'hrs',
            },
            type: 'viz.singlevalue',
        },
        viz_text3c: {
            options: {
                markdown: 'Avg. Call Wait Time',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text4a: {
            options: {
                markdown: 'Shipping',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value4a: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
            },
            type: 'viz.singlevalue',
        },
        viz_text4b: {
            options: {
                markdown: 'Shipped',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value4b: {
            dataSources: {
                primary: 'search_nosparkline1',
            },
            options: {
                backgroundColor: '#77ab59',
                field: 'bar',
                showTrendIndicator: false,
                showSparkline: false,
            },
            type: 'viz.singlevalue',
        },
        viz_text4c: {
            options: {
                markdown: 'Damaged or Returned',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text5a: {
            options: {
                markdown: 'Conversion by Channel',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value5a: {
            dataSources: {
                primary: 'search2_sparkline2',
            },
            options: {
                backgroundColor: '#77ab59',
                trendDisplayMode: 'percent',
                showSparkline: false,
                underLabel: '%',
            },
            type: 'viz.singlevalue',
        },
        viz_text5b: {
            options: {
                markdown: 'Mobile App',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value5b: {
            dataSources: {
                primary: 'search2_sparkline2',
            },
            options: {
                backgroundColor: '#77ab59',
                field: 'bar',
                trendDisplayMode: 'percent',
                underLabel: '%',
                showSparkline: false,
            },
            type: 'viz.singlevalue',
        },
        viz_text5c: {
            options: {
                markdown: 'Web Store',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text1: {
            options: {
                markdown: 'Total Coast',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value1: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'USD',
            },
            type: 'viz.singlevalue',
        },
        viz_text2: {
            options: {
                markdown: 'OPEX',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value2: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'USD',
            },
            type: 'viz.singlevalue',
        },
        viz_text3: {
            options: {
                markdown: 'CAPEX',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text4: {
            options: {
                markdown: 'Services',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value3: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'USD',
            },
            type: 'viz.singlevalue',
        },
        viz_text5: {
            options: {
                markdown: 'OPEX',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value4: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'USD',
            },
            type: 'viz.singlevalue',
        },
        viz_text6: {
            options: {
                markdown: 'CAPEX',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text7: {
            options: {
                markdown: 'IT Portable',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value5: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'USD',
            },
            type: 'viz.singlevalue',
        },
        viz_text8: {
            options: {
                markdown: 'Total Spend',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value6: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'USD',
            },
            type: 'viz.singlevalue',
        },
        viz_text9: {
            options: {
                markdown: 'CAPEX',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text7a: {
            options: {
                markdown: 'Revenue',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value7: {
            dataSources: {
                primary: 'search_nosparkline2',
            },
            options: {
                backgroundColor: '#EEEE00',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'USD',
            },
            type: 'viz.singlevalue',
        },
        viz_text7b: {
            options: {
                markdown: 'Total Orders',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value8: {
            dataSources: {
                primary: 'search_nosparkline2',
            },
            options: {
                backgroundColor: '#77ab59',
                field: 'bar',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'USD',
            },
            type: 'viz.singlevalue',
        },
        viz_text8a: {
            options: {
                markdown: 'Avg. Order Value',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text10: {
            options: {
                markdown: 'Availability',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value9: {
            dataSources: {
                primary: 'search_nosparkline4',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: '%',
            },
            type: 'viz.singlevalue',
        },
        viz_text11: {
            options: {
                markdown: 'Uptime %',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value10: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'min',
            },
            type: 'viz.singlevalue',
        },
        viz_text12: {
            options: {
                markdown: 'Avg. Outage Duration',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text13: {
            options: {
                markdown: 'Services Recovery',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value11: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'min',
            },
            type: 'viz.singlevalue',
        },
        viz_text14: {
            options: {
                markdown: 'MTTR',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value12: {
            dataSources: {
                primary: 'search_nosparkline',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: 'min',
            },
            type: 'viz.singlevalue',
        },
        viz_text15: {
            options: {
                markdown: 'MTBF',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text16: {
            options: {
                markdown: 'Perf SLA',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value13: {
            dataSources: {
                primary: 'search_nosparkline4',
            },
            options: {
                backgroundColor: '#77ab59',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: '%',
            },
            type: 'viz.singlevalue',
        },
        viz_text17: {
            options: {
                markdown: 'Buttercup SLA',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value14: {
            dataSources: {
                primary: 'search_nosparkline4',
            },
            options: {
                backgroundColor: '#77ab59',
                field: 'bar',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: '%',
            },
            type: 'viz.singlevalue',
        },
        viz_text18: {
            options: {
                markdown: 'Compliance SLA',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_text15a: {
            options: {
                markdown: 'Infra SLA',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value15: {
            dataSources: {
                primary: 'search_nosparkline6',
            },
            options: {
                backgroundColor: '#D3D3D3',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: '%',
            },
            type: 'viz.singlevalue',
        },
        viz_text15b: {
            options: {
                markdown: 'Cloud',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
        viz_value16: {
            dataSources: {
                primary: 'search_nosparkline6',
            },
            options: {
                backgroundColor: '#D3D3D3',
                showTrendIndicator: false,
                showSparkline: false,
                underLabel: '%',
            },
            type: 'viz.singlevalue',
        },
        viz_text16a: {
            options: {
                markdown: 'Infra',
                backgroundColor: '#808080',
            },
            type: 'viz.markdown',
        },
    },
};
