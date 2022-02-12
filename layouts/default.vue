<template>
    <div>
        <Header />
        <main>
            <Nuxt />
        </main>
        <a class="phone-wrap" href="tel:+74994305595" v-if="isTablet"><Phone class="phone" /></a>
        <ContactForm />
    </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';
import ContactForm from '~/components/ContactForm/ContactForm.vue';
import Phone from '~/assets/svg/phone.svg';
import $ from 'jquery';

export default {
    components: {
        Header,
        ContactForm,
        Phone,
    },
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 1000);
        });

        $('body').on('click', '.js-header-link', function () {
            //по href ищем элемент с нужным id и определяем его позицию
            const pos = $($(this).attr('href')?.replace('/', '')).offset();

            if (pos) {
                //скролим на эту позицию
                $('html, body').animate({ scrollTop: pos.top }, 300);

                //отключаем стандартный переход по ссылке
                location.hash && history.pushState({}, '', location.pathname);

                return false;
            }
        });
    },
};
</script>

<style>
.phone {
    fill: #fff;
    width: 30px;
    height: 30px;

    &-wrap {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: fixed;
        right: 50px;
        bottom: 45px;
        background-color: var(--cl-blue);
        z-index: 100;
        border: none;
        cursor: pointer;

        &:hover,
        &:active {
            background-color: var(--cl-dk-blue);
        }

        @media (--mobile-lg) {
            right: 25px;
            bottom: 20px;
        }
    }
}
</style>
