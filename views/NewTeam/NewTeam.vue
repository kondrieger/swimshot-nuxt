<template>
    <div class="container new-team" id="team">
        <h2 data-aos="fade-right" data-aos-once="true">Наши <span class="blue">тренеры</span></h2>
        <div class="new-team__wrap">
            <div class="new-team__info">
                <div class="new-team__item-text">
                    <p class="new-team__item-name">
                        {{ activeTrainer.name }}
                    </p>
                    <ul class="new-team__item-desc">
                        <li v-for="(item, index) in activeTrainer.desc" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
            <swiper data-aos="fade-up" data-aos-once="true" ref="mySwiper" class="" :options="swiperOptions">
                <swiper-slide v-for="(man, index) in teamArr" :key="index">
                    <div class="new-team__item">
                        <img :src="man.photo" class="new-team__item-img" alt="Swim shot тренеры" />
                        <a :href="`https://www.instagram.com/${man.inst}/`" target="_blank">
                            <div class="new-team__item-social">
                                <Instagram class="header__links-social-item-img" />
                            </div>
                        </a>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import './styles.css';

import Instagram from '~/assets/svg/instagram.svg';

import davydov from '~/assets/jpg/new-team/davydov.jpg';
import astapov from '~/assets/jpg/new-team/astapov.jpg';
import kasandra from '~/assets/jpg/new-team/kasandra.jpg';
import druzhinin from '~/assets/jpg/new-team/druzhinin.jpg';
import georgieva from '~/assets/jpg/new-team/georgieva.jpg';
import vanushechkin from '~/assets/jpg/team/vanushechkin.jpg';
import timofeeva from '~/assets/jpg/new-team/timofeeva.jpg';
import matveeva from '~/assets/jpg/new-team/matveeva.jpg';

const teamArr = [
    {
        photo: davydov,
        name: 'Александр Давыдов',
        desc: [
            'Мастер спорта РФ по плаванию',
            'Призер первенства России по плаванию на открытой воде',
            'Пятикратный рекордсмен Зеленограда',
            'Сооснователь школы плавания Swim Shot',
            'Опыт тренерской деятельности четыре года',
        ],
        inst: 'davydov_alex98',
    },
    {
        photo: astapov,
        name: 'Александр Астапов',
        desc: [
            'Призер первенства Европы, чемпионатов и первенств России по плаванию на открытой воде',
            'Мастер спорта России по плаванию',
            'Сооснователь и старший тренер школы плавания Swim Shot',
            'Автор методики обучения школы плавания Swim Shot',
            'Опыт работы с детьми и взрослыми четыре года',
        ],
        inst: 'a_astapov',
    },
    {
        photo: kasandra,
        name: 'Сергей Касандра',
        desc: [
            'Кандидат в мастера спорта России по плаванию',
            'Призер и победитель чемпионатов Зеленограда',
            'Сертифицированный тренер по плаванию',
            'Сооснователь школы плавания Swim Shot',
            'Опыт работы тренером семь лет',
        ],
        inst: 'bacford',
    },
    {
        photo: druzhinin,
        name: 'Илья Дружинин',
        desc: [
            'Участник двух олимпийских игр Рио-2016 и Токио-2020',
            'Многократный чемпион России на 800 и 1500 вольным стилем',
            'Мастер спорта международного класса',
            'Управляющий московского филиала школы плавания Swim Shot',
            'Высшее образование по направлению физическая культура',
        ],
        inst: 'druzhban_',
    },
    {
        photo: georgieva,
        name: 'Александра Георгиева',
        desc: [
            'Кандидат в мастера спорта РФ',
            'Призер первенства России',
            'Победитель и призер Кубка СНГ',
            'Опыт тренерской деятельности два года',
        ],
        inst: '_alexandrina__',
    },
    // {
    //     photo: vanushechkin,
    //     name: 'Сергей Ванюшечкин',
    //     desc: [
    //         'Образование инструктора по плаванию детей',
    //         'Победитель чемпионата Москвы по акватлону',
    //         'Первый взрослый разряд по плаванию и подводному плаванию',
    //         'Сертифицированный специалист на курсах, связанных с тренерской деятельностью',
    //         'Опыт работы тренером более шести лет',
    //     ],
    //     inst: 'sergey_vanyushechkin',
    // },
    {
        photo: timofeeva,
        name: 'Дарья Тимофеева',
        desc: [
            'Мастер спорта России по плаванию',
            'Многократный призер чемпионатов и первенств Московской области',
            'Участница всероссийских соревнований',
            'Тренерский стаж один год',
        ],
        inst: '_daxaaa',
    },
    {
        photo: matveeva,
        name: 'Екатерина Матвеева',
        desc: [
            'Высшее образование по профилю физическая культура',
            'Экс-учительница физкультуры',
            'Опыт тренерской деятельности один год',
        ],
        inst: 'katunia_matveeva',
    },
];

export default {
    name: 'Team',
    components: {
        Swiper,
        SwiperSlide,
        Instagram,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            teamArr,
            swiperOptions: {
                spaceBetween: 30,
                slideToClickedSlide: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            activeTrainer: {},
        };
    },
    mounted() {
        this.$nextTick(() => {
            const mySwiper = this.$refs.mySwiper.$swiper;
            mySwiper.on('slideChange', () => {
                this.activeTrainer = teamArr[mySwiper.activeIndex];
            });
        });
    },
};
</script>
