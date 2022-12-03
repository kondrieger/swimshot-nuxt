export const schedule = {
    pools: [
        {
            id: 'zelenograd',
            adults: [
                {
                    id: 'adult-aerobics',
                    type: ['group', 'personal'],
                    label: 'Аквааэробика',
                    info: 'Фитнес в воде без элементов обучения плаванию',

                    groupDays: [
                        {
                            id: 1,
                            time: ['20:30'],
                            trainer: 'Любовь',
                        },
                        {
                            id: 4,
                            time: ['20:30'],
                            trainer: 'Любовь',
                        },
                    ],

                    price: {
                        group: [
                            {
                                id: 1,
                                amount: 3500,
                            },
                            {
                                id: 2,
                                amount: 5900,
                            },
                        ],

                        personal: [
                            {
                                id: 1,
                                amount: 2700,
                            },
                            {
                                id: 3,
                                amount: 7800,
                            },
                            {
                                id: 5,
                                amount: 12500,
                            },
                            {
                                id: 10,
                                amount: 23900,
                            },
                        ],
                    },
                },
                {
                    id: 'adult-health-back',
                    type: ['group', 'personal'],
                    label: 'Здоровая спина',
                    info: 'Тренировки, направленные на устранение проблем со спиной и их профилактику',

                    groupDays: [
                        {
                            id: 1,
                            time: ['20:30'],
                            trainer: 'Любовь',
                        },
                        {
                            id: 3,
                            time: ['20:30'],
                            trainer: 'Любовь',
                        },
                        {
                            id: 3,
                            time: ['20:30'],
                            trainer: 'Любовь',
                        },
                    ],

                    price: {
                        group: [
                            {
                                id: 1,
                                amount: 4500,
                            },
                            {
                                id: 2,
                                amount: 7900,
                            },
                            {
                                id: 3,
                                amount: 9900,
                            },
                        ],

                        personal: [
                            {
                                id: 1,
                                amount: 2700,
                            },
                            {
                                id: 3,
                                amount: 7800,
                            },
                            {
                                id: 5,
                                amount: 12500,
                            },
                            {
                                id: 10,
                                amount: 23900,
                            },
                        ],
                    },
                },
                {
                    id: 'adult-trainer',
                    type: ['group', 'personal'],
                    label: 'Тренировки по плаванию',
                    info: 'Тренировки с элементами обучения плаванию',
                    combine: true,

                    groupDays: [
                        {
                            id: 1,
                            time: ['7:45', '8:30', '20:30', '21:15'],
                            trainer: 'Дарья',
                        },
                        {
                            id: 2,
                            time: ['7:45', '8:30', '20:30', '21:15'],
                            trainer: 'Сергей',
                        },
                        {
                            id: 3,
                            time: ['7:45', '8:30', '20:30', '21:15'],
                            trainer: 'Дарья',
                        },
                        {
                            id: 4,
                            time: ['7:45', '8:30', '20:30', '21:15'],
                            trainer: 'Сергей',
                        },
                        {
                            id: 5,
                            time: ['7:45', '8:30', '20:30', '21:15'],
                            trainer: 'Дарья',
                        },
                        {
                            id: 6,
                            diffs: [
                                {
                                    time: ['9:15'],
                                    trainer: 'Илья',
                                },
                                {
                                    time: ['19:45', '20:30'],
                                    trainer: 'Сергей',
                                },
                            ],
                        },
                        {
                            id: 7,
                            diffs: [
                                {
                                    time: ['9:15'],
                                    trainer: 'Илья',
                                },
                                {
                                    time: ['19:45', '20:30'],
                                    trainer: 'Сергей',
                                },
                            ],
                        },
                    ],

                    price: {
                        group: [
                            {
                                id: 1,
                                amount: 4500,
                            },
                            {
                                id: 2,
                                amount: 7900,
                            },
                            {
                                id: 3,
                                amount: 9900,
                            },
                        ],

                        personal: [
                            {
                                id: 1,
                                amount: 2700,
                            },
                            {
                                id: 3,
                                amount: 7800,
                            },
                            {
                                id: 5,
                                amount: 12500,
                            },
                            {
                                id: 10,
                                amount: 23900,
                            },
                        ],
                    },
                },
            ],
            children: [],
        },

        {
            id: 'orbita',
            children: [
                {
                    id: 'child-u6',
                    type: ['group', 'personal'],
                    label: 'До 6 лет',
                    info: 'Для деток до шести лет занятия проходят в бассейне СК Орбита. На групповых занятиях работают сразу два тренера из воды',

                    groupDays: [
                        {
                            id: 6,
                            time: ['11:15'],
                        },
                        {
                            id: 7,
                            time: ['13:30'],
                        },
                    ],

                    price: {
                        group: [
                            {
                                id: 1,
                                amount: 5500,
                            },
                            {
                                id: 2,
                                amount: 9900,
                            },
                        ],

                        personal: [
                            {
                                id: 1,
                                amount: 2700,
                            },
                            {
                                id: 3,
                                amount: 7800,
                            },
                            {
                                id: 5,
                                amount: 12500,
                            },
                            {
                                id: 10,
                                amount: 23900,
                            },
                        ],
                    },
                },
            ],
        },
    ],
};
