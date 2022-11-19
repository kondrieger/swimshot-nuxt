<template>
    <div data-aos="fade-up" data-aos-once="true" v-if="!isTablet && isVisibleBtn" class="pools-info__sign">
        <p class="pools-info__sign-text">Запишись <span class="blue">сейчас</span></p>
        <a class="btn btn--wide btn--animated" href="#contact-form">ЗАПИСАТЬСЯ</a>
    </div>
</template>

<script>
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
        window.onscroll = () => {
            //по href ищем элемент с нужным id и определяем его позицию
            const linkingElement = document.querySelector('#contact-form')?.getBoundingClientRect();
            const elementTop = linkingElement?.top && window.scrollY + linkingElement?.top;

            this.isVisibleBtn = window.scrollY < elementTop - 400;
        };
    },
};
</script>

<style></style>
