import { createStaticURL } from '@splunk/splunk-utils/url';

const db_size = { x: 1600, y: 800 }; // pos 0 x 0
const db_unit = 100;
const db_x_blk = db_size.x / db_unit / 4; // 4
const db_y_blk = db_size.y / db_unit; // 8

const bg_pos = { x: db_size.x / db_x_blk, y: db_size.y / db_y_blk }; // 400 x 100
const bgUrl = createStaticURL('app/dashboard_conf19_examples/sfo_airport/sfo_airport_background.svg');

const gate_box_size = { x: db_unit * 2, y: db_unit }; // 200 x 100
const gate_box_pos = { x: db_unit, y: db_unit }; // 100 x 100

const gate_g_box_pos = { x: gate_box_pos.x, y: gate_box_pos.y }; // 100 x 100
const gate_g_point = { x: 560, y: 470 };
const gate_g_color = '#d8b068';

const gate_f_box_pos = { x: gate_box_pos.x, y: gate_box_pos.y * 2 + 1*2 }; // 100 x 100 ?
const gate_f_point = { x: 645, y: 400 };
const gate_f_color = '#dab068';

const gate_e_box_pos = { x: gate_box_pos.x, y: gate_box_pos.y * 3 + 2*2 }; // 100 x 100 ?
const gate_e_point = { x: 805, y: 460 };
const gate_e_color = '#fcd9a3';

const gate_d_box_pos = { x: gate_box_pos.x, y: gate_box_pos.y * 4 + 3*2 }; // 100 x 100 ?
const gate_d_point = { x: 900, y: 500 };
const gate_d_color = '#f9b090';

const gate_c_box_pos = { x: gate_box_pos.x, y: gate_box_pos.y * 5 + 4*2 }; // 100 x 100 ?
const gate_c_point = { x: 860, y: 600 };
const gate_c_color = '#f8837b';

const gate_b_box_pos = { x: gate_box_pos.x, y: gate_box_pos.y * 6 + 5*2 }; // 100 x 100 ?
const gate_b_point = { x: 780, y: 680 };
const gate_b_color = '#c8325f';

const gate_a_box_pos = { x: gate_box_pos.x, y: gate_box_pos.y * 7 + 6*2 }; // 100 x 100 ?
const gate_a_point = { x: 645, y: 720 };
const gate_a_color = '#7d2688';

const runway_box_pos = {x: db_unit*8, y: db_unit*7.5}; // ?
const runway_box_size = {x: db_unit*2, y: db_unit/2};
const runway_19_color = '#fe7153';
const runway_10_color = '#fd9850';

const right_box_pos = { x: (db_size.x / db_x_blk) * (db_x_blk - 1), y: 0 }; // 1200 x 0
const right_box_size = { x: db_size.x / db_x_blk, y: db_size.y }; // 400 x 800

export default {
    dataSources: {
        on_time_perf_summary: {
            type: 'ds.test',
            options: {
                requestParams: { offset: 0, count: 20 },
                data: {
                    fields: [{ name: 'component' }, { name: 'count' }],
                    columns: [
                        ['Cancelled', 'Early', 'On Time', 'Delayed', 'Significantly Delayed'],
                        ['25', '12.5', '12.5', '25', '25'],
                    ],
                },
                meta: { totalCount: 20 },
            },
        },
        security_waiting_gate: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'hardcoded_data',
                        },
                    ],
                    columns: [['30']],
                },
            },
        },
        runway_queue_time: {
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
            width: db_size.x,
            height: db_size.y,
            display: 'auto-scale',
            backgroundImage: {
                x: bg_pos.x,
                y: bg_pos.y,
                src: bgUrl,
                sizeType: 'contain',
            },
            canvasBackgroundColor: 'transparent',
            layoutItemBackgroundColor: 'transparent',
        },
        structure: [
            // Gate G
            {
                item: 'gate_g_box',
                type: 'block',
                position: {
                    h: gate_box_size.y,
                    w: gate_box_size.x,
                    x: gate_g_box_pos.x,
                    y: gate_g_box_pos.y,
                },
            },
            {
                item: 'gate_g_sing_val',
                position: {
                    h: gate_box_size.y - 5,
                    w: gate_box_size.x - 5,
                    x: gate_g_box_pos.x + 5,
                    y: gate_g_box_pos.y + 5,
                },
            },
            {
                item: 'gate_g_line_x',
                type: 'line',
                position: {
                    from: {
                        x: gate_g_box_pos.x + gate_box_size.x,
                        y: gate_g_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_g_point.x,
                        y: gate_g_box_pos.y + gate_box_size.y / 2,
                    },
                },
            },
            {
                item: 'gate_g_line_y',
                type: 'line',
                position: {
                    from: {
                        x: gate_g_point.x,
                        y: gate_g_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_g_point.x,
                        y: gate_g_point.y,
                    },
                },
            },

            // Gate F
            {
                item: 'gate_f_box',
                type: 'block',
                position: {
                    h: gate_box_size.y,
                    w: gate_box_size.x,
                    x: gate_f_box_pos.x,
                    y: gate_f_box_pos.y,
                },
            },
            {
                item: 'gate_f_sing_val',
                position: {
                    h: gate_box_size.y - 5,
                    w: gate_box_size.x - 5,
                    x: gate_f_box_pos.x + 5,
                    y: gate_f_box_pos.y + 5,
                },
            },
            {
                item: 'gate_f_line_x',
                type: 'line',
                position: {
                    from: {
                        x: gate_f_box_pos.x + gate_box_size.x,
                        y: gate_f_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_f_point.x,
                        y: gate_f_box_pos.y + gate_box_size.y / 2,
                    },
                },
            },
            {
                item: 'gate_f_line_y',
                type: 'line',
                position: {
                    from: {
                        x: gate_f_point.x,
                        y: gate_f_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_f_point.x,
                        y: gate_f_point.y,
                    },
                },
            },

            // Gate E
            {
                item: 'gate_e_box',
                type: 'block',
                position: {
                    h: gate_box_size.y,
                    w: gate_box_size.x,
                    x: gate_e_box_pos.x,
                    y: gate_e_box_pos.y,
                },
            },
            {
                item: 'gate_e_sing_val',
                position: {
                    h: gate_box_size.y - 5,
                    w: gate_box_size.x - 5,
                    x: gate_e_box_pos.x + 5,
                    y: gate_e_box_pos.y + 5,
                },
            },
            {
                item: 'gate_e_line_x',
                type: 'line',
                position: {
                    from: {
                        x: gate_e_box_pos.x + gate_box_size.x,
                        y: gate_e_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_e_point.x,
                        y: gate_e_box_pos.y + gate_box_size.y / 2,
                    },
                },
            },
            {
                item: 'gate_e_line_y',
                type: 'line',
                position: {
                    from: {
                        x: gate_e_point.x,
                        y: gate_e_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_e_point.x,
                        y: gate_e_point.y,
                    },
                },
            },

            // Gate D
            {
                item: 'gate_d_box',
                type: 'block',
                position: {
                    h: gate_box_size.y,
                    w: gate_box_size.x,
                    x: gate_d_box_pos.x,
                    y: gate_d_box_pos.y,
                },
            },
            {
                item: 'gate_d_sing_val',
                position: {
                    h: gate_box_size.y - 5,
                    w: gate_box_size.x - 5,
                    x: gate_d_box_pos.x + 5,
                    y: gate_d_box_pos.y + 5,
                },
            },
            {
                item: 'gate_d_line_x',
                type: 'line',
                position: {
                    from: {
                        x: gate_d_box_pos.x + gate_box_size.x,
                        y: gate_d_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_d_point.x,
                        y: gate_d_box_pos.y + gate_box_size.y / 2,
                    },
                },
            },
            {
                item: 'gate_d_line_y',
                type: 'line',
                position: {
                    from: {
                        x: gate_d_point.x,
                        y: gate_d_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_d_point.x,
                        y: gate_d_point.y,
                    },
                },
            },

            // Gate C
            {
                item: 'gate_c_box',
                type: 'block',
                position: {
                    h: gate_box_size.y,
                    w: gate_box_size.x,
                    x: gate_c_box_pos.x,
                    y: gate_c_box_pos.y,
                },
            },
            {
                item: 'gate_c_sing_val',
                position: {
                    h: gate_box_size.y - 5,
                    w: gate_box_size.x - 5,
                    x: gate_c_box_pos.x + 5,
                    y: gate_c_box_pos.y + 5,
                },
            },
            {
                item: 'gate_c_line_x',
                type: 'line',
                position: {
                    from: {
                        x: gate_c_box_pos.x + gate_box_size.x,
                        y: gate_c_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_c_point.x,
                        y: gate_c_box_pos.y + gate_box_size.y / 2,
                    },
                },
            },
            {
                item: 'gate_c_line_y',
                type: 'line',
                position: {
                    from: {
                        x: gate_c_point.x,
                        y: gate_c_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_c_point.x,
                        y: gate_c_point.y,
                    },
                },
            },

            // Gate B
            {
                item: 'gate_b_box',
                type: 'block',
                position: {
                    h: gate_box_size.y,
                    w: gate_box_size.x,
                    x: gate_b_box_pos.x,
                    y: gate_b_box_pos.y,
                },
            },
            {
                item: 'gate_b_sing_val',
                position: {
                    h: gate_box_size.y - 5,
                    w: gate_box_size.x - 5,
                    x: gate_b_box_pos.x + 5,
                    y: gate_b_box_pos.y + 5,
                },
            },
            {
                item: 'gate_b_line_x',
                type: 'line',
                position: {
                    from: {
                        x: gate_b_box_pos.x + gate_box_size.x,
                        y: gate_b_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_b_point.x,
                        y: gate_b_box_pos.y + gate_box_size.y / 2,
                    },
                },
            },
            {
                item: 'gate_b_line_y',
                type: 'line',
                position: {
                    from: {
                        x: gate_b_point.x,
                        y: gate_b_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_b_point.x,
                        y: gate_b_point.y,
                    },
                },
            },

            // Gate A
            {
                item: 'gate_a_box',
                type: 'block',
                position: {
                    h: gate_box_size.y,
                    w: gate_box_size.x,
                    x: gate_a_box_pos.x,
                    y: gate_a_box_pos.y,
                },
            },
            {
                item: 'gate_a_sing_val',
                position: {
                    h: gate_box_size.y - 5,
                    w: gate_box_size.x - 5,
                    x: gate_a_box_pos.x + 5,
                    y: gate_a_box_pos.y + 5,
                },
            },
            {
                item: 'gate_a_line_x',
                type: 'line',
                position: {
                    from: {
                        x: gate_a_box_pos.x + gate_box_size.x,
                        y: gate_a_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_a_point.x,
                        y: gate_a_box_pos.y + gate_box_size.y / 2,
                    },
                },
            },
            {
                item: 'gate_a_line_y',
                type: 'line',
                position: {
                    from: {
                        x: gate_a_point.x,
                        y: gate_a_box_pos.y + gate_box_size.y / 2,
                    },
                    to: {
                        x: gate_a_point.x,
                        y: gate_a_point.y,
                    },
                },
            },

            // Runway Queue Time
            {
                item: 'runway_19_queue_time',
                type: 'block',
                position: {
                    x: runway_box_pos.x,
                    y: runway_box_pos.y,
                    w: runway_box_size.x,
                    h: runway_box_size.y,
                },
            },
            {
                item: 'runway_10_queue_time',
                type: 'block',
                position: {
                    x: runway_box_pos.x + runway_box_size.x + 2,
                    y: runway_box_pos.y,
                    w: runway_box_size.x,
                    h: runway_box_size.y,
                },
            },
            {
                item: 'right_box',
                type: 'block',
                position: {
                    h: right_box_size.y,
                    w: right_box_size.x,
                    x: right_box_pos.x,
                    y: right_box_pos.y,
                },
            },
            {
                item: 'on_time_perf_summary',
                position: {
                    h: (right_box_size.y / db_y_blk) * 2,
                    w: right_box_size.x,
                    x: right_box_pos.x,
                    y: right_box_pos.y + right_box_size.y / db_y_blk,
                },
            },
        ],
    },
    title: 'San Francisco Airport',
    description: '',
    visualizations: {
        // Gate G
        gate_g_box: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                strokeWidth: 1,
                stroke: gate_g_color, 
            },
        },
        gate_g_sing_val: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
                underLabel: 'Gate G',
                unit: 'm',
            },
            dataSources: {
                primary: 'security_waiting_gate',
            },
        },
        gate_g_line_x: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_g_color,
                strokeWidth: 2,
            },
        },
        gate_g_line_y: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_g_color,
                strokeWidth: 2,
            },
        },

        // Gate F
        gate_f_box: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                strokeColor: gate_f_color,
                strokeWidth: 1,
                stroke: gate_f_color, 
            },
        },
        gate_f_sing_val: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
                underLabel: 'Gate F',
                unit: 'm',
            },
            dataSources: {
                primary: 'security_waiting_gate',
            },
        },
        gate_f_line_x: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_f_color,
                strokeWidth: 2,
            },
        },
        gate_f_line_y: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_f_color,
                strokeWidth: 2,
            },
        },

        // Gate E
        gate_e_box: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                strokeColor: gate_e_color,
                strokeWidth: 1,
                stroke: gate_e_color, 
            },
        },
        gate_e_sing_val: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
                underLabel: 'Gate E',
                unit: 'm',
            },
            dataSources: {
                primary: 'security_waiting_gate',
            },
        },
        gate_e_line_x: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_e_color,
                strokeWidth: 2,
            },
        },
        gate_e_line_y: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_e_color,
                strokeWidth: 2,
            },
        },

        // Gate D
        gate_d_box: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                strokeColor: gate_d_color,
                strokeWidth: 1,
                stroke: gate_d_color, 
            },
        },
        gate_d_sing_val: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
                underLabel: 'Gate D',
                unit: 'm',
            },
            dataSources: {
                primary: 'security_waiting_gate',
            },
        },
        gate_d_line_x: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_d_color,
                strokeWidth: 2,
            },
        },
        gate_d_line_y: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_d_color,
                strokeWidth: 2,
            },
        },

        // Gate C
        gate_c_box: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                strokeColor: gate_c_color,
                strokeWidth: 1,
                stroke: gate_c_color, 
            },
        },
        gate_c_sing_val: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
                underLabel: 'Gate C',
                unit: 'm',
            },
            dataSources: {
                primary: 'security_waiting_gate',
            },
        },
        gate_c_line_x: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_c_color,
                strokeWidth: 2,
            },
        },
        gate_c_line_y: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_c_color,
                strokeWidth: 2,
            },
        },

        // Gate B
        gate_b_box: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                strokeColor: gate_b_color,
                strokeWidth: 1,
                stroke: gate_b_color, 
            },
        },
        gate_b_sing_val: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
                underLabel: 'Gate B',
                unit: 'm',
            },
            dataSources: {
                primary: 'security_waiting_gate',
            },
        },
        gate_b_line_x: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_b_color,
                strokeWidth: 2,
            },
        },
        gate_b_line_y: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_b_color,
                strokeWidth: 2,
            },
        },

        // Gate A
        gate_a_box: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                strokeColor: gate_a_color,
                strokeWidth: 1,
                stroke: gate_a_color, 
            },
        },
        gate_a_sing_val: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
                underLabel: 'Gate A',
                unit: 'm',
            },
            dataSources: {
                primary: 'security_waiting_gate',
            },
        },
        gate_a_line_x: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_a_color,
                strokeWidth: 2,
            },
        },
        gate_a_line_y: {
            type: 'abslayout.line',
            options: {
                strokeColor: gate_a_color,
                strokeWidth: 2,
            },
        },

        // Runway Queue Time
        runway_19_queue_time: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: true,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: runway_19_color,
            },
            dataSources: {
                primary: 'runway_queue_time',
            },
        },

        runway_10_queue_time: {
            type: 'viz.singlevalue',
            options: {
                showTrendIndicator: true,
                sparklinePosition: 'before',
                showSparkline: true,
                backgroundColor: runway_10_color,
            },
            dataSources: {
                primary: 'runway_queue_time',
            },
        },

        right_box: {
            type: 'viz.rectangle',
            options: {
                backgroundColor: 'transparent',
                fill: '#24242c',
                fillOpacity: 0.2,
                stroke: 'transparent',
            },
        },
        on_time_perf_summary: {
            type: 'viz.pie',
            title: 'On Time Performance Summary',
            options: {
                'chart.showPercent': true,
                backgroundColor: 'transparent',
            },
            encoding: {
                value: 'primary.count',
                label: 'primary.component',
            },
            dataSources: {
                primary: 'on_time_perf_summary',
            },
        },
    },
};
