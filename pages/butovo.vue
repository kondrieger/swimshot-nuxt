<template>
    <div>
        <SignNow />
        <PoolStartBlock title="ФОК Южное Бутово" address="Москва, ул. Поляны, 35" :photosArr="poolsPicArr" />
        <PoolTabs :littlePool="littlePool" :bigPool="bigPool" bigActive />

        <div class="container" data-aos="fade-right" data-aos-once="true">
            <div class="pools-info">
                <p class="pools-info__text">
                    В каждом из этих бассейнов можно проводить как персональные, так и групповые тренировки с
                    <b>детьми</b> и <b>взрослыми</b>.
                </p>
                <p class="pools-info__text">У здания есть <b>парковка</b>.</p>
                <p class="pools-info__text">В ФОК Бутово <b>справка обязательна</b> даже на пробную тренировку.</p>
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
import orbita from '~/assets/jpg/pools/pool_orbita.jpg';
import PoolPic1 from '~/assets/jpg/pools/pool_butovo.jpg';
import PoolPic2 from '~/assets/jpg/pools/pool_butovo_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/pool_butovo_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/pool_butovo_4.jpg';

const poolsPicArr = [PoolPic1, PoolPic2, PoolPic3, PoolPic4];

const poolsArr = [
    {
        title: 'СК Орбита',
        subtitle: 'Зеленоград',
        pic: orbita,
        href: '/orbita',
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
        text: 'Дети 3-7 лет',
    },
    {
        title: 'Стоимость групповых',
        text: 'от 1000 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 1500 за занятие',
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
        text: 'от 1500 за занятие',
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
    components: { PoolStartBlock, PoolTabs, AnotherPools, SignNow },
    head() {
        return {
            title: 'Swim shot | Бассейн ФОК Южное Бутово',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Москве. Физкультурно-оздоровительный комплекс Южное Бутово. Школа плавания для детей и взрослых Swim shot. Лучшие тренеры. Групповые и индивидуальные занятия. Пробная тренировка со скидкой 75%',
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
            $('#school').val('16356');
            $('#school').change();
        }, 2000);
    },
};
</script>
