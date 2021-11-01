<template>
    <div>
        <SignNow />
        <PoolStartBlock title="СК Орбита" address="Зеленоград, ул. Озерная аллея, 6" :photosArr="poolsPicArr" />
        <PoolTabs />

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

import mapMark from '~/assets/mapMark.png';
import malino from '~/assets/webp/pools/pool_malino_3.webp';
import PoolPic1 from '~/assets/webp/pools/pool_orbita.webp';
import PoolPic2 from '~/assets/webp/pools/pool_orbita_2.webp';
import PoolPic3 from '~/assets/webp/pools/pool_orbita_3.webp';
import PoolPic4 from '~/assets/webp/pools/pool_orbita_4.webp';
import PoolPic5 from '~/assets/webp/pools/pool_orbita_5.webp';

const poolsPicArr = [PoolPic3, PoolPic4, PoolPic1, PoolPic2, PoolPic5];

const poolsArr = [
    {
        title: 'СК Малино',
        subtitle: 'Зеленоград',
        pic: malino,
        href: '/malino',
    },
];

export default {
    name: 'Orbita',
    components: { PoolStartBlock, PoolTabs, AnotherPools, SignNow },
    head() {
        return {
            title: 'Swim shot | Бассейн СК Орбита',
        };
    },
    data() {
        return {
            mapMark,
            poolsArr,
            poolsPicArr,
        };
    },
};
</script>
