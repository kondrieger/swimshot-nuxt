<template>
    <div class="container features">
        <h2 class="media__title">Наслаждайся плаванием в <span class="blue">Swim Shot</span></h2>
        <h3 class="media__text">
            Присоединяйся к группам в новом учебном году 2022/2023!<br />
            Научим <span class="blue">кайфовать</span> от воды и <span class="blue">получать удовольствие</span> во
            время плавания
        </h3>
        <swiper ref="mySwiper" class="" :options="swiperOptions">
            <swiper-slide v-for="(feature, index) in featuresArr" :key="index">
                <div
                    data-aos="zoom-in"
                    :data-aos-offset="25 + index * 25"
                    data-aos-once="true"
                    class="features__list-item"
                >
                    <Discount v-if="index === 0" class="features__list-item-img" />
                    <Medal v-if="index === 1" class="features__list-item-img" />
                    <Gift v-if="index === 2" class="features__list-item-img" />
                    <Clock v-if="index === 3" class="features__list-item-img" />
                    <span :v-html="feature.pic"></span>
                    <p class="features__list-item-title">
                        {{ feature.title }}
                    </p>
                    <p class="features__list-item-text">
                        {{ feature.text }}
                    </p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import Clock from '~/assets/svg/clock.svg';
import Discount from '~/assets/svg/discount.svg';
import Gift from '~/assets/svg/gift.svg';
import Medal from '~/assets/svg/medal.svg';
import 'swiper/css/swiper.css';
import './styles.css';

export default {
    name: 'Features',
    components: {
        Swiper,
        SwiperSlide,
        Clock,
        Discount,
        Gift,
        Medal,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            Discount,
            featuresArr: [
                {
                    title: 'Пробное занятие всего за 300 рублей',
                    text: 'За эту стоимость ты или твой ребенок можете прочувствовать всю прелесть бассейна и школы плавания Swim Shot, после чего принять решение о покупке абонемента',
                },
                {
                    title: 'Тебя обучают кандидаты и мастера спорта',
                    text: 'Раз в три месяца каждый тренер школы плавания сдает экзамены по нескольким направлениям, по итогам которых формируется план обучения для всей команды Swim Shot',
                },
                {
                    title: 'Приятный\nбонус',
                    text: 'После каждой тренировки ученик получает вкусную и гипоаллергенную награду за выполненную работу',
                },
                {
                    title: 'Удобное место и время',
                    text: 'Мы проводим уроки в нескольких бассейнах, выбирай наиболее подходящее место и расписание для себя и ребенка',
                },
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
};
</script>
