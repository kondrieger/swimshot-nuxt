<template>
    <div>
        <div class="container photos">
            <h2 data-aos="fade-right" data-aos-once="true">Галерея</h2>
            <div class="photos__wrap" data-aos="fade-up" data-aos-once="true">
                <div class="photos__swiper">
                    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <swiper-slide class="slide-4"></swiper-slide>
                        <swiper-slide class="slide-5"></swiper-slide>
                        <swiper-slide class="slide-6"></swiper-slide>
                        <swiper-slide class="slide-7"></swiper-slide>
                    </swiper>
                    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <swiper-slide class="slide-4"></swiper-slide>
                        <swiper-slide class="slide-5"></swiper-slide>
                        <swiper-slide class="slide-6"></swiper-slide>
                        <swiper-slide class="slide-7"></swiper-slide>
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

export default {
    name: 'Photos',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOptionTop: {
                loop: true,
                loopedSlides: 7, // looped slides should be the same
                slideToClickedSlide: true,
                spaceBetween: 30,
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 7, // looped slides should be the same
                spaceBetween: 30,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true,
            },
        };
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper;
            const swiperThumbs = this.$refs.swiperThumbs.$swiper;
            swiperTop.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiperTop;
        });
    },
};
</script>
