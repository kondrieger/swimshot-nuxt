<template>
    <div>
        <SignNow />
        <PoolStartBlock
            title="Бассейн Swim Shot в Зеленограде"
            address="Зеленоград, корпус 1801"
            :photosArr="poolsPicArr"
        />
        <div class="bg-grey">
            <PoolsFeatures data-aos="fade-up" :PoolsFeatures="poolFeatures" alone />
        </div>

        <ScheduleLink text="Расписание бассейна Swim Shot" pool="zelenograd" />

        <div class="container" data-aos="fade-right">
            <div class="pools-info">
                <p class="pools-info__text">
                    Бассейн находится на цокольном этаже корпуса 1801 на пересечении улицы <b>Каменка</b> и
                    <strong>Панфиловского проспекта</strong> в Зеленограде.
                </p>
                <p class="pools-info__text">
                    Это уютный бассейн длиной <strong>25 метров</strong>, четыре дорожки, глубина 1,25 м. Есть
                    раздевалки с запирающимися шкафчиками, душевые, туалеты, умывальники, фены. Вокруг бассейна есть
                    <strong>большое пространство</strong>, на котором можно размяться.
                </p>
                <p class="pools-info__text">
                    Для посетителей бассейна есть <strong>различный инвентарь</strong> – досочки, калабашки, нудлы,
                    игрушки и т. д. Также на территории стоят кулеры с питьевой водой.
                </p>
            </div>
        </div>

        <div class="bg-grey">
            <AnotherPools data-aos="fade-right" :PoolsArr="poolsArr" />
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

import PoolPic1 from '~/assets/jpg/pools/1801.jpg';
import PoolPic2 from '~/assets/jpg/pools/1801_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/1801_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/1801_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/1801_5.jpg';
import PoolPic6 from '~/assets/jpg/pools/1801_6.jpg';
import PoolPic7 from '~/assets/jpg/pools/1801_7.jpg';
import orbita from '~/assets/jpg/pools/pool_orbita_3.jpg';

const poolsPicArr = [PoolPic1, PoolPic2, PoolPic3, PoolPic4, PoolPic5, PoolPic6, PoolPic7];

const poolFeatures = [
    {
        title: 'Стоимость групповых',
        text: 'от 760 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 2400 за занятие',
    },
    {
        title: 'Стоимость без тренера',
        text: 'от 310 за 45 минут',
    },
    {
        title: 'Для кого?',
        text: 'дети от 5 лет и взрослые',
    },
    {
        title: 'Глубина',
        text: '1,25 метров',
    },
    {
        title: 'Длина',
        text: '25 метров',
    },
    {
        title: 'Количество дорожек',
        text: '4',
    },
    {
        title: 'Температура воды',
        text: '29 градусов',
    },
];

const poolsArr = [
    {
        title: 'СК Орбита',
        subtitle: 'Зеленоград',
        pic: orbita,
        href: '/orbita',
    },
];

export default {
    name: 'zelenograd-page',
    layout: 'default',
    components: { PoolStartBlock, AnotherPools, SignNow, PoolsFeatures, ScheduleLink },
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
            poolsArr,
        };
    },
};
</script>
