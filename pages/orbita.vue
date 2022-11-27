<template>
    <div>
        <SignNow />
        <PoolStartBlock title="СК Орбита" address="Зеленоград, ул. Озерная аллея, 6" :photosArr="poolsPicArr" />
        <PoolTabs :littlePool="littlePool" :bigPool="[]" littleActive data-aos="fade-up" />

        <div class="container" data-aos="fade-up">
            <div class="pools-info">
                <p class="pools-info__text">
                    В каждом из этих бассейнов можно проводить как персональные, так и групповые тренировки с
                    <b>детьми</b> и <b>взрослыми</b>.
                </p>
                <p class="pools-info__text">У здания есть <b>парковка</b>.</p>
                <p class="pools-info__text">
                    Подобрать время именно под твои нужды можно в
                    <a class="js-link" href="#contact-form">форме</a> ниже.
                </p>
            </div>
        </div>
        <div class="bg-grey">
            <AnotherPools :PoolsArr="poolsArr" data-aos="fade-up" />
        </div>
        <ModalBlackFriday :open="isFridayModalOpen" @closeModal="onCloseModal" />
    </div>
</template>

<script>
/* eslint-disable*/
import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import PoolTabs from '~/views/PoolTabs/PoolTabs.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import ModalBlackFriday from '~/components/Modal/BlackFriday.vue';

import ph1801 from '~/assets/jpg/pools/1801.jpg';
import PoolPic1 from '~/assets/jpg/pools/pool_orbita.jpg';
import PoolPic2 from '~/assets/jpg/pools/pool_orbita_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/pool_orbita_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/pool_orbita_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/pool_orbita_5.jpg';

const poolsPicArr = [PoolPic3, PoolPic4, PoolPic5];

const poolsArr = [
    {
        title: 'Бассейн Swim Shot',
        subtitle: 'Зеленоград',
        pic: ph1801,
        href: '/zelenograd',
    },
];

const littlePool = [
    {
        title: 'Для кого?',
        text: 'Дети 3-8 лет',
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

    components: { PoolStartBlock, PoolTabs, AnotherPools, SignNow, ModalBlackFriday },

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
            poolsArr,
            poolsPicArr,
            littlePool,
            isFridayModalOpen: false,
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
