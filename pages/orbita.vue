<template>
    <div>
        <SignNow />
        <PoolStartBlock title="СК Орбита" address="Зеленоград, ул. Озерная аллея, 6" :photosArr="poolsPicArr" />
        <PoolTabs :littlePool="littlePool" :bigPool="bigPool" littleActive />

        <div class="container" data-aos="fade-right" data-aos-once="true">
            <div class="pools-info">
                <p class="pools-info__text">
                    В каждом из этих бассейнов можно проводить как персональные, так и групповые тренировки с
                    <b>детьми</b> и <b>взрослыми</b>.
                </p>
                <p class="pools-info__text">У здания есть <b>парковка</b>.</p>
                <p class="pools-info__text">
                    Подобрать время именно под твои нужды можно в <a href="#contact-form">форме</a> ниже.
                </p>
            </div>
        </div>
        <div class="bg-grey">
            <AnotherPools :PoolsArr="poolsArr" />
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import PoolStartBlock from '~/views/PoolStartBlock/PoolStartBlock.vue';
import PoolTabs from '~/views/PoolTabs/PoolTabs.vue';
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';

import malino from '~/assets/jpg/pools/pool_malino.jpg';
import butovo from '~/assets/jpg/pools/pool_butovo.jpg';
import ph1801 from '~/assets/jpg/pools/1801.jpg';
import PoolPic1 from '~/assets/jpg/pools/pool_orbita.jpg';
import PoolPic2 from '~/assets/jpg/pools/pool_orbita_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/pool_orbita_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/pool_orbita_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/pool_orbita_5.jpg';

const poolsPicArr = [PoolPic3, PoolPic4, PoolPic1, PoolPic2, PoolPic5];

const poolsArr = [
    {
        title: 'Бассейн Swim Shot',
        subtitle: 'Зеленоград',
        pic: ph1801,
        href: '/1801',
    },
    {
        title: 'ФОК Южное Бутово',
        subtitle: 'Москва',
        pic: butovo,
        href: '/butovo',
    },
    {
        title: 'СК Малино',
        subtitle: 'Зеленоград',
        pic: malino,
        href: '/malino',
    },
];

const littlePool = [
    {
        title: 'Для кого?',
        text: 'Дети 3-8 лет',
    },
    {
        title: 'Стоимость групповых',
        text: 'от 1200 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 1500 за занятие',
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

const bigPool = [
    {
        title: 'Для кого?',
        text: 'дети с 7 лет и взрослые',
    },
    {
        title: 'Стоимость групповых',
        text: 'от 1100 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 1500 за занятие',
    },
    {
        title: 'Глубина',
        text: '2,5 метра',
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
        text: '27 градусов',
    },
];

export default {
    name: 'Orbita',
    components: { PoolStartBlock, PoolTabs, AnotherPools, SignNow },
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
            bigPool,
        };
    },
    mounted() {
        setTimeout(() => {
            $('#school').val('16335');
            $('#school').change();
        }, 1000);
    },
};
</script>
