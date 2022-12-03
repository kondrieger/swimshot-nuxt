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

                    price: [
                        {
                            id: 1,
                            amount: 3500,
                        },
                        {
                            id: 2,
                            amount: 5900,
                        },
                    ],
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

                    price: [
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

                    price: [
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

                    price: [
                        {
                            id: 1,
                            amount: 5500,
                        },
                        {
                            id: 2,
                            amount: 9900,
                        },
                    ],
                },
                {
                    id: 'child-68',
                    type: ['group', 'personal'],
                    label: 'Ребенок 6-8 лет',
                    combine: true,

                    types: [
                        {
                            id: 1,
                            groupDays: [
                                {
                                    id: 1,
                                    diffs: [
                                        {
                                            time: ['13:45'],
                                            trainer: 'Дарья',
                                        },
                                        {
                                            time: ['14:30', '15:15'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['19:00', '19:45'],
                                            trainer: 'Илья',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    diffs: [
                                        {
                                            time: ['13:45', '14:30', '15:15', '19:45'],
                                            trainer: 'Александра',
                                        },
                                        {
                                            time: ['14:30', '19:00'],
                                            trainer: 'Любовь',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    diffs: [
                                        {
                                            time: ['13:45'],
                                            trainer: 'Дарья',
                                        },
                                        {
                                            time: ['14:30', '15:15'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['19:00'],
                                            trainer: 'Сергей',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    diffs: [
                                        {
                                            time: ['13:45', '14:30', '15:15', '19:45'],
                                            trainer: 'Александра',
                                        },
                                        {
                                            time: ['14:30', '19:00'],
                                            trainer: 'Любовь',
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    diffs: [
                                        {
                                            time: ['13:45'],
                                            trainer: 'Дарья',
                                        },
                                        {
                                            time: ['14:30', '15:15'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['19:00', '19:45'],
                                            trainer: 'Илья',
                                        },
                                    ],
                                },
                                {
                                    id: 6,
                                    diffs: [
                                        {
                                            time: ['10:45', '11:30', '12:15', '14:30'],
                                            trainer: 'Александра',
                                        },
                                        {
                                            time: ['13:00', '13:45'],
                                            trainer: 'Илья',
                                        },
                                    ],
                                },
                                {
                                    id: 7,
                                    diffs: [
                                        {
                                            time: ['10:45', '11:30', '12:15', '14:30', '16:45'],
                                            trainer: 'Александра',
                                        },
                                        {
                                            time: ['13:00', '13:45', '16:00'],
                                            trainer: 'Илья',
                                        },
                                    ],
                                },
                            ],

                            price: [
                                {
                                    id: 1,
                                    amount: 4500,
                                },
                                {
                                    id: 2,
                                    amount: 7500,
                                },
                                {
                                    id: 3,
                                    amount: 9900,
                                },
                            ],
                        },
                        {
                            id: 2,
                            groupDays: [
                                {
                                    id: 1,
                                    time: ['16:45'],
                                    trainer: 'Любовь',
                                },
                                {
                                    id: 2,
                                    diffs: [
                                        {
                                            time: ['16:00', '16:45'],
                                            trainer: 'Александра',
                                        },
                                        {
                                            time: ['17:30'],
                                            trainer: 'Сергей',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    time: ['16:45'],
                                    trainer: 'Любовь',
                                },
                                {
                                    id: 4,
                                    diffs: [
                                        {
                                            time: ['16:00', '16:45'],
                                            trainer: 'Александра',
                                        },
                                        {
                                            time: ['17:30'],
                                            trainer: 'Сергей',
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    time: ['16:45'],
                                    trainer: 'Любовь',
                                },
                                {
                                    id: 6,
                                    diffs: [
                                        {
                                            time: ['16:00'],
                                            trainer: 'Илья',
                                        },
                                        {
                                            time: ['16:45'],
                                            trainer: 'Александра',
                                        },
                                        {
                                            time: ['17:30'],
                                            trainer: 'Сергей',
                                        },
                                    ],
                                },
                            ],

                            price: [
                                {
                                    id: 1,
                                    amount: 4900,
                                },
                                {
                                    id: 2,
                                    amount: 8500,
                                },
                                {
                                    id: 3,
                                    amount: 10900,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'child-912',
                    type: ['group', 'personal', 'sport'],
                    label: 'Ребенок 9-12 лет',
                    combine: true,

                    types: [
                        {
                            id: 1,
                            groupDays: [
                                {
                                    id: 1,
                                    diffs: [
                                        {
                                            time: ['14:30', '15:15'],
                                            trainer: 'Илья',
                                        },
                                        {
                                            time: ['19:00'],
                                            trainer: 'Любовь',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    diffs: [
                                        {
                                            time: ['15:15'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['19:00'],
                                            trainer: 'Александра',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    diffs: [
                                        {
                                            time: ['14:30', '15:15'],
                                            trainer: 'Сергей',
                                        },
                                        {
                                            time: ['19:00'],
                                            trainer: 'Любовь',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    diffs: [
                                        {
                                            time: ['15:15'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['19:00'],
                                            trainer: 'Александра',
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    diffs: [
                                        {
                                            time: ['14:30', '15:15'],
                                            trainer: 'Илья',
                                        },
                                        {
                                            time: ['19:00'],
                                            trainer: 'Любовь',
                                        },
                                    ],
                                },
                                {
                                    id: 6,
                                    diffs: [
                                        {
                                            time: ['11:30', '14:30', '15:15'],
                                            trainer: 'Сергей',
                                        },
                                        {
                                            time: ['12:15'],
                                            trainer: 'Илья',
                                        },
                                        {
                                            time: ['13:00', '13:45', '19:00'],
                                            trainer: 'Александра',
                                        },
                                    ],
                                },
                                {
                                    id: 7,
                                    diffs: [
                                        {
                                            time: ['11:30'],
                                            trainer: 'Сергей',
                                        },
                                        {
                                            time: ['12:15', '14:30', '15:15', '17:30', '18:15'],
                                            trainer: 'Илья',
                                        },
                                        {
                                            time: ['13:00', '13:45', '16:00'],
                                            trainer: 'Александра',
                                        },
                                    ],
                                },
                            ],

                            price: [
                                {
                                    id: 1,
                                    amount: 4500,
                                },
                                {
                                    id: 2,
                                    amount: 7500,
                                },
                                {
                                    id: 3,
                                    amount: 9900,
                                },
                            ],
                        },
                        {
                            id: 2,
                            groupDays: [
                                {
                                    id: 1,
                                    diffs: [
                                        {
                                            time: ['16:00'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['17:30'],
                                            trainer: 'Илья',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    diffs: [
                                        {
                                            time: ['17:30'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['18:15'],
                                            trainer: 'Сергей',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    diffs: [
                                        {
                                            time: ['16:00'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['17:30'],
                                            trainer: 'Сергей',
                                        },
                                    ],
                                },
                                {
                                    id: 4,
                                    diffs: [
                                        {
                                            time: ['17:30'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['18:15'],
                                            trainer: 'Сергей',
                                        },
                                    ],
                                },
                                {
                                    id: 5,
                                    diffs: [
                                        {
                                            time: ['16:00'],
                                            trainer: 'Любовь',
                                        },
                                        {
                                            time: ['17:30'],
                                            trainer: 'Илья',
                                        },
                                    ],
                                },
                                {
                                    id: 6,
                                    time: ['18:15'],
                                    trainer: 'Сергей',
                                },
                            ],

                            price: [
                                {
                                    id: 1,
                                    amount: 4900,
                                },
                                {
                                    id: 2,
                                    amount: 8500,
                                },
                                {
                                    id: 3,
                                    amount: 10900,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'child-1317',
                    type: ['group', 'personal', 'sport'],
                    label: 'Ребенок 13-17 лет',
                    combine: true,

                    types: [
                        {
                            id: 1,
                            groupDays: [
                                {
                                    id: 1,
                                    time: ['19:45'],
                                    trainer: 'Любовь',
                                },
                                {
                                    id: 3,
                                    time: ['19:45'],
                                    trainer: 'Любовь',
                                },
                                {
                                    id: 5,
                                    time: ['19:45'],
                                    trainer: 'Любовь',
                                },
                                {
                                    id: 7,
                                    time: ['17:30', '18:15', '19:00'],
                                    trainer: 'Александра',
                                },
                            ],

                            price: [
                                {
                                    id: 1,
                                    amount: 4500,
                                },
                                {
                                    id: 2,
                                    amount: 7500,
                                },
                                {
                                    id: 3,
                                    amount: 9900,
                                },
                            ],
                        },
                        {
                            id: 2,
                            groupDays: [
                                {
                                    id: 1,
                                    time: ['18:15'],
                                    trainer: 'Илья',
                                },
                                {
                                    id: 2,
                                    time: ['18:15'],
                                    trainer: 'Любовь',
                                },
                                {
                                    id: 3,
                                    time: ['18:15'],
                                    trainer: 'Сергей',
                                },
                                {
                                    id: 4,
                                    time: ['18:15'],
                                    trainer: 'Любовь',
                                },
                                {
                                    id: 5,
                                    time: ['18:15'],
                                    trainer: 'Илья',
                                },
                                {
                                    id: 6,
                                    time: ['17:30', '18:15'],
                                    trainer: 'Александра',
                                },
                            ],
                            price: [
                                {
                                    id: 1,
                                    amount: 4900,
                                },
                                {
                                    id: 2,
                                    amount: 8500,
                                },
                                {
                                    id: 3,
                                    amount: 10900,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export const price = {
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
    sport: [
        {
            id: 3,
            amount: 10000,
        },
    ],
};
