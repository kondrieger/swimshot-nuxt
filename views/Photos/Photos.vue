<template>
    <div>
        <div class="container photos" id="photos">
            <h2 class="text-header" data-aos="fade-right">Галерея</h2>

            <h3 class="text-subheader" data-aos="fade-right">
                Для учеников особенно важен настрой во время занятий.<br />Наши тренеры всегда готовы поддержать и
                вдохновить на новые успехи пловцов любого уровня.
            </h3>

            <p class="text-subheader text-subheader--note" data-aos="fade-right">
                * моменты с самого рождения Swim Shot до сегодняшнего дня
            </p>

            <div class="photos__wrap" data-aos="fade-up">
                <div class="photos__swiper">
                    <div id="images" style="display: none" v-viewer="viewerOptions">
                        <img v-for="(photo, index) in photosArr" :src="photo" :key="index" alt="" />
                    </div>
                    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop" @click="show">
                        <swiper-slide
                            v-for="(photo, index) in photosArr"
                            :key="index"
                            :style="{ 'background-image': 'url(' + photo + ')' }"
                        ></swiper-slide>
                    </swiper>
                    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                        <swiper-slide
                            v-for="(photo, index) in photosArr"
                            :key="index"
                            :style="{ 'background-image': 'url(' + photo + ')' }"
                        ></swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import './styles.css';

import 'viewerjs/dist/viewer.css';
import { directive as viewer } from 'v-viewer';

import photo_1 from '~/assets/jpg/photos/photo_1.jpg';
import photo_2 from '~/assets/jpg/photos/photo_2.jpg';
import photo_3 from '~/assets/jpg/photos/photo_3.jpg';
import photo_4 from '~/assets/jpg/photos/photo_4.jpg';
import photo_5 from '~/assets/jpg/photos/photo_5.jpg';
import photo_6 from '~/assets/jpg/photos/photo_6.jpg';
import photo_7 from '~/assets/jpg/photos/photo_7.jpg';
import photo_8 from '~/assets/jpg/photos/photo_8.jpg';
import photo_9 from '~/assets/jpg/photos/photo_9.jpg';
import photo_10 from '~/assets/jpg/photos/photo_10.jpg';
import photo_11 from '~/assets/jpg/photos/photo_11.jpg';
import photo_12 from '~/assets/jpg/photos/photo_12.jpg';

const photosArr = [
    photo_1,
    photo_2,
    photo_3,
    photo_4,
    photo_5,
    photo_6,
    photo_7,
    photo_8,
    photo_9,
    photo_10,
    photo_11,
    photo_12,
];

const viewerOptions = { movable: false, button: true, navbar: true, title: false, keyboard: true, scalable: false };

export default {
    name: 'Photos',
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        viewer: viewer(),
    },
    data() {
        return {
            swiperOptionTop: {
                loop: true,
                loopedSlides: 11, // looped slides should be the same
                slideToClickedSlide: true,
                spaceBetween: 30,
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 11, // looped slides should be the same
                spaceBetween: 30,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true,
            },
            photosArr,
            activeSlide: 0,
            viewerOptions,
        };
    },

    computed: {
        swiper() {
            return this.$refs.swiperTop.$swiper;
        },
    },
    methods: {
        show() {
            const viewer = this.$el.querySelector('#images').$viewer;
            viewer.view(this.activeSlide);
            viewer.show();
        },
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper;
            const swiperThumbs = this.$refs.swiperThumbs.$swiper;
            swiperTop.on('slideChange', () => {
                this.activeSlide = swiperTop.activeIndex - 11;
            });
            swiperTop.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiperTop;
        });
    },
};
</script>
