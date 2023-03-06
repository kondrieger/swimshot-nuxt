<template>
    <div>
        <SignNow />
        <PoolStartBlock title="Бассейн Анкор" address="Зеленоград, к305" :photosArr="poolsPicArr" />
        <div class="bg-grey">
            <PoolsFeatures data-aos="fade-up" :PoolsFeatures="poolFeatures" alone />
        </div>

        <div class="container" data-aos="fade-up">
            <div class="pools-info">
                <p class="pools-info__text">
                    Бассейн находится на центральном проспекте в Зеленограде, в <b>премиальном клубе Анкор</b>.
                </p>
                <p class="pools-info__text">
                    Комфортные раздевалки с просторными шкафчиками, феном, чистыми туалетом и душевыми, гелями для душа
                    и шампунями помогают настроиться на кайфовую тренировку и расслабиться после нее.
                </p>
                <p class="pools-info__text">
                    Габариты бассейна отлично подходят для пловцов среднего и начального уровня. Также на территории
                    есть кулеры с водой, инвентарь для занятий и все необходимое для комфортного плавания.
                </p>
                <p class="pools-info__text">
                    <b>В стоимость тренировок входит хамам</b>, в котором можно хорошенько отдохнуть после плавания.
                </p>
                <p class="pools-info__text">
                    У здания есть <b>парковка</b> за шлагбаумом, открывающимся для Клиентов Swim Shot.
                </p>
            </div>
        </div>
        <div class="bg-grey">
            <AnotherPools :PoolsArr="poolsArr" data-aos="fade-up" />
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import PoolTabs from '~/views/PoolTabs/PoolTabs.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import ScheduleLink from '~/components/ScheduleLink/ScheduleLink.vue';

import ph1801 from '~/assets/jpg/pools/1801.jpg';
import orbita from '~/assets/jpg/pools/pool_orbita_3.jpg';
import PoolPic1 from '~/assets/jpg/pools/pool_ankor.jpg';
import PoolPic2 from '~/assets/jpg/pools/pool_ankor_2.jpg';

const poolsPicArr = [PoolPic1, PoolPic2];

const poolsArr = [
    {
        title: 'Бассейн Swim Shot',
        subtitle: 'Зеленоград',
        pic: ph1801,
        href: '/zelenograd',
    },
    {
        title: 'СК Орбита',
        subtitle: 'Зеленоград',
        pic: orbita,
        href: '/orbita',
    },
];

const poolFeatures = [
    {
        title: 'Для кого?',
        text: 'Дети с пяти лет и взрослые',
    },
    {
        title: 'Стоимость групповых',
        text: 'от 2900 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 4300 за занятие',
    },
    {
        title: 'Глубина',
        text: '1,25-1,85 метра',
    },
    {
        title: 'Длина',
        text: '14 метров',
    },
    {
        title: 'Ширина',
        text: '8 метров',
    },
    {
        title: 'Температура воды',
        text: '28 градусов',
    },
];

export default {
    name: 'ankor-page',

    layout: 'default',

    components: {
        PoolStartBlock,
        PoolTabs,
        AnotherPools,
        SignNow,
        ScheduleLink,
    },

    head() {
        return {
            title: 'Swim shot | Бассейн Анкор',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Зеленограде. Ресторанно-гостиничный комплекс Анкор. Школа плавания для детей и взрослых Swim shot. Лучшие тренеры. Групповые и индивидуальные занятия. Пробная тренировка со скидкой 75%',
                },
            ],
        };
    },

    data() {
        return {
            poolsArr,
            poolsPicArr,
            poolFeatures,
        };
    },

    methods: {},
};
</script>
