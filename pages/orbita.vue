<template>
    <div>
        <SignNow />
        <PoolStartBlock title="СК Орбита" address="Зеленоград, ул. Озерная аллея, 6" :photosArr="poolsPicArr" />
        <PoolTabs :littlePool="littlePool" :bigPool="[]" littleActive data-aos="fade-up" />
        <ScheduleLink text="Расписание бассейна СК Орбита" pool="orbita" />
        <div class="container" data-aos="fade-up">
            <div class="pools-info">
                <p class="pools-info__text">
                    Сейчас в СК Орбита проходят групповые и персональные тренировки
                    <b>для самых маленьких, до 6 лет</b>.
                </p>
                <p class="pools-info__text">У здания есть <b>парковка</b>.</p>
            </div>
        </div>
        <div class="bg-grey">
            <AnotherPools :PoolsArr="poolsList" data-aos="fade-up" />
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import { poolsList } from '~/static/js/poolsInfo.js';

import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import PoolTabs from '~/views/PoolTabs/PoolTabs.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import ScheduleLink from '~/components/ScheduleLink/ScheduleLink.vue';

import PoolPic3 from '~/assets/jpg/pools/pool_orbita_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/pool_orbita_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/pool_orbita_5.jpg';

const poolsPicArr = [PoolPic3, PoolPic4, PoolPic5];

const littlePool = [
    {
        title: 'Для кого?',
        text: 'Дети 3-6 лет',
    },
    {
        title: 'Стоимость групповых',
        text: 'от 1100 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 2400 за занятие',
    },
    {
        title: 'Глубина',
        text: '0,7-1,2 метра',
    },
    {
        title: 'Длина',
        text: '16 метров',
    },
    {
        title: 'Количество дорожек',
        text: '2',
    },
    {
        title: 'Температура воды',
        text: '30 градусов',
    },
];

export default {
    name: 'orbita-page',

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
            title: 'Swim shot | Бассейн СК Орбита',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Зеленограде. Спортивный комплекс Орбита. Школа плавания для детей и взрослых Swim shot. Лучшие тренеры. Групповые и индивидуальные занятия. Пробная тренировка со скидкой 75%',
                },
            ],
        };
    },

    data() {
        return {
            poolsList: poolsList.filter((pool) => pool.id !== 'orbita'),
            poolsPicArr,
            littlePool,
        };
    },
};
</script>
