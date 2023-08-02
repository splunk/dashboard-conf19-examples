import { createStaticURL } from '@splunk/splunk-utils/url';
import amenities from './svg/amenities.svg';
import ISS from './svg/ISS.svg';
import journey from './svg/journey.svg';
import legend from './svg/legend.svg';
import seats from './svg/seats.svg';

const background = createStaticURL('app/dashboard_framework_examples/buttercup_spaceport/background.png');

export default {
    layout: {
        type: 'absolute',
        options: {
            width: 1500,
            height: 1000,
            showTitleAndDescription: false,
            backgroundImage: {
                sizeType: 'cover',
                x: 0,
                y: 0,
                src: background,
            },
        },
        structure: [
            {
                item: 'viz_4JGK8krM',
                type: 'block',
                position: {
                    x: 490,
                    y: 720,
                    w: 560,
                    h: 270,
                },
            },
            {
                item: 'viz_HWlO6rEj',
                type: 'block',
                position: {
                    x: 20,
                    y: 240,
                    w: 1030,
                    h: 460,
                },
            },
            {
                item: 'viz_h7EV8YsE',
                type: 'block',
                position: {
                    x: 20,
                    y: 70,
                    w: 310,
                    h: 150,
                },
            },
            {
                item: 'viz_veiUlfnS',
                type: 'block',
                position: {
                    x: 360,
                    y: 70,
                    w: 320,
                    h: 150,
                },
            },
            {
                item: 'viz_GBYlCvzf',
                type: 'block',
                position: {
                    x: 700,
                    y: 70,
                    w: 350,
                    h: 150,
                },
            },
            {
                item: 'viz_2Yf4jCWU',
                type: 'block',
                position: {
                    x: 1070,
                    y: 10,
                    w: 420,
                    h: 980,
                },
            },
            {
                item: 'viz_8cnhgX5k',
                type: 'block',
                position: {
                    x: 20,
                    y: 720,
                    w: 450,
                    h: 270,
                },
            },
            {
                item: 'viz_0zJFdnhg',
                type: 'block',
                position: {
                    x: 20,
                    y: 250,
                    w: 1020,
                    h: 360,
                },
            },
            {
                item: 'viz_gnWgbAcC',
                type: 'block',
                position: {
                    x: 100,
                    y: 400,
                    w: 120,
                    h: 110,
                },
            },
            {
                item: 'viz_h4El23fw',
                type: 'block',
                position: {
                    x: 370,
                    y: 400,
                    w: 120,
                    h: 110,
                },
            },
            {
                item: 'viz_TMPNYoIa',
                type: 'block',
                position: {
                    x: 640,
                    y: 400,
                    w: 120,
                    h: 110,
                },
            },
            {
                item: 'viz_XR885SYW',
                type: 'block',
                position: {
                    x: 900,
                    y: 400,
                    w: 120,
                    h: 110,
                },
            },
            {
                item: 'viz_6DkUKcoi',
                type: 'block',
                position: {
                    x: 117,
                    y: 330,
                    w: 103,
                    h: 30,
                },
            },
            {
                item: 'viz_9N4osZtm',
                type: 'block',
                position: {
                    x: 380,
                    y: 330,
                    w: 110,
                    h: 30,
                },
            },
            {
                item: 'viz_fFd7Yc0j',
                type: 'block',
                position: {
                    x: 620,
                    y: 330,
                    w: 170,
                    h: 40,
                },
            },
            {
                item: 'viz_udJobfap',
                type: 'block',
                position: {
                    x: 880,
                    y: 330,
                    w: 180,
                    h: 40,
                },
            },
            {
                item: 'viz_FMhvvQO5',
                type: 'block',
                position: {
                    x: 490,
                    y: 720,
                    w: 550,
                    h: 270,
                },
            },
            {
                item: 'input_fq60po22',
                type: 'input',
                position: {
                    x: 770,
                    y: 220,
                    w: 334,
                    h: 84,
                },
            },
            {
                item: 'input_DiHV7iPr',
                type: 'input',
                position: {
                    x: 1200,
                    y: 90,
                    w: 198,
                    h: 82,
                },
            },
            {
                item: 'viz_RBZf1ejk',
                type: 'block',
                position: {
                    x: 20,
                    y: 70,
                    w: 300,
                    h: 140,
                },
            },
            {
                item: 'viz_haJzxBky',
                type: 'block',
                position: {
                    x: 20,
                    y: 20,
                    w: 870,
                    h: 30,
                },
            },
            {
                item: 'viz_iZplyK7I',
                type: 'block',
                position: {
                    x: 360,
                    y: 70,
                    w: 320,
                    h: 150,
                },
            },
            {
                item: 'viz_GM04mX9S',
                type: 'block',
                position: {
                    x: 700,
                    y: 70,
                    w: 340,
                    h: 150,
                },
            },
            {
                item: 'viz_aqMWRCrp',
                type: 'block',
                position: {
                    x: 1080,
                    y: 20,
                    w: 300,
                    h: 47,
                },
            },
            {
                item: 'input_K31bQUwh',
                type: 'input',
                position: {
                    x: 572,
                    y: 44,
                    w: 198,
                    h: 81,
                },
            },
            {
                item: 'input_L8vrX7E2',
                type: 'input',
                position: {
                    x: 942,
                    y: 45,
                    w: 198,
                    h: 82,
                },
            },
            {
                item: 'viz_1yeDFDd5',
                type: 'block',
                position: {
                    x: 140,
                    y: 610,
                    w: 810,
                    h: 44,
                },
            },
            {
                item: 'input_yHRUXiOH',
                type: 'input',
                position: {
                    x: 890,
                    y: 410,
                    w: 40,
                    h: 82,
                },
            },
            {
                item: 'input_NjNBsiy0',
                type: 'input',
                position: {
                    x: 90,
                    y: 410,
                    w: 40,
                    h: 82,
                },
            },
            {
                item: 'input_adMdsTHt',
                type: 'input',
                position: {
                    x: 360,
                    y: 410,
                    w: 50,
                    h: 82,
                },
            },
            {
                item: 'input_WPXhhKEU',
                type: 'input',
                position: {
                    x: 630,
                    y: 410,
                    w: 40,
                    h: 82,
                },
            },
            {
                item: 'viz_rp27pEVW',
                type: 'block',
                position: {
                    x: 1070,
                    y: 180,
                    w: 420,
                    h: 640,
                },
            },
            {
                item: 'viz_tcUA95wX',
                type: 'block',
                position: {
                    x: 1070,
                    y: 180,
                    w: 420,
                    h: 640,
                },
            },
            {
                item: 'viz_45h0V3tu',
                type: 'block',
                position: {
                    x: 1070,
                    y: 760,
                    w: 440,
                    h: 180,
                },
            },
            {
                item: 'viz_oPtPiEOb',
                type: 'block',
                position: {
                    x: 1230,
                    y: 350,
                    w: 110,
                    h: 60,
                },
            },
            {
                item: 'viz_j4RFoTUp',
                type: 'block',
                position: {
                    x: 1230,
                    y: 430,
                    w: 110,
                    h: 60,
                },
            },
            {
                item: 'viz_8R9nxvpm',
                type: 'block',
                position: {
                    x: 1230,
                    y: 510,
                    w: 110,
                    h: 60,
                },
            },
            {
                item: 'viz_UZFwAhf6',
                type: 'block',
                position: {
                    x: 1230,
                    y: 580,
                    w: 110,
                    h: 60,
                },
            },
            {
                item: 'viz_uo7z1KhJ',
                type: 'block',
                position: {
                    x: 1230,
                    y: 660,
                    w: 110,
                    h: 60,
                },
            },
            {
                item: 'viz_hOuBuplQ',
                type: 'block',
                position: {
                    x: 1240,
                    y: 890,
                    w: 90,
                    h: 30,
                },
            },
            {
                item: 'viz_Z2d2UOxo',
                type: 'block',
                position: {
                    x: 1100,
                    y: 890,
                    w: 50,
                    h: 30,
                },
            },
            {
                item: 'viz_t2KkdlsO',
                type: 'block',
                position: {
                    x: 1420,
                    y: 890,
                    w: 90,
                    h: 30,
                },
            },
            {
                item: 'viz_9JntnB5u',
                type: 'block',
                position: {
                    x: 1100,
                    y: 920,
                    w: 160,
                    h: 60,
                },
            },
            {
                item: 'viz_pw7RcwEG',
                type: 'block',
                position: {
                    x: 1240,
                    y: 920,
                    w: 90,
                    h: 80,
                },
            },
            {
                item: 'viz_nzTZpD1G',
                type: 'block',
                position: {
                    x: 1350,
                    y: 920,
                    w: 160,
                    h: 60,
                },
            },
        ],
        globalInputs: [],
    },
    defaults: {
        tokens: {
            default: {
                'Flight number': {
                    value: '˚₊·  ͟͟͞͞ ➣️',
                },
                'Flight gate': {
                    value: '21',
                },
            },
        },
    },
    title: 'Buttercup Spaceport',
    description: "You'll never find a more blessed hive of love and compassion",
    visualizations: {
        viz_8cnhgX5k: {
            type: 'viz.iframe',
            options: {
                url: 'https://www.youtube-nocookie.com/embed/R_qiFwlkVwk?controls=0&autoplay=1',
            },
            showProgressBar: false,
            showLastUpdated: false,
        },
        viz_0zJFdnhg: {
            type: 'splunk.choropleth.svg',
            options: {
                backgroundColor: 'transparent',
                svg: journey,
            },
            title: 'Passenger Satisfaction End to End Journey',
            description: 'Port: $port$',
        },
        viz_gnWgbAcC: {
            type: 'splunk.singlevalue',
            dataSources: {
                primary: 'ds_ekG4xwY0',
            },
            options: {
                trendDisplay: 'off',
                majorColor: '> majorValue | rangeValue(majorColorEditorConfig)',
                backgroundColor: 'transparent',
                sparklineStrokeColor: '#424E90',
                majorValue: '> sparklineValues | lastPoint()',
                trendValue: '> sparklineValues | delta(-2)',
                sparklineValues: "> primary | seriesByName('Pre flight score')",
            },
            context: {
                majorColorEditorConfig: [
                    {
                        value: '#D41F1F',
                        to: 1,
                    },
                    {
                        value: '#E72D2D',
                        from: 1,
                        to: 2,
                    },
                    {
                        value: '#F58B00',
                        from: 2,
                        to: 3,
                    },
                    {
                        value: '#424D8F',
                        from: 3,
                        to: 4,
                    },
                    {
                        value: '#008C80',
                        from: 4,
                        to: 5,
                    },
                    {
                        value: '#99B100',
                        from: 5,
                    },
                ],
            },
        },
        viz_h4El23fw: {
            type: 'splunk.singlevalue',
            dataSources: {
                primary: 'ds_ekG4xwY0',
            },
            options: {
                trendDisplay: 'off',
                majorColor: '> majorValue | rangeValue(majorColorEditorConfig)',
                sparklineStrokeColor: '#424E90',
                backgroundColor: 'transparent',
                majorValue: '> sparklineValues | lastPoint()',
                trendValue: '> sparklineValues | delta(-2)',
                sparklineValues: "> primary | seriesByName('Spaceport score')",
            },
            context: {
                majorColorEditorConfig: [
                    {
                        value: '#D41F1F',
                        to: 1,
                    },
                    {
                        value: '#E72D2D',
                        from: 1,
                        to: 2,
                    },
                    {
                        value: '#F58B00',
                        from: 2,
                        to: 3,
                    },
                    {
                        value: '#424D8F',
                        from: 3,
                        to: 4,
                    },
                    {
                        value: '#008C80',
                        from: 4,
                        to: 5,
                    },
                    {
                        value: '#99B100',
                        from: 5,
                    },
                ],
            },
        },
        viz_TMPNYoIa: {
            type: 'splunk.singlevalue',
            dataSources: {
                primary: 'ds_ekG4xwY0',
            },
            options: {
                trendDisplay: 'off',
                majorColor: '> majorValue | rangeValue(majorColorEditorConfig)',
                backgroundColor: 'transparent',
                sparklineStrokeColor: '#424E90',
                majorValue: '> sparklineValues | lastPoint()',
                trendValue: '> sparklineValues | delta(-2)',
                sparklineValues: "> primary | seriesByName('arrival score')",
            },
            context: {
                majorColorEditorConfig: [
                    {
                        value: '#D41F1F',
                        to: 1,
                    },
                    {
                        value: '#E72D2D',
                        from: 1,
                        to: 2,
                    },
                    {
                        value: '#F58B00',
                        from: 2,
                        to: 3,
                    },
                    {
                        value: '#424D8F',
                        from: 3,
                        to: 4,
                    },
                    {
                        value: '#008C80',
                        from: 4,
                        to: 5,
                    },
                    {
                        value: '#99B100',
                        from: 5,
                    },
                ],
            },
        },
        viz_XR885SYW: {
            type: 'splunk.singlevalue',
            dataSources: {
                primary: 'ds_ekG4xwY0',
            },
            options: {
                trendDisplay: 'off',
                majorColor: '> majorValue | rangeValue(majorColorEditorConfig)',
                backgroundColor: 'transparent',
                sparklineStrokeColor: '#424E90',
                majorValue: '> sparklineValues | lastPoint()',
                trendValue: '> sparklineValues | delta(-2)',
                sparklineValues: "> primary | seriesByName('ship score')",
            },
            context: {
                majorColorEditorConfig: [
                    {
                        value: '#D41F1F',
                        to: 1,
                    },
                    {
                        value: '#E72D2D',
                        from: 1,
                        to: 2,
                    },
                    {
                        value: '#F58B00',
                        from: 2,
                        to: 3,
                    },
                    {
                        value: '#424D8F',
                        from: 3,
                        to: 4,
                    },
                    {
                        value: '#008C80',
                        from: 4,
                        to: 5,
                    },
                    {
                        value: '#99B100',
                        from: 5,
                    },
                ],
            },
        },
        viz_6DkUKcoi: {
            type: 'splunk.markdown',
            options: {
                markdown: '### Pre flight',
                fontSize: 'large',
                fontFamily: 'Splunk Platform Mono',
            },
        },
        viz_9N4osZtm: {
            type: 'splunk.markdown',
            options: {
                markdown: '### $port$\n',
                fontSize: 'large',
                fontFamily: 'Splunk Platform Mono',
            },
        },
        viz_fFd7Yc0j: {
            type: 'splunk.markdown',
            options: {
                markdown: '### Ship Experience',
                fontSize: 'large',
                fontFamily: 'Splunk Platform Mono',
            },
        },
        viz_udJobfap: {
            type: 'splunk.markdown',
            options: {
                markdown: '### Arrival Experience',
                fontSize: 'large',
            },
        },
        viz_FMhvvQO5: {
            type: 'splunk.table',
            options: {
                backgroundColor: 'transparent',
                tableFormat: {
                    rowBackgroundColors:
                        '> table | seriesByIndex(0) | pick(tableAltRowBackgroundColorsByBackgroundColor)',
                    headerBackgroundColor:
                        '> backgroundColor | setColorChannel(tableHeaderBackgroundColorConfig)',
                    rowColors: '> rowBackgroundColors | maxContrast(tableRowColorMaxContrast)',
                    headerColor: '> headerBackgroundColor | maxContrast(tableRowColorMaxContrast)',
                },
                columnFormat: {
                    Port: {
                        width: 65,
                    },
                    'Ship flight': {
                        width: 70,
                    },
                    Gate: {
                        width: 43,
                    },
                    To: {
                        width: 44,
                    },
                    From: {
                        width: 65,
                    },
                },
            },
            dataSources: {
                primary: 'ds_kdHMLVfG',
            },
            title: 'Departures and Arrivals Status',
            eventHandlers: [
                {
                    type: 'drilldown.setToken',
                    options: {
                        tokens: [
                            {
                                token: 'Flight number',
                                key: 'row.Ship ID.value',
                            },
                            {
                                token: 'Flight gate',
                                key: 'row.Gate.value',
                            },
                        ],
                    },
                },
            ],
        },
        viz_RBZf1ejk: {
            type: 'splunk.markergauge',
            dataSources: {
                primary: 'ds_fsCj9EbD',
            },
            options: {
                orientation: 'horizontal',
                valueDisplay: 'percentage',
                gaugeRanges: [
                    {
                        from: 66,
                        value: '#99b100',
                        to: 100,
                    },
                    {
                        from: 33,
                        value: '#424d8f',
                        to: 66,
                    },
                    {
                        from: 0,
                        value: '#dc4e41',
                        to: 33,
                    },
                ],
                backgroundColor: 'transparent',
            },
            title: 'Passenger Overall Satisfaction',
            description: '',
        },
        viz_haJzxBky: {
            type: 'splunk.markdown',
            options: {
                markdown: '# Buttercup Spaceport Customer Satisfaction Review',
            },
        },
        viz_iZplyK7I: {
            type: 'splunk.pie',
            dataSources: {
                primary: 'ds_zwNhP3c1',
            },
            title: 'Passenger Travel Recurrence',
            showProgressBar: false,
            showLastUpdated: false,
            options: {
                value: '> primary | seriesByName("Value")',
                label: '> primary | seriesByName("Metric")',
                showDonutHole: true,
                backgroundColor: 'transparent',
                labelDisplay: 'valuesAndPercentage',
            },
        },
        viz_GM04mX9S: {
            type: 'splunk.pie',
            dataSources: {
                primary: 'ds_mLVJhJ8u',
            },
            title: 'Passenger Type of Travel',
            showProgressBar: false,
            showLastUpdated: false,
            options: {
                showDonutHole: true,
                backgroundColor: 'transparent',
                labelDisplay: 'valuesAndPercentage',
            },
        },
        viz_aqMWRCrp: {
            type: 'splunk.markdown',
            options: {
                markdown: '**Ship Status**\n\nShip: $Flight number$ - Gate: $Flight gate$',
            },
        },
        viz_2Yf4jCWU: {
            type: 'splunk.rectangle',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
                strokeOpacity: 0,
                fillOpacity: 0.5,
            },
        },
        viz_GBYlCvzf: {
            type: 'splunk.rectangle',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
                strokeOpacity: 0,
                fillOpacity: 0.5,
            },
        },
        viz_veiUlfnS: {
            type: 'splunk.rectangle',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
                strokeOpacity: 0,
                fillOpacity: 0.5,
            },
        },
        viz_h7EV8YsE: {
            type: 'splunk.rectangle',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
                strokeOpacity: 0,
                fillOpacity: 0.5,
            },
        },
        viz_HWlO6rEj: {
            type: 'splunk.rectangle',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
                strokeOpacity: 0,
                fillOpacity: 0.5,
            },
        },
        viz_4JGK8krM: {
            type: 'splunk.rectangle',
            options: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff',
                strokeOpacity: 0,
                fillOpacity: 0.5,
            },
        },
        viz_1yeDFDd5: {
            type: 'splunk.choropleth.svg',
            options: {
                backgroundColor: 'transparent',
                svg: legend,
            },
        },
        viz_rp27pEVW: {
            type: 'splunk.choropleth.svg',
            options: {
                svg: seats,
                backgroundColor: 'transparent',
                areaValues: "> primary | seriesByName('status')",
                areaColors: '> areaValues | matchValue(areaColorsEditorConfig)',
            },
            dataSources: {
                primary: 'ds_l2zZFIOR',
            },
            context: {
                areaColorsEditorConfig: [
                    {
                        match: 'unsold',
                        value: '#D015B2',
                    },
                    {
                        match: 'boarded',
                        value: '#008C80',
                    },
                    {
                        match: 'vacant',
                        value: '#434F92',
                    },
                ],
            },
            hideWhenNoData: true,
        },
        viz_tcUA95wX: {
            type: 'splunk.choropleth.svg',
            options: {
                svg: amenities,
                backgroundColor: 'transparent',
            },
            hideWhenNoData: true,
            dataSources: {
                primary: 'ds_tjz8120A',
            },
        },
        viz_45h0V3tu: {
            type: 'splunk.choropleth.svg',
            options: {
                backgroundColor: 'transparent',
                svg: ISS,
            },
        },
        viz_oPtPiEOb: {
            type: 'splunk.singlevalueradial',
            options: {
                trendDisplay: 'off',
                backgroundColor: 'transparent',
                majorColor: '#4D4D4D',
                radialStrokeColor: '#828FD4',
            },
            dataSources: {
                primary: 'ds_tjz8120A',
            },
            hideWhenNoData: true,
        },
        viz_j4RFoTUp: {
            type: 'splunk.singlevalueradial',
            options: {
                trendDisplay: 'off',
                backgroundColor: 'transparent',
                majorColor: '#4D4D4D',
                radialStrokeColor: '#828FD4',
                majorValue: "> primary | seriesByName('noise') | lastPoint()",
                trendValue: "> primary | seriesByName('noise') | delta(-2)",
            },
            dataSources: {
                primary: 'ds_tjz8120A',
            },
            hideWhenNoData: true,
        },
        viz_8R9nxvpm: {
            type: 'splunk.singlevalueradial',
            options: {
                trendDisplay: 'off',
                backgroundColor: 'transparent',
                majorColor: '#4D4D4D',
                radialStrokeColor: '#828FD4',
                majorValue: "> primary | seriesByName('entertainment') | lastPoint()",
                trendValue: "> primary | seriesByName('entertainment') | delta(-2)",
            },
            dataSources: {
                primary: 'ds_tjz8120A',
            },
            hideWhenNoData: true,
        },
        viz_UZFwAhf6: {
            type: 'splunk.singlevalueradial',
            options: {
                trendDisplay: 'off',
                backgroundColor: 'transparent',
                majorColor: '#4D4D4D',
                radialStrokeColor: '#828FD4',
                majorValue: "> primary | seriesByName('life') | lastPoint()",
                trendValue: "> primary | seriesByName('life') | delta(-2)",
            },
            dataSources: {
                primary: 'ds_tjz8120A',
            },
            hideWhenNoData: true,
        },
        viz_uo7z1KhJ: {
            type: 'splunk.singlevalueradial',
            options: {
                trendDisplay: 'off',
                backgroundColor: 'transparent',
                majorColor: '#4D4D4D',
                radialStrokeColor: '#828FD4',
                majorValue: "> primary | seriesByName('provisions') | lastPoint()",
                trendValue: "> primary | seriesByName('provisions') | delta(-2)",
            },
            dataSources: {
                primary: 'ds_tjz8120A',
            },
            hideWhenNoData: true,
        },
        viz_hOuBuplQ: {
            type: 'splunk.markdown',
            options: {
                markdown: 'Travel Time',
            },
        },
        viz_Z2d2UOxo: {
            type: 'splunk.markdown',
            options: {
                markdown: 'Depart',
            },
        },
        viz_t2KkdlsO: {
            type: 'splunk.markdown',
            options: {
                markdown: 'Arrival',
            },
        },
        viz_9JntnB5u: {
            type: 'splunk.markdown',
            options: {
                markdown:
                    '**$Flight Path Search:result.departure day$**\n\n**$Flight Path Search:result.departure time$**',
            },
        },
        viz_pw7RcwEG: {
            type: 'splunk.markdown',
            options: {
                markdown: '**$Flight Path Search:result.travel time$**',
            },
        },
        viz_nzTZpD1G: {
            type: 'splunk.markdown',
            options: {
                markdown:
                    '**$Flight Path Search:result.arrival day$**\n\n**$Flight Path Search:result.arrival time$**',
            },
        },
    },
    dataSources: {
        ds_game_stats: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'game_events',
                        },
                        {
                            name: 'time',
                        },
                    ],
                    columns: [
                        [
                            900, 1483, 1220, 790, 1453, 507, 863, 1132, 725, 12, 1394, 1193, 508, 1418, 334,
                            227, 1179, 673, 1009, 1194, 352, 273, 260, 191, 1271, 1255, 1030, 514, 401, 0,
                            215, 1158, 856, 569, 406, 1384, 734, 817, 1020, 47, 499, 943, 126, 1249, 334, 633,
                            1227, 853, 574, 861,
                        ],
                        [
                            1567636168, 1567639768, 1567643368, 1567646968, 1567650568, 1567654168,
                            1567657768, 1567661368, 1567664968, 1567668568, 1567672168, 1567675768,
                            1567679368, 1567682968, 1567686568, 1567690168, 1567693768, 1567697368,
                            1567700968, 1567704568, 1567708168, 1567711768, 1567715368, 1567718968,
                            1567722568, 1567726168, 1567729768, 1567733368, 1567736968, 1567740568,
                            1567744168, 1567747768, 1567751368, 1567754968, 1567758568, 1567762168,
                            1567765768, 1567769368, 1567772968, 1567776568, 1567780168, 1567783768,
                            1567787368, 1567790968, 1567794568, 1567798168, 1567801768, 1567805368,
                            1567808968, 1567812568,
                        ],
                    ],
                },
            },
        },
        ds_ratings: {
            name: 'Ratings',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'key',
                        },
                        {
                            name: 'value',
                        },
                    ],
                    columns: [
                        ['thing1', 'thing2', 'thing3', 'thing4', 'thing5'],
                        [3, 4, 5, 1, 2],
                    ],
                },
            },
        },
        ds_zwNhP3c1: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '0',
                    latest: '',
                },
                query: '| makeresults format=csv data="Age, Metric, Value\n38, Returning, 69\n38, First-time, 31\n46, Returning, 93\n46, First-time, 7\n64, Returning, 96\n64, First-time, 4"\n| search Age>=$age_demo1.min$ AND Age<=$age_demo1.max$\n| fields Metric, Value',
            },
            name: 'Passenger Recurrence',
        },
        ds_mLVJhJ8u: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '0',
                    latest: '',
                },
                query: '| makeresults format=csv data="Age, Metric, Value\n38, Personal, 32 \n38, Business, 68\n46, Personal, 23\n46, Business, 77\n64, Personal, 56\n64, Business, 44"\n| search Age>=$age_demo2.min$ AND Age<=$age_demo2.max$\n| fields Metric, Value',
            },
            name: 'Type of travel',
        },
        ds_ba0zeWoG: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="Metric, Mean, Port\nBaggage Handling, 4, Mars Port\nArrival Time Convenience, 3, Mars Port\nBaggage Handling, 5, ISS Port\nArrival Time Convenience, 5, ISS Port\nBaggage Handling, 3, Moon Port\nArrival Time Convenience, 4, Moon Port"\n| search Port=$port|s$\n| fields Metric, Mean',
            },
            name: 'Arrival Experience',
        },
        ds_l2zZFIOR: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="seat, status\nEllipse 8, "vacant"\nEllipse 9, "unsold"\nEllipse 12, "unsold"\nEllipse 13, "boarded"\nEllipse 14, "vacant"\nEllipse 15, "boarded"\nEllipse 16, "boarded"\nEllipse 17, "boarded"\nEllipse 18, "boarded"\nEllipse 19, "vacant"\nEllipse 20, "boarded"\nEllipse 21, "unsold"\nEllipse 22, "boarded"\nEllipse 23, "vacant"\nEllipse 24, "boarded"\nEllipse 25, "vacant"\nEllipse 26, "vacant"\nEllipse 28, "vacant"\nEllipse 29, "boarded""\n| fields seat status\n| head limit=5 ($filter|s$ = "Cabin")\n',
            },
            name: 'Ship Occupancy Search',
        },
        ds_kdHMLVfG: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="Ship ID, From, To, Gate, Status\n˚₊·  ͟͟͞͞ ➣️, MRS, ERTH, 21, 🟢  On time,͟\n＊☽☾, MRS, ERTH, 5, 🟡  Delayed\n༄ ‧₊˚ //, MRS, ISS, 7, 🟢  On time\n⋆.*✰༄, MRS, ERTH, 22, 🔴  Cancelled\n♡:✧, MRS, ISS, 14, 🟢  On time\n｡✧･ﾟ, MRS, ISS, 11, 🟢  On time\n𓁹𓆙, MRS, ERTH, 9, 🔴  Cancelled"\n| fields "Ship ID", From, To, Gate, Status',
            },
            name: 'Flight Status Table',
        },
        ds_k9Qmovab: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="Metric, Mean, Port\nCheck in Service, 4, Mars Port\nDeparture Time Convenience, 2, Mars Port\nOnline Boarding, 3, Mars Port\nEase of Online Booking, 3, Mars Port\nCheck in Service, 1, ISS Port\nDeparture Time Convenience, 2, ISS Port\nOnline Boarding, 2, ISS Port\nEase of Online Booking, 3, ISS Port\nCheck in Service, 2, Moon Port\nDeparture Time Convenience, 1, Moon Port\nOnline Boarding, 1, Moon Port\nEase of Online Booking, 1, Moon Port"\n| search Port=$port|s$\n| fields Metric, Mean',
            },
            name: 'Pre flight experience',
        },
        ds_ekG4xwY0: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="Pre flight score, Spaceport score, ship score, arrival score, Port\n3,2,4,5, Mars Port\n2,4,5,4, ISS Port\n1,2,4,3, Moon Port"\n| search Port=$port|s$',
            },
            name: 'Satisfaction Scores',
        },
        ds_KdfLF8l6: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="Metric, Mean, Port\nCleanliness, 1, Mars Port\nGate Location, 2, Mars Port\nAmbient Noise, 3, Mars Port\nSecurity Speed, 2, Mars Port\nCleanliness, 4, ISS Port\nGate Location, 5, ISS Port\nAmbient Noise, 4, ISS Port\nSecurity Speed, 4, ISS Port\nCleanliness, 2, Moon Port\nGate Location, 2, Moon Port\nAmbient Noise, 3, Moon Port\nSecurity Speed, 2, Moon Port"\n| search Port=$port|s$\n| fields Metric, Mean',
            },
            name: 'Spaceport Experience',
        },
        ds_E2c4XRGq: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="Metric, Mean, Port\nIn-flight Service, 5, Mars Port\nFood and Drink, 5, Mars Port\nLeg Room, 4, Mars Port\nSeat Comfort, 5, Mars Port\nIn-flight Service, 5, ISS Port\nFood and Drink, 5, ISS Port\nLeg Room, 3, ISS Port\nSeat Comfort, 4, ISS Port\nIn-flight Service, 3, Moon Port\nFood and Drink, 4, Moon Port\nLeg Room, 3, Moon Port\nSeat Comfort, 3, Moon Port"\n| search Port=$port|s$\n| fields Metric, Mean',
            },
            name: 'Ship Experience',
        },
        ds_fsCj9EbD: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '0',
                    latest: '',
                },
                query: '| makeresults format=csv data="satisfaction\n45"',
            },
            name: 'Satisfaction',
        },
        ds_tjz8120A: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="Fuel, noise, entertainment, life, provisions\n100, 72, 95, 100, 43"\n| head limit=5 ($filter|s$ = "Amenities")',
            },
            name: 'Amenities Status',
        },
        ds_J6PWaqcy: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults format=csv data="departure day, departure time, travel time, arrival day, arrival time\n14th of Blune, 24:30 Martian Standard Time, 5 months 4 days 10hrs 30min, 38th of Strummel, 1:30 Earth Standard Time"',
                enableSmartSources: true,
            },
            name: 'Flight Path Search',
        },
    },
    inputs: {
        input_fq60po22: {
            options: {
                items: [
                    {
                        label: 'Mars Port',
                        value: 'Mars Port',
                    },
                    {
                        label: 'ISS Port',
                        value: 'ISS Port',
                    },
                    {
                        label: 'Moon Port',
                        value: 'Moon Port',
                    },
                ],
                defaultValue: 'Mars Port',
                token: 'port',
            },
            title: '',
            type: 'input.radiobar',
        },
        input_DiHV7iPr: {
            options: {
                items: [
                    {
                        label: 'Cabin',
                        value: 'Cabin',
                    },
                    {
                        label: 'Amenities',
                        value: 'Amenities',
                    },
                ],
                defaultValue: 'Cabin',
                token: 'filter',
            },
            title: '',
            type: 'input.radiobar',
        },
        input_K31bQUwh: {
            options: {
                defaultValue: '0,39',
                token: 'age_demo1',
                items: [
                    {
                        label: ' Ages < 39',
                        value: '0,39',
                    },
                    {
                        label: 'Ages 40 - 59',
                        value: '40,59',
                    },
                    {
                        label: 'Ages > 60',
                        value: '60,1000',
                    },
                ],
            },
            type: 'input.demographics',
        },
        input_L8vrX7E2: {
            options: {
                defaultValue: '0,39',
                token: 'age_demo2',
                items: [
                    {
                        label: ' Ages < 39',
                        value: '0,39',
                    },
                    {
                        label: 'Ages 40 - 59',
                        value: '40,59',
                    },
                    {
                        label: 'Ages > 60',
                        value: '60,1000',
                    },
                ],
            },
            type: 'input.demographics',
        },
        input_yHRUXiOH: {
            type: 'input.rating',
            options: {
                token: 'rating_nMmUXW6e',
                tooltipTitle: 'Arrival Experience',
            },
            dataSources: {
                primary: 'ds_ba0zeWoG',
            },
        },
        input_NjNBsiy0: {
            type: 'input.rating',
            options: {
                token: 'rating_WOT9uiiw',
                tooltipTitle: 'Pre flight Experience',
            },
            dataSources: {
                primary: 'ds_k9Qmovab',
            },
        },
        input_adMdsTHt: {
            type: 'input.rating',
            options: {
                token: 'rating_c8UKgG1k',
                tooltipTitle: 'Spaceport Experience',
            },
            dataSources: {
                primary: 'ds_KdfLF8l6',
            },
        },
        input_WPXhhKEU: {
            type: 'input.rating',
            options: {
                token: 'rating_oAXruo8h',
                tooltipTitle: 'Ship Experience',
            },
            dataSources: {
                primary: 'ds_E2c4XRGq',
            },
        },
    },
};
