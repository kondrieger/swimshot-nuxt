<template>
    <div data-aos="fade-up" data-aos-once="true" v-if="!isTablet && isVisibleBtn" class="pools-info__sign">
        <p class="pools-info__sign-text">Запишись <span class="blue">сейчас</span></p>
        <a class="btn btn--wide btn--animated" href="#contact-form">ЗАПИСАТЬСЯ</a>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            isVisibleBtn: true,
        };
    },
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },
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
        window.onscroll = () => {
            this.isVisibleBtn = window.scrollY < $('#contact-form').offset().top - 400;
        };
    },
};
</script>

<style></style>
