<template>
    <div class="container team" id="team">
        <h2 data-aos="fade-right" data-aos-once="true">Наши <span class="blue">тренеры</span></h2>
        <swiper data-aos="fade-up" data-aos-once="true" ref="mySwiper" class="" :options="swiperOptions">
            <swiper-slide v-for="(man, index) in teamArr" :key="index">
                <div class="team__list-item">
                    <a :href="`https://instagram.com/${man.inst}`" target="_blank" class="team__list-item-img-wrap">
                        <img :src="man.photo" class="team__list-item-img" alt="Swim shot тренеры" />
                        <div class="team__list-item-social">
                            <Instagram class="header__links-social-item-img" />
                        </div>
                    </a>
                    <div class="team__list-item-text">
                        <p class="team__list-item-name">
                            {{ man.name }}
                        </p>
                        <ul class="team__list-item-desc">
                            <li v-for="(item, index) in man.desc" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import './styles.css';

import Instagram from '~/assets/svg/instagram.svg';

import davydov from '~/assets/jpg/team/davydov.jpg';
import astapov from '~/assets/jpg/team/astapov.jpg';
import kasandra from '~/assets/jpg/team/kasandra.jpg';
import druzhinin from '~/assets/jpg/team/druzhinin.jpg';
import georgieva from '~/assets/jpg/team/georgieva.jpg';
import nikolskaya from '~/assets/jpg/team/nikolskaya.jpg';
import vanushechkin from '~/assets/jpg/team/vanushechkin.jpg';
import timofeeva from '~/assets/jpg/team/timofeeva.jpg';
import matveeva from '~/assets/jpg/team/matveeva.jpg';
import grishin from '~/assets/jpg/team/grishin.jpg';
import beskrovnaya from '~/assets/jpg/team/beskrovnaya.jpg';

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
    {
        photo: nikolskaya,
        name: 'Анастасия Никольская',
        desc: [
            'Победитель Кубка Зеленограда по плаванию',
            'Сертифицированный тренер по раннему плаванию детей с трех лет',
            'Студентка университета РГУФКСМиТ. Профиль — спортивная подготовка в плавании',
            'Опыт работы тренером четыре года',
        ],
        inst: 'nasty9887',
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
    // {
    //     photo: matveeva,
    //     name: 'Екатерина Матвеева',
    //     desc: [
    //         'Высшее образование по профилю физическая культура',
    //         'Экс-учительница физкультуры',
    //         'Опыт тренерской деятельности один год',
    //     ],
    //     inst: 'katunia_matveeva',
    // },
    {
        photo: grishin,
        name: 'Егор Гришин',
        desc: [
            'Кандидат в мастера спорта по плаванию',
            'Многократный победитель и призер чемпионатов и кубков Калужской области',
            'Тренерский стаж один год',
        ],
        inst: 'e.grishin_',
    },
    {
        photo: beskrovnaya,
        name: 'Любовь Бескровная',
        desc: [
            'Высшее педагогическое образование',
            'Сертифицированный тренер по направлению «Здоровая спина»',
            'Тренерский стаж три года',
        ],
        inst: 'liubov.beskrovnaia',
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
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1150: {
                        slidesPerView: 3,
                    },
                    780: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                },
            },
        };
    },
};
</script>
