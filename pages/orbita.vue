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
            <AnotherPools :PoolsArr="poolsArr" data-aos="fade-up" />
        </div>
        <ModalSocialSale :open="isModalSocialSaleOpen" @closeModal="onCloseModalSocialSale" />
    </div>
</template>

<script>
/* eslint-disable*/
import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import PoolTabs from '~/views/PoolTabs/PoolTabs.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import ScheduleLink from '~/components/ScheduleLink/ScheduleLink.vue';
import ModalSocialSale from '~/components/Modal/SocialSale.vue';

import ph1801 from '~/assets/jpg/pools/1801.jpg';
import ankor from '~/assets/jpg/pools/pool_ankor.jpg';
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
    {
        title: 'Бассейн Анкор',
        subtitle: 'Зеленоград',
        pic: ankor,
        href: '/ankor',
    },
];

const littlePool = [
    {
        title: 'Для кого?',
        text: 'Дети 2-6 лет',
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
        ModalSocialSale,
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
            poolsArr,
            poolsPicArr,
            littlePool,
            isModalSocialSaleOpen: false,
        };
    },

    methods: {
        onModalContactOpen(name = null) {
            this.$parent.$emit('modalOpen', name);
        },

        onOpenModalSocialSale() {
            this.isModalSocialSaleOpen = true;
        },

        onCloseModalSocialSale() {
            this.isModalSocialSaleOpen = false;
        },
    },

    mounted() {
        setTimeout(() => {
            this.onOpenModalSocialSale();
        }, 7000);
    },
};
</script>
