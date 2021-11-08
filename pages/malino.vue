<template>
    <div>
        <SignNow />
        <PoolStartBlock title="СК Малино" address="Зеленоград, корпус 860" :photosArr="poolsPicArr" />
        <div class="bg-grey">
            <PoolsFeatures :PoolsFeatures="poolFeatures" alone />
        </div>

        <div class="container" data-aos="fade-right" data-aos-once="true">
            <div class="pools-info">
                <p class="pools-info__text">
                    В бассейне СК Малино проводятся только групповые занятия для <b>детей</b>.
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
import AnotherPools from '~/views/AnotherPools/AnotherPools.vue';
import SignNow from '~/components/SignNow/SignNow.vue';
import PoolsFeatures from '~/components/PoolsFeatures/PoolsFeatures.vue';

import mapMark from '~/assets/mapMark.png';
import orbita from '~/assets/jpg/pools/pool_orbita.jpg';
import butovo from '~/assets/jpg/pools/pool_butovo.jpg';
import PoolPic1 from '~/assets/jpg/pools/pool_malino.jpg';
import PoolPic2 from '~/assets/jpg/pools/pool_malino_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/pool_malino_3.jpg';

const poolsPicArr = [PoolPic1, PoolPic2, PoolPic3];

const poolsArr = [
    {
        title: 'ФОК Южное Бутово',
        subtitle: 'Москва',
        pic: butovo,
        href: '/butovo',
    },
    {
        title: 'СК Орбита',
        subtitle: 'Зеленоград',
        pic: orbita,
        href: '/orbita',
    },
];

const poolFeatures = [
    {
        title: 'Для кого?',
        text: 'дети 5-10 лет',
    },
    {
        title: 'Стоимость групповых',
        text: 'от 900 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: '—',
    },
    {
        title: 'Глубина',
        text: '1,6 метров',
    },
    {
        title: 'Длина',
        text: '16 метров',
    },
    {
        title: 'Количество дорожек',
        text: '3',
    },
    {
        title: 'Температура воды',
        text: '29 градусов',
    },
];

export default {
    components: { PoolStartBlock, AnotherPools, SignNow, PoolsFeatures },
    head() {
        return {
            title: 'Swim shot | Бассейн СК Малино',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Зеленограде. Спортивный комплекс Малино. Школа плавания для детей и взрослых Swim shot. Лучшие тренеры. Групповые занятия. Пробная тренировка со скидкой 75%',
                },
            ],
        };
    },
    data() {
        return {
            mapMark,
            poolsArr,
            poolsPicArr,
            poolFeatures,
        };
    },
};
</script>
