<template>
    <div>
        <div class="wrapper" data-aos="fade-up" data-aos-once="true">
            <div class="tab-wrapper">
                <ul class="tabs">
                    <li class="tab-link active" data-tab="1">Малый бассейн</li>
                    <li class="tab-link" data-tab="2">Большой бассейн</li>
                </ul>
            </div>
        </div>
        <div class="bg-grey" data-aos="fade-up" data-aos-once="true">
            <div class="wrapper">
                <div class="content-wrapper">
                    <div id="tab-1" class="tab-content active">
                        <PoolsFeatures :PoolsFeatures="littlePool" />
                    </div>

                    <div id="tab-2" class="tab-content">
                        <PoolsFeatures :PoolsFeatures="bigPool" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import './styles.css';

import PoolsFeatures from '~/components/PoolsFeatures/PoolsFeatures.vue';

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
        text: 'от 1500 за тренировку',
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
        text: 'от 1500 за тренировку',
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
    components: { PoolsFeatures },
    data() {
        return {
            littlePool,
            bigPool,
        };
    },
    mounted() {
        $('.tab-link').click(function () {
            var tabID = $(this).attr('data-tab');

            $(this).addClass('active').siblings().removeClass('active');

            $('#tab-' + tabID)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    },
};
</script>
