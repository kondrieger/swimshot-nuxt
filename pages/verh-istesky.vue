<template>
    <div>
        <SignNow />
        <PoolStartBlock
            title="Swim Shot в Екатеринбурге"
            address="СК “Верх-Исетский”, Екатеринбург, ул. Кирова, 71"
            :photosArr="poolsPicArr"
        />
        <div class="bg-grey">
            <PoolsFeatures data-aos="fade-up" :PoolsFeatures="poolFeatures" alone />
        </div>

        <ScheduleLink text="Расписание бассейна СК “Верх-Исетский”" pool="verh-istesky" />

        <div class="container" data-aos="fade-right">
            <div class="pools-info">
                <p class="pools-info__text">
                    Бассейн находится в районе Екатеринбурга ВИЗ в <b>Спортивновм Центре “Верх-Исетский”</b>
                </p>
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
                    Тренер занимается с детьми и взрослыми любого возраста и уровня подготовки. При надобности занятия
                    проходят <b>из воды</b>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import PoolsFeatures from '~/components/PoolsFeatures/PoolsFeatures.vue';
import ScheduleLink from '~/components/ScheduleLink/ScheduleLink.vue';

import PoolPic1 from '~/assets/jpg/pools/verh_istesky_1.jpg';
import PoolPic2 from '~/assets/jpg/pools/verh_istesky_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/verh_istesky_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/verh_istesky_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/verh_istesky_5.jpg';
import PoolPic6 from '~/assets/jpg/pools/verh_istesky_6.jpg';
import PoolPic7 from '~/assets/jpg/pools/verh_istesky_7.jpg';

const poolsPicArr = [PoolPic1, PoolPic2, PoolPic3, PoolPic4, PoolPic5, PoolPic6, PoolPic7];

const poolFeatures = [
    {
        title: 'Стоимость групповых',
        text: 'от 4900 в месяц',
    },
    {
        title: 'Для кого?',
        text: 'дети от 6 лет и взрослые',
    },
    {
        title: 'Глубина',
        text: '1,2 - 2 метров',
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
        text: '27-28 градусов',
    },
];

export default {
    name: 'zelenograd-page',

    layout: 'default',

    components: {
        PoolStartBlock,
        AnotherPools,
        SignNow,
        PoolsFeatures,
        ScheduleLink,
    },

    head() {
        return {
            title: 'Swim Shot — Бассейн в Зеленограде',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Зеленограде на пересечении Панфиловского проспекта и улицы Каменка. Длина бассейна 25 метров 4 дорожи. В бассейн в Зеленограде можно приобрести абонемент для свободного плавания, групповых или индивидуальных занятий с тренером.',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        'Контакты бассейн Зеленоград, Адрес бассейн Зеленоград, Бассейн Зеленоград, Абонемент бассейн Зеленоград, Цена бассейн Зеленоград, Стоимость бассейн Зеленоград, Расписание бассейн Зеленоград, Отзывы бассейн Зеленоград',
                },
            ],
        };
    },

    data() {
        return {
            poolsPicArr,
            poolFeatures,
        };
    },
};
</script>
