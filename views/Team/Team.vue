<template>
    <div class="container team">
        <h2 class="text-header" data-aos="fade-right">Наши <span class="blue">тренеры</span></h2>

        <h3 class="text-subheader" data-aos="fade-right">
            Каждый сотрудник <span class="blue">Swim Shot</span> делает все, чтобы ты получал максимальное наслаждение
            от плавания с пользой для здоровья и прогрессом. Тренеры регулярно обучаются как организованно, так и
            самостоятельно, а некоторые даже продолжают плавать, чтобы сначала опробовать на себе новые методы и
            упражнения, а потом внедрять их в тренировочный процесс <span id="team"></span>
        </h3>

        <swiper data-aos="fade-up" ref="teamSwiper" :options="swiperOptions">
            <swiper-slide v-for="(man, index) in teamArr" :key="index">
                <div class="team__list-item">
                    <div style="width: 100%">
                        <a :href="`https://instagram.com/${man.inst}`" target="_blank" class="team__list-item-img-wrap">
                            <img :src="man.photo" class="team__list-item-img" alt="Swim shot тренеры" />

                            <div class="team__list-item-social">
                                <img
                                    class="social-item-img social-item-img--image"
                                    :src="require('~/assets/swimshot_header_logo.jpg')"
                                    alt="Swim shot логотип"
                                />
                            </div>

                            <span v-if="man.founder" class="card-badge">основатель</span>
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

                    <div v-if="!man.unavailable" @click="onModalOpen(man.name)" style="width: 100%">
                        <VButton text="Записаться" wide />
                    </div>
                </div>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

import VButton from '~/components/VButton/VButton.vue';

import 'swiper/css/swiper.css';
import './styles.css';

import Instagram from '~/assets/svg/instagram.svg';

import davydov from '~/assets/jpg/team/davydov.jpg';
import astapov from '~/assets/jpg/team/astapov.jpg';
import kasandra from '~/assets/jpg/team/kasandra.jpg';
import druzhinin from '~/assets/jpg/team/druzhinin.jpg';
import georgieva from '~/assets/jpg/team/georgieva.jpg';
import timofeeva from '~/assets/jpg/team/timofeeva.jpg';
import beskrovnaya from '~/assets/jpg/team/beskrovnaya.jpg';

const teamArr = [
    {
        photo: davydov,
        name: 'Александр Давыдов',
        desc: [
            'Сооснователь школы плавания Swim Shot',
            'Мастер спорта РФ по плаванию',
            'Призер первенства России по плаванию на открытой воде',
            'Пятикратный рекордсмен Зеленограда',
            'Комментатор всероссийских соревнований',
            'Опыт тренерской деятельности пять лет',
        ],
        founder: true,
        unavailable: true,
        inst: 'davydov_alex98',
    },
    {
        photo: astapov,
        name: 'Александр Астапов',
        desc: [
            'Сооснователь школы плавания Swim Shot',
            'Призер первенства Европы, чемпионатов и первенств России по плаванию на открытой воде',
            'Мастер спорта России по плаванию',
            'Соавтор методики обучения школы плавания Swim Shot',
            'Опыт работы с детьми и взрослыми пять лет',
        ],
        founder: true,
        unavailable: true,
        inst: 'a_astapov',
    },
    {
        photo: kasandra,
        name: 'Сергей Касандра',
        desc: [
            'Сооснователь школы плавания Swim Shot',
            'Старший тренер школы плавания Swim Shot',
            'Кандидат в мастера спорта России по плаванию',
            'Тренер спортгрупп',
            'Победитель и призер чемпионатов Зеленограда',
            'Опыт работы тренером семь лет',
        ],
        founder: true,
        inst: 'bacford',
    },
    {
        photo: druzhinin,
        name: 'Илья Дружинин',
        desc: [
            'Участник двух олимпийских игр Рио-2016 и Токио-2021',
            'Многократный чемпион России на 800 и 1500 вольным стилем',
            'Мастер спорта международного класса',
            'Сертифицированный тренер по плаванию',
            'Высшее образование по направлению физическая культура',
        ],
        inst: 'druzhban_',
    },
    {
        photo: georgieva,
        name: 'Александра Георгиева',
        desc: [
            'Кандидат в мастера спорта РФ',
            'Сертифицированный тренер по плаванию',
            'Призер первенства России',
            'Победитель и призер Кубка СНГ',
            'Опыт тренерской деятельности три года',
        ],
        inst: '_alexandrina__',
    },
    {
        photo: timofeeva,
        name: 'Дарья Тимофеева',
        desc: [
            'Мастер спорта России по плаванию',
            'Тренер основных спортгрупп Swim Shot',
            'Сертифицированный тренер по плаванию',
            'Многократный призер чемпионатов и первенств Московской области',
            'Участница всероссийских соревнований',
            'Тренерский стаж два года',
        ],
        inst: '_daxaaa',
    },
    {
        photo: beskrovnaya,
        name: 'Любовь Бескровная',
        desc: [
            'Высшее физкультурное образование (МГАФК)',
            'Сертифицированный тренер по плаванию',
            'Сертифицированный тренер по направлению «Здоровая спина»',
            'Тренер Swim Shot по аквааэробике',
            'Тренерский стаж четыре года',
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
        VButton,
    },
    props: {
        currentTrainer: {
            type: String,
            default: null,
        },
    },
    directives: {
        swiper: directive,
    },

    data() {
        return {
            teamArr,
            swiperOptions: {
                slidesPerView: 3,
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
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },

        swiper() {
            return this.$refs.teamSwiper.$swiper;
        },
    },

    methods: {
        onModalOpen(name) {
            this.$emit('modalOpen', name);
        },
    },

    watch: {
        currentTrainer(val) {
            const trainer = this.teamArr.find((t) => {
                const name = t.name.split(' ')[0];

                return name === val;
            });

            const summ = this.swiper.loopedSlides > 1 ? 2 : 1;
            const index = this.teamArr.indexOf(trainer) + summ;

            this.swiper.slideTo(index);
        },
    },
};
</script>
