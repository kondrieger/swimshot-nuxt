<template>
    <div class="container features">
        <h2 class="text-header" data-aos="fade-right">Наслаждайся плаванием в <span class="blue">Swim Shot</span></h2>
        <h3 class="text-subheader" data-aos="fade-right">
            Присоединяйся к группам в сезоне 2022/2023!<br />
            Научим <span class="blue">кайфовать</span> от воды и <span class="blue">получать удовольствие</span> во
            время плавания<br />
            с пользой для здоровья и прогрессом
        </h3>
        <swiper data-aos="fade-up" ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(feature, index) in featuresArr" :key="index">
                <div class="features__list-item">
                    <div>
                        <Discount v-if="index === 0" class="features__list-item-img" />
                        <House v-if="index === 1" class="features__list-item-img" />
                        <Medal v-if="index === 2" class="features__list-item-img" />
                        <GrandDad v-if="index === 3" class="features__list-item-img" />
                        <Cup v-if="index === 4" class="features__list-item-img" />
                        <span :v-html="feature.pic"></span>
                        <p class="features__list-item-title">
                            {{ feature.title }}
                        </p>
                        <p class="features__list-item-text">
                            {{ feature.text }}
                        </p>
                    </div>

                    <div class="features__list-item-btn" v-if="index === 0" @click="onModalOpen">
                        <VButton wide text="Записаться" />
                    </div>

                    <nuxt-link v-if="index === 1" class="btn btn--wide" to="/zelenograd">Узнать</nuxt-link>
                    <a v-if="index === 2" class="btn btn--wide js-link" href="#team">Познакомиться</a>
                    <a v-if="index === 4" class="btn btn--wide js-link" href="#photos">Смотреть фото</a>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import VButton from '~/components/VButton/VButton.vue';

import Discount from '~/assets/svg/discount.svg';
import Gift from '~/assets/svg/gift.svg';
import Medal from '~/assets/svg/medal.svg';
import House from '~/assets/svg/house.svg';
import Cup from '~/assets/svg/cup.svg';
import GrandDad from '~/assets/svg/granddad.svg';

import 'swiper/css/swiper.css';
import './styles.css';

export default {
    name: 'Features',
    components: {
        Swiper,
        SwiperSlide,
        Discount,
        Gift,
        Medal,
        House,
        Cup,
        GrandDad,
        VButton,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            Discount,
            featuresArr: [
                {
                    title: 'Пробное занятие всего за 500₽',
                    text: 'За эту стоимость ты или твой ребенок прочувствуете прелесть бассейна и школы плавания Swim Shot и поймете, нужен ли вам абонемент',
                },
                {
                    title: 'Собственный бассейн',
                    text: 'Ежедневные групповые и персональные тренировки в удобное для тебя время, а также сеансы свободного плавания (без тренера) каждый день без выходных',
                },
                {
                    title: 'Тебя обучают кандидаты и мастера спорта',
                    text: 'Раз в три месяца каждый тренер школы плавания сдает экзамены по нескольким направлениям, по итогам которых формируется план обучения для всей команды Swim Shot',
                },
                {
                    title: 'Нам неважно, сколько тебе лет',
                    text: 'Мы проводим тренировки для детей с двух лет и взрослых любого возраста и уровня подготовки, и если ты это читаешь, то точно нам подходишь :)',
                },
                {
                    title: 'Сборы и соревнования',
                    text: 'Проводим регулярные спортивные сборы в разных городах, соревнования для всех желающих и ежемесячные зачеты для отслеживания прогресса',
                },
                // {
                //     title: 'Удобное место и время',
                //     text: 'Мы проводим уроки в нескольких бассейнах, выбирай наиболее подходящее место и расписание для себя и ребенка',
                // },
            ],
            swiperOptions: {
                slidesPerView: 'auto',
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
            },
        };
    },

    methods: {
        onModalOpen() {
            this.$emit('modalOpen');
        },
    },
};
</script>
