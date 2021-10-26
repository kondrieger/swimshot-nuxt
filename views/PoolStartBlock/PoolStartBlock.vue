<template>
    <div class="container pool-start-block">
        <h1 class="pool-start-block__title" data-aos="fade-right" data-aos-once="true">{{ title }}</h1>
        <a class="pool-start-block__address" href="#contact-form" data-aos="fade-right" data-aos-once="true"
            ><img :src="mapMark" alt="" />{{ address }}</a
        >
        <div class="pool-start-block__swiper" data-aos="fade-up" data-aos-once="true">
            <swiper class="swiper" :options="swiperOptions" ref="swiperTop">
                <swiper-slide
                    v-for="(photo, index) in photosArr"
                    :key="index"
                    :style="{ 'background-image': 'url(' + photo + ')' }"
                ></swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import './styles.css';

import mapMark from '~/assets/mapMark.png';

import $ from 'jquery';

export default {
    name: 'pool-start-block',
    props: {
        title: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        photosArr: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOptions: {
                slideToClickedSlide: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            mapMark,
        };
    },
    mounted() {
        $('a[href^="#"]').on('click', function (event) {
            event.preventDefault();
            let href = $(this).attr('href');

            $('html, body').animate({
                scrollTop: $(href).offset().top,
            });
            return false;
        });
    },
};
</script>
