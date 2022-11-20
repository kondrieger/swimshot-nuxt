<template>
    <div>
        <fixed-header :threshold="100">
            <div class="header navbar">
                <div class="container header__wrap">
                    <nuxt-link v-if="!isTablet" to="/">
                        <img
                            class="header__logo"
                            :src="require('~/assets/swimshot_header_logo.jpg')"
                            alt="Swim shot логотип"
                    /></nuxt-link>
                    <client-only v-else>
                        <Slide :closeOnNavigation="true" noOverlay>
                            <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#pools-list' }"
                                ><p>Бассейны</p></nuxt-link
                            >
                            <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#team' }"
                                ><p>Тренеры</p></nuxt-link
                            >
                            <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#comments' }"
                                ><p>Отзывы</p></nuxt-link
                            >
                            <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#media' }"
                                ><p>Медиа</p></nuxt-link
                            >
                            <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#contact-form' }"
                                ><p>Контакты</p></nuxt-link
                            >
                            <div class="header__links-social">
                                <a
                                    href="https://vk.com/swim_shot"
                                    class="header__links-social-item header__links-social-item--modal"
                                    target="_blank"
                                >
                                    <Vk class="header__links-social-item-img" />
                                </a>

                                <a
                                    href="https://wa.me/+79771885559"
                                    class="header__links-social-item header__links-social-item--modal"
                                    target="_blank"
                                >
                                    <Whatsapp class="header__links-social-item-img" />
                                </a>

                                <a
                                    href="https://t.me/swimshot/"
                                    class="header__links-social-item header__links-social-item--modal"
                                    target="_blank"
                                >
                                    <Telegram class="header__links-social-item-img" />
                                </a>

                                <a
                                    href="https://www.instagram.com/swim_shot/"
                                    class="header__links-social-item header__links-social-item--modal"
                                    target="_blank"
                                >
                                    <Instagram class="header__links-social-item-img" />
                                </a>
                            </div>
                        </Slide>
                    </client-only>

                    <div class="header__links" v-if="!isTablet">
                        <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#pools-list' }"
                            ><p>Бассейны</p></nuxt-link
                        >
                        <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#team' }"
                            ><p>Тренеры</p></nuxt-link
                        >
                        <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#comments' }"
                            ><p>Отзывы</p></nuxt-link
                        >
                        <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#media' }"
                            ><p>Медиа</p></nuxt-link
                        >
                        <nuxt-link class="header__links-link js-link" :to="{ path: '/', hash: '#contact-form' }"
                            ><p>Контакты</p></nuxt-link
                        >
                    </div>
                    <nuxt-link class="header__logo-wrap" v-if="isTablet" to="/">
                        <img
                            class="header__logo"
                            :src="require('~/assets/swimshot_header_logo.jpg')"
                            alt="Swim shot логотип"
                    /></nuxt-link>
                    <div class="header__links header__links--media">
                        <div class="header__links-social">
                            <a href="https://vk.com/swim_shot" target="_blank" class="header__links-social-item">
                                <Vk class="header__links-social-item-img" />
                            </a>

                            <a href="https://wa.me/+79771885559" target="_blank" class="header__links-social-item">
                                <Whatsapp class="header__links-social-item-img" />
                            </a>

                            <a href="https://t.me/swimshot/" target="_blank" class="header__links-social-item">
                                <Telegram class="header__links-social-item-img" />
                            </a>

                            <a
                                href="https://www.instagram.com/swim_shot/"
                                target="_blank"
                                class="header__links-social-item"
                            >
                                <Instagram class="header__links-social-item-img" />
                            </a>
                        </div>
                        <div v-if="!isTablet" class="header__links-phone-wrap">
                            <a class="header__links-phone" href="tel:+74994305595">+7 (499) 430-55-95</a>
                            <a class="header__links-phone-text" href="javascript:;" @click="onModalOpen"
                                >Заказать обратный звонок</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </fixed-header>
        <div class="sticky"></div>
    </div>
</template>

<script>
import './styles.css';
import FixedHeader from 'vue-fixed-header';
import Vk from '~/assets/svg/vk.svg';
import Instagram from '~/assets/svg/instagram.svg';
import Zen from '~/assets/svg/zen.svg';
import Telegram from '~/assets/svg/telegram.svg';
import NewBadge from '~/assets/svg/new-badge.svg';
import Whatsapp from '~/assets/svg/whatsapp.svg';
// import Login from '~/assets/svg/login.svg';

export default {
    name: 'a-header',
    components: { FixedHeader, Vk, Instagram, Telegram, Zen, NewBadge, Whatsapp },
    data() {
        return {
            isBurgerOpen: false,
            modalOpen: false,
        };
    },
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },
    },
    methods: {
        onModalOpen() {
            this.$emit('modalOpen');
        },
    },
};
</script>

<style>
.navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    & + .sticky {
        padding-top: 73px;
        @media (--tablet) {
            padding-top: 50px;
        }
    }
}
</style>
