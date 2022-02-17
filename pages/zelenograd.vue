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
                    В бассейне Swim Shot 1801 проходят как групповые, так и персональные тренировки для <b>детей</b> от
                    шести лет и <b>взрослых</b>.
                </p>
                <p class="pools-info__text">
                    Можной прийти на <b>свободное посещение</b> и поплавать без тренера, самостоятельно.
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

import butovo from '~/assets/jpg/pools/pool_butovo.jpg';
import PoolPic1 from '~/assets/jpg/pools/1801.jpg';
import PoolPic2 from '~/assets/jpg/pools/1801_2.jpg';
import PoolPic3 from '~/assets/jpg/pools/1801_3.jpg';
import PoolPic4 from '~/assets/jpg/pools/1801_4.jpg';
import PoolPic5 from '~/assets/jpg/pools/1801_5.jpg';
import PoolPic6 from '~/assets/jpg/pools/1801_6.jpg';
import PoolPic7 from '~/assets/jpg/pools/1801_7.jpg';

const poolsPicArr = [PoolPic1, PoolPic2, PoolPic3, PoolPic4, PoolPic5, PoolPic6, PoolPic7];

const poolsArr = [
    {
        title: 'ФОК Южное Бутово',
        subtitle: 'Москва',
        pic: butovo,
        href: '/butovo',
    },
];

const poolFeatures = [
    {
        title: 'Стоимость групповых',
        text: 'от 700 за занятие',
    },
    {
        title: 'Стоимость персональных',
        text: 'от 1800 за занятие',
    },
    {
        title: 'Стоимость без тренера',
        text: 'от 200 за 45 минут',
    },
    {
        title: 'Для кого?',
        text: 'дети от 6 лет и взрослые',
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

export default {
    components: { PoolStartBlock, AnotherPools, SignNow, PoolsFeatures },
    head() {
        return {
            title: 'Swim shot | Бассейн Swim Shot',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Бассейн в Зеленограде. Корпус 1801. Школа плавания для детей и взрослых Swim shot. Лучшие тренеры. Групповые занятия. Пробная тренировка со скидкой 75%',
                },
            ],
        };
    },

    data() {
        return {
            poolsArr,
            poolsPicArr,
            poolFeatures,
        };
    },
    mounted() {
        setTimeout(() => {
            $('#school').val('16371');
            $('#school').change();
        }, 1000);
    },
};
</script>
