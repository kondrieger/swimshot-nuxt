export const schedule = {
    pools: [
        {
            id: 'zelenograd',
            adults: [
                {
                    id: 'aerobics',
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
            ],
            children: [],

            groups: [
                {
                    id: 'with-trainer',
                    label: 'Занятия с тренером',
                    children: [
                        { id: 1, label: 'Дети 6-8 лет' },
                        { id: 2, label: 'Дети 9-12 лет' },
                        { id: 3, label: 'Дети 13-17 лет' },
                        { id: 4, label: 'Взрослые' },
                    ],
                },
            ],
        },

        {
            id: 'orbita',
            children: [],
        },
    ],
};
