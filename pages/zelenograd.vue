<template>
    <div>
        <SignNow />
        <PoolStartBlock
            title="Бассейн Swim Shot в Зеленограде"
            address="Зеленоград, корпус 1801"
            :photosArr="poolsPicArr"
        />
        <div class="bg-grey">
            <PoolsFeatures :PoolsFeatures="poolFeatures" alone />
        </div>

        <div class="container" data-aos="fade-right" data-aos-once="true">
            <div class="pools-info">
                <p class="pools-info__text">
                    Бассейн находится на цокольном этаже корпуса 1801 на пересечении улицы <b>Каменка</b> и
                    <strong>Панфиловского проспекта</strong> в Зеленограде.
                </p>
                <p class="pools-info__text">
                    Это замечательный бассейн длиной <strong>25 метров</strong>, четыре дорожки, глубина 1,25 м. Есть
                    раздевалки с запирающимися шкафчиками, душевые, туалеты, умывальники, фены. Вокруг бассейна есть
                    <strong>большое пространство</strong>, на котором можно размяться.
                </p>
                <p class="pools-info__text">
                    Для посетителей бассейна есть <strong>различный инвентарь</strong> – досочки, калабашки, нудлы,
                    игрушки и т. д. Также на территории стоят кулеры с питьевой водой.
                </p>
                <p class="pools-info__text">
                    Подобрать время именно под твои нужды можно в <a href="#contact-form">форме</a> ниже.
                </p>
            </div>
        </div>
        <div class="bg-grey">
            <Shedule :shedule="shedule" class="bg-grey" />
        </div>
        <AnotherPools :PoolsArr="poolsArr" />
        <ModalBlackFriday :open="isFridayModalOpen" @closeModal="onCloseModal" />
    </div>
</template>

<script>
/* eslint-disable*/
import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import PoolsFeatures from '~/components/PoolsFeatures/PoolsFeatures.vue';
import ModalBlackFriday from '~/components/Modal/BlackFriday.vue';

import PoolPic1 from '~/assets/jpg/pools/1801.jpg';
import PoolPic2 from '~/assets/jpg/pools/1801_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/1801_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/1801_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/1801_5.jpg';
import PoolPic6 from '~/assets/jpg/pools/1801_6.jpg';
import PoolPic7 from '~/assets/jpg/pools/1801_7.jpg';
import orbita from '~/assets/jpg/pools/pool_orbita.jpg';

import Shedule from '~/views/Shedule/Shedule.vue';
import { shedule } from '~/static/js/sheduleZelenograd.js';

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
    components: { PoolStartBlock, AnotherPools, SignNow, PoolsFeatures, Shedule, ModalBlackFriday },
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
            isFridayModalOpen: false,
            shedule,
        };
    },
    methods: {
        onCloseModal() {
            this.isFridayModalOpen = false;
        },
    },
    mounted() {
        setTimeout(() => {
            this.isFridayModalOpen = true;
        }, 7000);
    },
};
</script>
