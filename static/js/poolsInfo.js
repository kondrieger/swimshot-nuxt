export const schedule = {
    pools: [
        {
            id: 'zelenograd',
            adults: [
                {
                    id: 'adult-aerobics',
                    type: ['group'],
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
                            id: 5,
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
            children: [
                {
                    id: 'child-68',
                    type: ['group', 'personal'],
                    label: 'Дети 6-8 лет',
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
                    type: ['group', 'personal'],
                    label: 'Дети 9-12 лет',
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
                    id: 'child-917',
                    type: ['sport'],
                    label: 'Дети 9-17 лет',
                },
                {
                    id: 'child-1317',
                    type: ['group', 'personal'],
                    label: 'Дети 13-17 лет',
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
                            time: ['11:15', '12:00'],
                        },
                        {
                            id: 7,
                            time: ['13:30', '12:45'],
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
            ],
        },

        {
            id: 'ekb',
            all: [
                {
                    id: 'all',
                    type: ['group'],
                    label: 'Для всех',
                    info: 'Тренер занимается с детьми и взрослыми любого возраста и уровня подготовки. При надобности занятия проходят из воды',

                    groupDays: [
                        {
                            id: 2,
                            time: ['14:40'],
                        },
                        {
                            id: 3,
                            time: ['15:20'],
                        },
                        {
                            id: 4,
                            time: ['14:40'],
                        },
                        {
                            id: 5,
                            time: ['15:20'],
                        },
                        {
                            id: 6,
                            time: ['17:20'],
                        },
                        {
                            id: 7,
                            time: ['16:40'],
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

import orbita from '~/assets/jpg/pools/pool_orbita_3.jpg';
import ph1801 from '~/assets/jpg/pools/1801.jpg';
import ekb from '~/assets/jpg/pools/verh_istesky_1.jpg';

export const poolsList = [
    {
        id: 'zelenograd',
        title: 'Бассейн Swim Shot',
        subtitle: 'Зеленоград',
        pic: ph1801,
        href: '/zelenograd',
        badge: 'свободное плавание',
        home: true,
        isMsk: true,
    },
    {
        id: 'orbita',
        title: 'СК "Орбита"',
        subtitle: 'Зеленоград',
        pic: orbita,
        href: '/orbita',
        badge: 'для самых маленьких',
        isMsk: true,
    },
    {
        id: 'ekb',
        title: 'СК “Верх-Исетский”',
        subtitle: 'Екатеринбург',
        pic: ekb,
        href: '/ekb',
        new: true,
        isEkb: true,
    },
];

export const mskContacts = {
    tel: '+74994305595',
    phone: '+7 (499) 430-55-95',
    vk: 'https://vk.com/swim_shot',
    tg: 'https://t.me/swimshot',
    inst: 'https://instagram.com/swim_shot',
    email: 'swim_shot@mail.ru',
};

export const ekbContacts = {
    tel: '+73433647995',
    phone: '+7 (343) 364-79-95',
    vk: 'https://vk.com/swim_shot_ekb',
    tg: 'https://t.me/swim_shot_ekb',
    inst: 'https://instagram.com/swim_shot_ekb',
    email: 'swim_shot@mail.ru',
};
