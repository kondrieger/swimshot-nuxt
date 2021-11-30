<template>
    <div>
        <Header />
        <main>
            <Nuxt />
        </main>
        <a class="phone-wrap" href="tel:+79771885559" v-if="isTablet"><Phone class="phone" /></a>
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
        this.checkScroll();
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 1000);
        });

        window.document.body.onclick = () => {
            this.checkScroll();
        };
    },

    methods: {
        checkScroll() {
            const url = document.URL;
            const address = url.substr(0, url.indexOf('#'));
            const anchor = url.substr(url.indexOf('#') + 1);
            const elem = document.getElementById(anchor);

            if (anchor.length > 1 && !!elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, null, address);
            }
        },
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
