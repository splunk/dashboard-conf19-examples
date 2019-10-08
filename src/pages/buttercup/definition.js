import { createStaticURL } from '@splunk/splunk-utils/url';

const bgUrl = createStaticURL('app/dashboard_conf19_examples/buttercup_background.png');

export default {
    dataSources: {
        radar_ds: {
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
        game_stats: {
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
                            900,
                            1483,
                            1220,
                            790,
                            1453,
                            507,
                            863,
                            1132,
                            725,
                            12,
                            1394,
                            1193,
                            508,
                            1418,
                            334,
                            227,
                            1179,
                            673,
                            1009,
                            1194,
                            352,
                            273,
                            260,
                            191,
                            1271,
                            1255,
                            1030,
                            514,
                            401,
                            0,
                            215,
                            1158,
                            856,
                            569,
                            406,
                            1384,
                            734,
                            817,
                            1020,
                            47,
                            499,
                            943,
                            126,
                            1249,
                            334,
                            633,
                            1227,
                            853,
                            574,
                            861,
                        ],
                        [
                            1567636168,
                            1567639768,
                            1567643368,
                            1567646968,
                            1567650568,
                            1567654168,
                            1567657768,
                            1567661368,
                            1567664968,
                            1567668568,
                            1567672168,
                            1567675768,
                            1567679368,
                            1567682968,
                            1567686568,
                            1567690168,
                            1567693768,
                            1567697368,
                            1567700968,
                            1567704568,
                            1567708168,
                            1567711768,
                            1567715368,
                            1567718968,
                            1567722568,
                            1567726168,
                            1567729768,
                            1567733368,
                            1567736968,
                            1567740568,
                            1567744168,
                            1567747768,
                            1567751368,
                            1567754968,
                            1567758568,
                            1567762168,
                            1567765768,
                            1567769368,
                            1567772968,
                            1567776568,
                            1567780168,
                            1567783768,
                            1567787368,
                            1567790968,
                            1567794568,
                            1567798168,
                            1567801768,
                            1567805368,
                            1567808968,
                            1567812568,
                        ],
                    ],
                },
            },
        },
        games_per_day: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'device',
                        },
                        {
                            name: 'games',
                        },
                    ],
                    columns: [
                        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        [761, 423, 314, 299, 312, 434, 671],
                    ],
                },
            },
        },
        leader_search: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'User',
                        },
                        {
                            name: 'Top Score',
                        },
                        {
                            name: 'Total Games',
                        },
                        {
                            name: 'Total Play Time',
                        },
                    ],
                    columns: [
                        [
                            'User 1',
                            'User 2',
                            'User 3',
                            'User 4',
                            'User 5',
                            'User 6',
                            'User 7',
                            'User 8',
                            'User 9',
                            'User 10',
                        ],
                        [63, 59, 47, 42, 23, 16, 15, 8, 4, 1],
                        [761, 671, 333, 150, 10, 6, 5, 1, 1, 1],
                        [
                            '5 hrs',
                            '3 hrs',
                            '2 hrs',
                            '1 hrs',
                            '30 min',
                            '20 min',
                            '10 min',
                            '1 min',
                            '30 sec',
                            '3 sec',
                        ],
                    ],
                },
            },
        },
        games_per_user: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'games_range',
                        },
                        {
                            name: 'users',
                        },
                    ],
                    columns: [['1', '2', '3 - 5', ' 6 - 10', '11+'], [1234, 2678, 5246, 4157, 2234]],
                },
            },
        },
        last_hour_games: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'count',
                        },
                    ],
                    columns: [
                        [
                            13,
                            79,
                            91,
                            35,
                            5,
                            95,
                            95,
                            13,
                            24,
                            27,
                            18,
                            87,
                            61,
                            75,
                            52,
                            35,
                            23,
                            69,
                            0,
                            46,
                            63,
                            93,
                            16,
                            10,
                            13,
                            72,
                            93,
                            64,
                            38,
                            6,
                            50,
                            96,
                            92,
                            3,
                            28,
                            9,
                            63,
                            43,
                            19,
                            51,
                            82,
                            48,
                            71,
                            68,
                            23,
                            34,
                            1,
                            77,
                            11,
                            68,
                        ],
                    ],
                },
            },
        },
        games_per_device: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'device',
                        },
                        {
                            name: 'games',
                        },
                    ],
                    columns: [
                        ['Android', 'Mac', 'iPhone', 'iPad', 'Windows', 'Other'],
                        [12345, 11123, 10345, 10200, 9987, 5432],
                    ],
                },
            },
        },
        multi_game_users: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'count',
                        },
                    ],
                    columns: [[1000, 554, 671]],
                },
            },
        },
        top_score_search: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'max',
                        },
                    ],
                    columns: [['63']],
                },
            },
        },
        single_game_users: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'count',
                        },
                    ],
                    columns: [[164]],
                },
            },
        },
        total_game_search: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'count',
                        },
                    ],
                    columns: [['13832145']],
                },
            },
        },
        total_user_search: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'count',
                        },
                    ],
                    columns: [['71896']],
                },
            },
        },
        yoy_player_growth: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'hardcoded_data',
                        },
                    ],
                    columns: [['57%']],
                },
            },
        },
        score_distribution: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'score',
                        },
                        {
                            name: 'games',
                        },
                    ],
                    columns: [['< 5', '5 - 19', '20 - 39', '40+'], [1234, 2678, 1910, 978]],
                },
            },
        },
        yoy_engagement_growth: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'hardcoded_data',
                        },
                    ],
                    columns: [['42%']],
                },
            },
        },
        avg_games_per_user_search: {
            type: 'ds.test',
            options: {
                data: {
                    fields: [
                        {
                            name: 'count',
                        },
                        {
                            name: 'avg_games_played',
                        },
                    ],
                    columns: [
                        [
                            9,
                            0,
                            8,
                            1,
                            11,
                            8,
                            11,
                            14,
                            5,
                            11,
                            9,
                            5,
                            2,
                            12,
                            5,
                            11,
                            6,
                            13,
                            7,
                            4,
                            11,
                            14,
                            7,
                            9,
                            5,
                            14,
                            4,
                            1,
                            13,
                            6,
                            9,
                            8,
                            0,
                            4,
                            12,
                            14,
                            2,
                            4,
                            12,
                            9,
                            8,
                            4,
                            4,
                            10,
                            8,
                            14,
                            7,
                            10,
                            12,
                            9,
                        ],
                        [7.92],
                    ],
                },
            },
        },
    },
    inputs: {},
    layout: {
        type: 'absolute',
        options: {
            width: 1500,
            height: 600,
            display: 'auto-scale',
            backgroundImage: {
                x: 0,
                y: 0,
                src: bgUrl,
                sizeType: 'contain',
            },
            canvasBackgroundColor: 'transparent',
            layoutItemBackgroundColor: 'transparent',
        },
        structure: [
            {
                item: 'yoy_engagement_growth',
                position: {
                    h: 70,
                    w: 80,
                    x: 110,
                    y: 110,
                },
            },
            {
                item: 'yoy_player_growth',
                position: {
                    h: 70,
                    w: 80,
                    x: 110,
                    y: 430,
                },
            },
            {
                item: 'top_score',
                position: {
                    h: 50,
                    w: 200,
                    x: 380,
                    y: 330,
                },
            },
            {
                item: 'total_users',
                position: {
                    h: 60,
                    w: 220,
                    x: 370,
                    y: 240,
                },
            },
            {
                item: 'leader_board',
                position: {
                    h: 140,
                    w: 390,
                    x: 1110,
                    y: 160,
                },
            },
            {
                item: 'punch_card',
                position: {
                    h: 160,
                    w: 410,
                    x: 1100,
                    y: 320,
                },
            },
            {
                item: 'total_games',
                position: {
                    h: 100,
                    w: 360,
                    x: 670,
                    y: 190,
                },
            },
            {
                item: 'avg_games_per_user_search',
                position: {
                    h: 110,
                    w: 350,
                    x: 680,
                    y: 327,
                },
            },
            {
                item: 'last_hour_games',
                position: {
                    h: 140,
                    w: 410,
                    x: 650,
                    y: 460,
                },
            },
            {
                item: 'score_distribution',
                position: {
                    h: 160,
                    w: 230,
                    x: 370,
                    y: 400,
                },
            },
            {
                item: 'games_per_user',
                position: {
                    h: 170,
                    w: 220,
                    x: 370,
                    y: 40,
                },
            },
            {
                item: 'games_per_day',
                position: {
                    h: 90,
                    w: 390,
                    x: 1110,
                    y: 480,
                },
            },
            {
                item: 'games_per_device',
                position: {
                    h: 90,
                    w: 400,
                    x: 1100,
                    y: 40,
                },
            },
            {
                item: 'single_game_users',
                position: {
                    h: 100,
                    w: 120,
                    x: 710,
                    y: 10,
                },
            },
            {
                item: 'multi_game_users',
                position: {
                    h: 100,
                    w: 110,
                    x: 870,
                    y: 10,
                },
            },
        ],
    },
    title: "Petey's Buttercup Games",
    description: '',
    visualizations: {
        top_score: {
            type: 'viz.singlevalue',
            options: {
                useColors: true,
                rangeColors: ['#fff', '#fff'],
                rangeValues: [0, 10000000000],
            },
            dataSources: {
                primary: 'top_score_search',
            },
        },
        punch_card: {
            type: 'viz.table',
            options: {
                backgroundColor: 'transparent',
            },
            dataSources: {
                primary: 'game_stats',
            },
        },
        total_games: {
            type: 'viz.singlevalue',
            options: {
                useColors: true,
                rangeColors: ['#fff', '#fff'],
                rangeValues: [0, 100000],
            },
            dataSources: {
                primary: 'total_game_search',
            },
        },
        total_users: {
            type: 'viz.singlevalue',
            options: {
                useColors: true,
                rangeColors: ['#fff', '#fff'],
                rangeValues: [0, 1000000000],
            },
            dataSources: {
                primary: 'total_user_search',
            },
        },
        leader_board: {
            type: 'viz.table',
            dataSources: {
                primary: 'leader_search',
            },
        },
        games_per_day: {
            type: 'viz.line',
            options: {
                backgroundColor: 'transparent',
            },
            dataSources: {
                primary: 'games_per_day',
            },
        },
        games_per_user: {
            type: 'viz.column',
            options: {
                fontColor: '#ffffff',
                seriesColors: "['#ffffff']",
                backgroundColor: 'transparent',
                'legend.placement': 'none',
                'axisLabelsY.majorUnit': 1,
                'axisTitleX.visibility': 'collapsed',
                'axisTitleY.visibility': 'collapsed',
            },
            dataSources: {
                primary: 'games_per_user',
            },
        },
        last_hour_games: {
            type: 'viz.singlevalue',
            options: {
                layout: 'radial',
                useColors: true,
                underLabel: 'Compared to 1 hour before',
                rangeColors: ['#fff', '#fff'],
                rangeValues: [0, 100],
                backgroundColor: 'transparent',
            },
            dataSources: {
                primary: 'last_hour_games',
            },
        },
        games_per_device: {
            type: 'viz.line',
            options: {
                fontColor: '#ffffff',
                lineWidth: 5,
                seriesColors: "['#ffffff']",
                backgroundColor: 'transparent',
                'legend.placement': 'none',
                'axisTitleX.visibility': 'collapsed',
                'axisTitleY.visibility': 'collapsed',
            },
            dataSources: {
                primary: 'games_per_device',
            },
        },
        multi_game_users: {
            type: 'viz.singlevalueradial',
            options: {},
            dataSources: {
                primary: 'multi_game_users',
            },
        },
        single_game_users: {
            type: 'viz.singlevalueradial',
            options: {
                trendDisplayMode: 'absolute',
            },
            dataSources: {
                primary: 'single_game_users',
            },
        },
        yoy_player_growth: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
            },
            dataSources: {
                primary: 'yoy_player_growth',
            },
        },
        score_distribution: {
            type: 'viz.column',
            options: {
                fontColor: '#ffffff',
                seriesColors: "['#ffffff']",
                backgroundColor: 'transparent',
                'legend.placement': 'none',
                'axisTitleX.visibility': 'collapsed',
                'axisTitleY.visibility': 'collapsed',
            },
            dataSources: {
                primary: 'score_distribution',
            },
        },
        yoy_engagement_growth: {
            type: 'viz.singlevalue',
            options: {
                backgroundColor: 'transparent',
            },
            dataSources: {
                primary: 'yoy_engagement_growth',
            },
        },
        avg_games_per_user_search: {
            type: 'viz.singlevalue',
            options: {
                useColors: true,
                rangeColors: ['#fff', '#fff'],
                rangeValues: [0, 1000000000],
                showTrendIndicator: false,
                sparklineFillColor: '#ffffff',
                sparklineStrokeColor: '#ffffff',
            },
            dataSources: {
                primary: 'avg_games_per_user_search',
            },
        },
    },
};
