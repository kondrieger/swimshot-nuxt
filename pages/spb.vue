<template>
    <div>
        <SignNow />
        <PoolStartBlock
            title="Swim Shot в Санкт-Петербурге"
            address="ул. Константина Заслонова, 23, корп. 4, Санкт-Петербург"
            :photosArr="poolsPicArr"
        />

        <div class="bg-grey">
            <PoolsFeatures data-aos="fade-up" :PoolsFeatures="poolFeatures" alone />
        </div>

        <ScheduleLink text="Расписание бассейна СК “Верх-Исетский”" pool="ekb" />

        <div class="container" data-aos="fade-right">
            <div class="pools-info">
                <p class="pools-info__text">Бассейн находится в Центральном районе Санкт-Петербурга.</p>
                <p class="pools-info__text">
                    Это уютный бассейн длиной <strong>25 метров</strong>. Есть раздевалки с запирающимися шкафчиками,
                    душевые, туалеты, умывальники, фены. Вокруг бассейна есть <strong>большое пространство</strong>, на
                    котором можно размяться.
                </p>
                <p class="pools-info__text">
                    Для посетителей бассейна есть <strong>различный инвентарь</strong> – досочки, калабашки, нудлы,
                    игрушки и т. д. Также на территории стоят кулеры с питьевой водой. У бассейна есть
                    <b>парковка</b> для всех посетителей.
                </p>
                <p class="pools-info__text">
                    Тренер занимается с детьми от 7 лет и взрослыми любого уровня подготовки. При надобности занятия
                    проходят <b>из воды</b>.
                </p>
            </div>
        </div>

        <div class="bg-grey">
            <AnotherPools data-aos="fade-right" :PoolsArr="poolsList" />
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import { poolsList } from '~/static/js/poolsInfo.js';

import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import PoolsFeatures from '~/components/PoolsFeatures/PoolsFeatures.vue';
import ScheduleLink from '~/components/ScheduleLink/ScheduleLink.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';

import PoolPic1 from '~/assets/jpg/pools/pool_spb.jpg';
import PoolPic2 from '~/assets/jpg/pools/pool_spb_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/pool_spb_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/pool_spb_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/pool_spb_5.jpg';
import PoolPic6 from '~/assets/jpg/pools/pool_spb_6.jpg';
import PoolPic7 from '~/assets/jpg/pools/pool_spb_7.jpg';

const poolsPicArr = [PoolPic1, PoolPic2, PoolPic3, PoolPic4, PoolPic5, PoolPic6, PoolPic7];

const poolFeatures = [
    {
        title: 'Стоимость групповых',
        text: 'от 5500 в месяц',
    },
    {
        title: 'Для кого?',
        text: 'дети от 7 лет и взрослые',
    },
    {
        title: 'Глубина',
        text: '0.8 - 3.5 метров',
    },
    {
        title: 'Длина',
        text: '25 метров',
    },
    {
        title: 'Количество дорожек',
        text: '6',
    },
    {
        title: 'Температура воды',
        text: '28 градусов',
    },
];

export default {
    name: 'ekb-page',

    layout: 'default',

    components: {
        PoolStartBlock,
        SignNow,
        PoolsFeatures,
        ScheduleLink,
        AnotherPools,
    },

    head() {
        return {
            title: 'Swim Shot в Санкт-Петербурге',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Санкт-Петербурге по адресу ул. Константина Заслонова, 23, корп. 4. Длина бассейна 25 метров 6 дорожек. В бассейн в Санкт-Петербурге можно приобрести абонемент для свободного плавания, групповых или индивидуальных занятий с тренером.',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        'Контакты бассейн Санкт-Петербург, Адрес бассейн Санкт-Петербург, Бассейн Санкт-Петербург, Абонемент бассейн Санкт-Петербург, Цена бассейн Санкт-Петербург, Стоимость бассейн Санкт-Петербург, Расписание бассейн Санкт-Петербург, Отзывы бассейн Санкт-Петербург',
                },
            ],
        };
    },

    data() {
        return {
            poolsPicArr,
            poolFeatures,
            poolsList: poolsList.filter((pool) => pool.id !== 'spb'),
        };
    },
};
</script>
