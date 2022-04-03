<template>
    <div>
        <SignNow />
        <PoolStartBlock
            title="Бассейн Swim Shot в Южном Бутово"
            address="Москва, ул. Поляны, 35"
            :photosArr="poolsPicArr"
        />
        <PoolTabs :littlePool="littlePool" :bigPool="bigPool" bigActive />

        <div class="container" data-aos="fade-right" data-aos-once="true">
            <div class="pools-info">
                <p class="pools-info__text">
                    Бассейн в ФОК Южное Бутово находится в 500 метрах от станции метро
                    <strong>Улица Скобелевская</strong> на Бутовской линии метро.
                </p>
                <p class="pools-info__text">
                    В физкультурно-оздоровительном комплексе есть детский бассейн с глубиной <strong>0,6–0,9м</strong> и
                    взрослый бассейн глубиной <strong>0,9–1,8м</strong>.
                </p>
                <p class="pools-info__text">
                    Длина большого бассейна <strong>25м на 5 дорожек</strong>. Температура воды в большом бассейне
                    <strong>26–28° C</strong>, в маленьком <strong>30–32° C</strong>.
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
    </div>
</template>

<script>
/* eslint-disable*/
import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import PoolTabs from '~/views/PoolTabs/PoolTabs.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';

import ph1801 from '~/assets/jpg/pools/1801.jpg';

import PoolPic1 from '~/assets/jpg/pools/pool_butovo.jpg';
import PoolPic2 from '~/assets/jpg/pools/pool_butovo_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/pool_butovo_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/pool_butovo_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/pool_butovo_5.jpg';

import Shedule from '~/views/Shedule/Shedule.vue';
import { shedule } from '~/static/js/sheduleButovo.js';

const poolsPicArr = [PoolPic1, PoolPic2, PoolPic3, PoolPic4, PoolPic5];

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
        text: 'Дети 3-7 лет',
    },
    {
        title: 'Стоимость групповых',
        text: 'от 1000 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 1800 за занятие',
    },
    {
        title: 'Глубина',
        text: '0,6-0,9 метра',
    },
    {
        title: 'Длина',
        text: '13,5 метров',
    },
    {
        title: 'Количество дорожек',
        text: '1',
    },
    {
        title: 'Температура воды',
        text: '31 градусов',
    },
];

const bigPool = [
    {
        title: 'Для кого?',
        text: 'дети с 7 лет и взрослые',
    },
    {
        title: 'Стоимость групповых',
        text: 'от 900 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 1800 за занятие',
    },
    {
        title: 'Глубина',
        text: '1,9 метра',
    },
    {
        title: 'Длина',
        text: '25 метров',
    },
    {
        title: 'Количество дорожек',
        text: '5',
    },
    {
        title: 'Температура воды',
        text: '28 градусов',
    },
];

export default {
    name: 'Butovo',
    components: { PoolStartBlock, PoolTabs, AnotherPools, SignNow, Shedule },
    head() {
        return {
            title: 'Swim Shot — Бассейн в Южном Бутово',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Южном Бутово рядом со станцией метро Скобелевская на Бутовской линии. В бассейн Южного Бутово можно приобрести абоненмент для свободного плавания, груповых или индивидуальных занятий с теренером.',
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        'Школа плавания Бутово, Обучение плаванию Бутово, Детская школа плавания Бутово, Школа плавания для детей Бутово, Школа плавания для взрослых Бутово, Свободное плавание Бутово, Бассейн Бутово, Абонемент бассейн Бутово, Отзывы бассейн Бутово, Абонемент плавание Бутово, Цена бассейн Бутово, Стоимость бассейн Бутово, Расписание бассейн Бутово',
                },
            ],
        };
    },
    data() {
        return {
            poolsArr,
            poolsPicArr,
            littlePool,
            bigPool,
            shedule,
        };
    },
    mounted() {
        setTimeout(() => {
            $('#school').val('16356');
            $('#school').change();
        }, 1000);
    },
};
</script>
