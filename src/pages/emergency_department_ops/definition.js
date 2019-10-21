import { createStaticURL } from '@splunk/splunk-utils/url';

const walkInVolumeIc = createStaticURL(
    'app/dashboard_conf19_examples/emergency_department_ops/WalkIn_ic.svg'
);
const waitTimeIc = createStaticURL('app/dashboard_conf19_examples/emergency_department_ops/WaitTime_ic.svg');
const triagePerHourIc = createStaticURL(
    'app/dashboard_conf19_examples/emergency_department_ops/TriagePerHour_ic.svg'
);
const patientNurseRatioIc = createStaticURL(
    'app/dashboard_conf19_examples/emergency_department_ops/PatientNurseRatio_ic.svg'
);
const ambulanceVolumeIc = createStaticURL(
    'app/dashboard_conf19_examples/emergency_department_ops/Ambulance_ic.svg'
);

export default {
    dataSources: {
        waitTime: {
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
                    columns: [['37'], ['1']],
                },
                meta: {},
            },
        },
        walkInVolume: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: '_time',
                        },
                        {
                            name: 'Number of people',
                        },
                    ],
                    columns: [
                        [
                            '2019-08-20T00:00:00.000-07:00',
                            '2019-08-20T00:30:00.000-07:00',
                            '2019-08-20T01:00:00.000-07:00',
                            '2019-08-20T01:30:00.000-07:00',
                            '2019-08-20T02:00:00.000-07:00',
                            '2019-08-20T02:30:00.000-07:00',
                            '2019-08-20T03:00:00.000-07:00',
                            '2019-08-20T03:30:00.000-07:00',
                            '2019-08-20T04:00:00.000-07:00',
                            '2019-08-20T04:30:00.000-07:00',
                        ],
                        ['0', '17', '32', '35', '18', '31', '20', '21', '24', '21'],
                    ],
                },
                meta: {},
            },
        },
        totalPatients: {
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
                    columns: [['369'], ['1']],
                },
                meta: {},
            },
        },
        triagePerHour: {
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
                    columns: [['89'], ['1']],
                },
                meta: {},
            },
        },
        availableStaff: {
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
                    columns: [['52'], ['1']],
                },
                meta: {},
            },
        },
        ambulanceVolume: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: '_time',
                        },
                        {
                            name: 'Number of people',
                        },
                    ],
                    columns: [
                        [
                            '2019-08-20T00:00:00.000-07:00',
                            '2019-08-20T00:30:00.000-07:00',
                            '2019-08-20T01:00:00.000-07:00',
                            '2019-08-20T01:30:00.000-07:00',
                            '2019-08-20T02:00:00.000-07:00',
                            '2019-08-20T02:30:00.000-07:00',
                            '2019-08-20T03:00:00.000-07:00',
                            '2019-08-20T03:30:00.000-07:00',
                            '2019-08-20T04:00:00.000-07:00',
                            '2019-08-20T04:30:00.000-07:00',
                        ],
                        ['20', '24', '22', '19', '5', '12', '18', '11', '8', '4'],
                    ],
                },
                meta: {},
            },
        },
        patientByDivision: {
            name: 'search8',
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'Division',
                        },
                        {
                            name: 'In-Patient',
                        },
                        {
                            name: 'Out-Patient',
                        },
                    ],
                    columns: [
                        ['Surgery', 'Gynaecology', 'Nuerology', 'Oncology', 'Cardiology', 'Orthopedics'],
                        ['20', '12', '25', '5', '14', '6'],
                        ['5', '2', '10', '1', '8', '0'],
                    ],
                },
                meta: {},
            },
        },
        percentageResolved: {
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
                    columns: [['37', '42'], ['1', '2']],
                },
                meta: {},
            },
        },
        patientToNurseRatio: {
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
                    columns: [['8'], ['1']],
                },
                meta: {},
            },
        },
        urgentCarePercentage: {
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
                    columns: [['30'], ['1']],
                },
                meta: {},
            },
        },
        emergentCarePercentage: {
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
                    columns: [['32'], ['1']],
                },
                meta: {},
            },
        },
        nonUrgentCarePercentage: {
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
                    columns: [['88'], ['1']],
                },
                meta: {},
            },
        },
    },
    inputs: {},
    layout: {
        type: 'absolute',
        options: {
            width: 1920,
            height: 1080,
            backgroundColor: '#15161b',
        },
        structure: [
            {
                item: 'viz_tXpmUeLg',
                type: 'block',
                position: {
                    h: 1080,
                    w: 410,
                    x: 0,
                    y: 0,
                },
            },
            {
                item: 'viz_PNGteEXK',
                type: 'block',
                position: {
                    h: 50,
                    w: 310,
                    x: 20,
                    y: 10,
                },
            },
            {
                item: 'viz_xQu2AfOC',
                type: 'block',
                position: {
                    h: 90,
                    w: 300,
                    x: 20,
                    y: 110,
                },
            },
            {
                item: 'viz_t3x6rnjb',
                type: 'block',
                position: {
                    h: 310,
                    w: 390,
                    x: 10,
                    y: 660,
                },
            },
            {
                item: 'viz_hlXMNGW1',
                type: 'block',
                position: {
                    h: 260,
                    w: 340,
                    x: 450,
                    y: 130,
                },
            },
            {
                item: 'viz_neCu6HIT',
                type: 'block',
                position: {
                    h: 280,
                    w: 340,
                    x: 450,
                    y: 770,
                },
            },
            {
                item: 'viz_XvLaPQIJ',
                type: 'block',
                position: {
                    h: 210,
                    w: 290,
                    x: 1350,
                    y: 180,
                },
            },
            {
                item: 'viz_eVBpNW3g',
                type: 'block',
                position: {
                    h: 210,
                    w: 300,
                    x: 1350,
                    y: 670,
                },
            },
            {
                item: 'viz_dKkuWxFS',
                type: 'block',
                position: {
                    h: 210,
                    w: 300,
                    x: 1350,
                    y: 420,
                },
            },
            {
                item: 'viz_AGEjwSMk',
                type: 'block',
                position: {
                    h: 100,
                    w: 370,
                    x: 20,
                    y: 260,
                },
            },
            {
                item: 'viz_cZPZPOHO',
                type: 'block',
                position: {
                    h: 100,
                    w: 370,
                    x: 20,
                    y: 400,
                },
            },
            {
                item: 'viz_2E5FHwXJ',
                type: 'block',
                position: {
                    h: 80,
                    w: 300,
                    x: 50,
                    y: 270,
                },
            },
            {
                item: 'viz_cugXUq6D',
                type: 'block',
                position: {
                    h: 80,
                    w: 290,
                    x: 50,
                    y: 410,
                },
            },
            {
                item: 'viz_Id60YtOe',
                type: 'block',
                position: {
                    h: 50,
                    w: 300,
                    x: 20,
                    y: 220,
                },
            },
            {
                item: 'viz_e7SQu5tY',
                type: 'block',
                position: {
                    h: 50,
                    w: 300,
                    x: 20,
                    y: 360,
                },
            },
            {
                item: 'viz_i6u0LGBu',
                type: 'block',
                position: {
                    h: 50,
                    w: 110,
                    x: 880,
                    y: 300,
                },
            },
            {
                item: 'viz_w3Y5IXFo',
                type: 'block',
                position: {
                    h: 120,
                    w: 150,
                    x: 880,
                    y: 340,
                },
            },
            {
                item: 'viz_Ts050L2f',
                type: 'block',
                position: {
                    h: 60,
                    w: 150,
                    x: 880,
                    y: 370,
                },
            },
            {
                item: 'viz_MdZlPMOt',
                type: 'block',
                position: {
                    h: 50,
                    w: 120,
                    x: 880,
                    y: 580,
                },
            },
            {
                item: 'viz_g6q2Xcnl',
                type: 'block',
                position: {
                    h: 50,
                    w: 120,
                    x: 1110,
                    y: 440,
                },
            },
            {
                item: 'viz_CVCqOXAg',
                type: 'block',
                position: {
                    h: 100,
                    w: 150,
                    x: 880,
                    y: 650,
                },
            },
            {
                item: 'viz_Tn0GsIwP',
                type: 'block',
                position: {
                    h: 90,
                    w: 90,
                    x: 910,
                    y: 650,
                },
            },
            {
                item: 'viz_mPNnUqx1',
                type: 'block',
                position: {
                    h: 100,
                    w: 150,
                    x: 1110,
                    y: 500,
                },
            },
            {
                item: 'viz_xM0XG7aV',
                type: 'block',
                position: {
                    h: 90,
                    w: 90,
                    x: 1140,
                    y: 500,
                },
            },
            {
                item: 'viz_bZm05qzz',
                type: 'line',
                position: {
                    to: {
                        item: 'viz_7y3wo1hH',
                        port: 's',
                    },
                    from: {
                        item: 'viz_NCBgQQ4t',
                        port: 'n',
                    },
                },
            },
            {
                item: 'viz_Eqr444yl',
                type: 'line',
                position: {
                    to: {
                        x: 619,
                        y: 551,
                    },
                    from: {
                        x: 839,
                        y: 551,
                    },
                },
            },
            {
                item: 'viz_lmqaNo08',
                type: 'line',
                position: {
                    to: {
                        x: 839,
                        y: 701,
                    },
                    from: {
                        x: 839,
                        y: 400,
                    },
                },
            },
            {
                item: 'viz_2Ha0QROe',
                type: 'line',
                position: {
                    to: {
                        x: 880,
                        y: 700,
                    },
                    from: {
                        x: 839,
                        y: 700,
                    },
                },
            },
            {
                item: 'viz_IM0MIt1T',
                type: 'line',
                position: {
                    to: {
                        x: 880,
                        y: 400,
                    },
                    from: {
                        x: 839,
                        y: 400,
                    },
                },
            },
            {
                item: 'viz_SNJXne0D',
                type: 'line',
                position: {
                    to: {
                        x: 1062,
                        y: 700,
                    },
                    from: {
                        x: 1062,
                        y: 400,
                    },
                },
            },

            {
                item: 'viz_YyclZnbh',
                type: 'line',
                position: {
                    to: {
                        item: 'viz_mPNnUqx1',
                        port: 'w',
                    },
                    from: {
                        x: 1062,
                        y: 550,
                    },
                },
            },
            {
                item: 'viz_4iM3nmR4',
                type: 'line',
                position: {
                    to: {
                        x: 1061,
                        y: 400,
                    },
                    from: {
                        x: 1030,
                        y: 400,
                    },
                },
            },

            {
                item: 'viz_4Mhfwb7W',
                type: 'line',
                position: {
                    to: {
                        x: 1061,
                        y: 700,
                    },
                    from: {
                        item: 'viz_CVCqOXAg',
                        port: 'e',
                    },
                },
            },
            {
                item: 'viz_fNG3Y55l',
                type: 'line',
                position: {
                    to: {
                        x: 1331,
                        y: 550,
                    },
                    from: {
                        item: 'viz_mPNnUqx1',
                        port: 'e',
                    },
                },
            },
            {
                item: 'viz_l6cmavDS',
                type: 'line',
                position: {
                    to: {
                        x: 1302,
                        y: 811,
                    },
                    from: {
                        x: 1301,
                        y: 315,
                    },
                },
            },
            {
                item: 'viz_7Zy1s6aq',
                type: 'line',
                position: {
                    to: {
                        x: 1348,
                        y: 316,
                    },
                    from: {
                        x: 1300,
                        y: 316,
                    },
                },
            },
            {
                item: 'viz_viGTHvao',
                type: 'line',
                position: {
                    to: {
                        x: 1350,
                        y: 810,
                    },
                    from: {
                        x: 1302,
                        y: 810,
                    },
                },
            },
            {
                item: 'viz_E9LQo1Fm',
                type: 'block',
                position: {
                    h: 70,
                    w: 60,
                    x: 590,
                    y: 40,
                },
            },
            {
                item: 'viz_GfwIBqvv',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 590,
                    y: 680,
                },
            },
            {
                item: 'viz_OTKLC0Mm',
                type: 'block',
                position: {
                    h: 70,
                    w: 60,
                    x: 920,
                    y: 220,
                },
            },
            {
                item: 'viz_6G5z1kKG',
                type: 'block',
                position: {
                    h: 60,
                    w: 70,
                    x: 920,
                    y: 520,
                },
            },
            {
                item: 'viz_sWryRX8P',
                type: 'block',
                position: {
                    h: 60,
                    w: 60,
                    x: 1150,
                    y: 360,
                },
            },
            {
                item: 'viz_NCBgQQ4t',
                type: 'block',
                position: {
                    h: 20,
                    w: 20,
                    x: 610,
                    y: 630,
                },
            },
            {
                item: 'viz_7y3wo1hH',
                type: 'block',
                position: {
                    h: 20,
                    w: 20,
                    x: 610,
                    y: 410,
                },
            },
            {
                item: 'viz_MrN7Cmt1',
                type: 'line',
                position: {
                    to: {
                        x: 1684,
                        y: 317,
                    },
                    from: {
                        x: 1636,
                        y: 317,
                    },
                },
            },
            {
                item: 'viz_dqpFm0cQ',
                type: 'line',
                position: {
                    to: {
                        x: 1695,
                        y: 548,
                    },
                    from: {
                        x: 1647,
                        y: 548,
                    },
                },
            },
            {
                item: 'viz_5CvJBZxq',
                type: 'line',
                position: {
                    to: {
                        x: 1697,
                        y: 810,
                    },
                    from: {
                        x: 1649,
                        y: 810,
                    },
                },
            },
            {
                item: 'viz_o4uFd0v9',
                type: 'block',
                position: {
                    h: 160,
                    w: 190,
                    x: 1710,
                    y: 460,
                },
            },
            {
                item: 'viz_TG7gLEtB',
                type: 'block',
                position: {
                    h: 50,
                    w: 110,
                    x: 1750,
                    y: 430,
                },
            },
        ],
    },
    title: 'Emergency Department Care',
    description: '',
    visualizations: {
        viz_2E5FHwXJ: {
            type: 'viz.singlevalue',
            options: {
                showSparkline: false,
            },
            encoding: {},
            dataSources: {
                primary: 'totalPatients',
            },
        },
        viz_2Ha0QROe: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_4Mhfwb7W: {
            type: 'abslayout.line',
            options: {
                toArrow: false,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_4iM3nmR4: {
            type: 'abslayout.line',
            options: {
                toArrow: false,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_5CvJBZxq: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_6G5z1kKG: {
            type: 'viz.img',
            options: {
                src: patientNurseRatioIc,
            },
        },
        viz_7Zy1s6aq: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_7y3wo1hH: {
            type: 'viz.ellipse',
            options: {
                fill: '#818285',
                stroke: '#818285',
            },
        },
        viz_AGEjwSMk: {
            type: 'viz.rectangle',
            options: {
                rx: 4,
                ry: 4,
                fill: '#32373B',
                stroke: '#32373B',
            },
        },
        viz_CVCqOXAg: {
            type: 'viz.rectangle',
            options: {
                stroke: '#31373e',
            },
        },
        viz_E9LQo1Fm: {
            type: 'viz.img',
            options: {
                src: walkInVolumeIc,
            },
        },
        viz_Eqr444yl: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_GfwIBqvv: {
            type: 'viz.img',
            options: {
                src: ambulanceVolumeIc,
            },
        },

        viz_IM0MIt1T: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_Id60YtOe: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: 'Total Patients',
                fontSize: 16,
            },
        },
        viz_MdZlPMOt: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: 'Patient - Nurse Ratio',
                fontSize: 16,
            },
        },
        viz_MrN7Cmt1: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_NCBgQQ4t: {
            type: 'viz.ellipse',
            options: {
                fill: '#818285',
                stroke: '#818285',
            },
        },
        viz_OTKLC0Mm: {
            type: 'viz.img',
            options: {
                src: waitTimeIc,
            },
        },

        viz_PNGteEXK: {
            type: 'viz.text',
            options: {
                content: 'Emergency Department Care',
                fontSize: 32,
            },
        },
        viz_SNJXne0D: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_TG7gLEtB: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: '% Resolved',
                fontSize: 16,
            },
        },
        viz_Tn0GsIwP: {
            type: 'viz.singlevalue',
            dataSources: {
                primary: 'patientToNurseRatio',
            },
        },
        viz_Ts050L2f: {
            type: 'viz.singlevalue',
            options: {
                unit: 'Min',
            },
            dataSources: {
                primary: 'waitTime',
            },
        },
        viz_XvLaPQIJ: {
            type: 'viz.fillergauge',
            title: 'Urgent Care Availability',
            options: {
                gaugeColor: '#FCB4B0',
                usePercentageRange: true,
            },
            dataSources: {
                primary: 'urgentCarePercentage',
            },
        },
        viz_YyclZnbh: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_bZm05qzz: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_cZPZPOHO: {
            type: 'viz.rectangle',
            options: {
                rx: 4,
                ry: 4,
                fill: '#32373B',
                stroke: '#32373B',
            },
        },
        viz_cugXUq6D: {
            type: 'viz.singlevalue',
            dataSources: {
                primary: 'availableStaff',
            },
        },
        viz_dKkuWxFS: {
            type: 'viz.fillergauge',
            title: 'Emergent Availability',
            options: {
                gaugeColor: '#E0F898',
                usePercentageRange: true,
            },
            dataSources: {
                primary: 'emergentCarePercentage',
            },
        },
        viz_dqpFm0cQ: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_e7SQu5tY: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: 'Available Staff',
                fontSize: 16,
            },
        },
        viz_eVBpNW3g: {
            type: 'viz.fillergauge',
            title: 'Non-urgent Availability',
            options: {
                gaugeColor: '#A4F5A1',
                usePercentageRange: true,
            },
            dataSources: {
                primary: 'nonUrgentCarePercentage',
            },
        },
        viz_fNG3Y55l: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_g6q2Xcnl: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: '# of Triage per Hour',
                fontSize: 16,
            },
        },
        viz_hlXMNGW1: {
            type: 'viz.line',
            title: 'Walk In Volume',
            options: {
                seriesColors: '[#F6847C]',
                'axisTitleX.text': 'Time',
                'axisTitleY.text': 'Number of people',
                backgroundColor: '#15161b',
                'legend.placement': 'none',
            },
            dataSources: {
                primary: 'walkInVolume',
            },
        },
        viz_i6u0LGBu: {
            type: 'viz.text',
            options: {
                color: '#F5F5F5',
                content: 'Wait Time',
                fontSize: 16,
            },
        },
        viz_l6cmavDS: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_lmqaNo08: {
            type: 'abslayout.line',
            options: {
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_mPNnUqx1: {
            type: 'viz.rectangle',
            options: {
                stroke: '#31373e',
            },
        },
        viz_neCu6HIT: {
            type: 'viz.line',
            title: 'Ambulance Volume',
            options: {
                seriesColors: '[#5FBCFF]',
                'axisTitleX.text': 'Time',
                'axisTitleY.text': 'Number of people',
                backgroundColor: '#15161b',
                'Number of people': '5FBCFF',
                'legend.placement': 'none',
            },
            dataSources: {
                primary: 'ambulanceVolume',
            },
        },
        viz_o4uFd0v9: {
            type: 'viz.singlevalueradial',
            options: {
                trendDisplayMode: 'absolute',
                radialStrokeColor: '#4EB2D2',
                radialBackgroundColor: '#2B2C33',
            },
            dataSources: {
                primary: 'percentageResolved',
            },
        },
        viz_sWryRX8P: {
            type: 'viz.img',
            options: {
                src: triagePerHourIc,
            },
        },
        viz_t3x6rnjb: {
            type: 'viz.table',
            title: 'Patient by Division',
            options: {
                headerTextColor: '#F5F5F5',
                rowTextColorOdd: '#ACACAD',
                rowTextColorEven: '#ACACAD',
                headerBackgroundColor: '#15161b',
                rowBackgroundColorOdd: '#23242B',
                rowBackgroundColorEven: '#23242B',
            },
            dataSources: {
                primary: 'patientByDivision',
            },
        },
        viz_tXpmUeLg: {
            type: 'viz.rectangle',
            options: {
                fill: '#23242B',
                stroke: '#23242B',
            },
        },
        viz_viGTHvao: {
            type: 'abslayout.line',
            options: {
                toArrow: true,
                strokeColor: '#818285',
                strokeWidth: 2,
            },
        },
        viz_w3Y5IXFo: {
            type: 'viz.rectangle',
            options: {
                stroke: '#31373e',
            },
        },
        viz_xM0XG7aV: {
            type: 'viz.singlevalue',
            dataSources: {
                primary: 'triagePerHour',
            },
        },
        viz_xQu2AfOC: {
            type: 'viz.text',
            options: {
                color: '#A8ACB1',
                content:
                    'Emergency Departments are under increasing pressure due to the high demand for access to Emergency Services. Emergency Departments are often the first contact many patients and their relatives or care givers have with a hospital.\n',
                fontSize: 12,
            },
        },
    },
};
