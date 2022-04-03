export const shedule = {
    groups: [
        {
            id: 'with-trainer',
            label: 'Занятия с тренером',
            children: [
                { id: 1, label: 'Мальчики 3-6 лет' },
                { id: 2, label: 'Дети 7-9 лет' },
                { id: 3, label: 'Дети 10-16 лет' },
            ],
        },
    ],
    times: [
        {
            id: 1,
            times: [
                { id: 1, label: '1 раз в неделю' },
                { id: 2, label: '2 раза в неделю' },
            ],
        },
        {
            id: 2,
            times: [{ id: 1, label: '1 раз в неделю' }],
        },
        {
            id: 3,
            times: [
                { id: 1, label: '1 раз в неделю' },
                { id: 2, label: '2 раза в неделю' },
            ],
        },
    ],
    shedules: [
        {
            title: 'Мальчики 3-6 лет, 1 раз в неделю',
            id: 1,
            times: 1,
            shedule: [
                {
                    days: 'Суббота',
                    items: [{ price: '1000 руб/занятие', time: ['13:15'] }],
                },
                {
                    days: 'Воскресенье',
                    items: [{ price: '1000 руб/занятие', time: ['13:15'] }],
                },
            ],
        },
        {
            title: 'Мальчики 3-6 лет, 2 раза в неделю',
            id: 1,
            times: 2,
            shedule: [
                {
                    days: 'Суббота — Воскресенье',
                    items: [{ price: '1000 руб/занятие', time: ['13:15'] }],
                },
            ],
        },
        {
            title: 'Дети 7-9 лет, 1 раз в неделю',
            id: 2,
            times: 1,
            shedule: [
                {
                    days: 'Воскресенье',
                    items: [{ price: '1000 руб/занятие', time: ['15:30'] }],
                },
            ],
        },
        {
            title: 'Дети 10-16 лет, 1 раз в неделю',
            id: 3,
            times: 1,
            shedule: [
                {
                    days: 'Понедельник',
                    items: [{ price: '1000 руб/занятие', time: ['20:00'] }],
                },
                {
                    days: 'Четверг',
                    items: [{ price: '1000 руб/занятие', time: ['20:00'] }],
                },
            ],
        },
        {
            title: 'Дети 10-16 лет, 2 раза в неделю',
            id: 3,
            times: 2,
            shedule: [
                {
                    days: 'Понедельник — Четверг',
                    items: [{ price: '900 руб/занятие', time: ['20:00'] }],
                },
            ],
        },
    ],
};
