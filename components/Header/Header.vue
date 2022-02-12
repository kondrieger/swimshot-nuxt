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
                            <nuxt-link
                                class="header__links-link js-header-link"
                                :to="{ path: '/', hash: '#pools-list' }"
                                ><p>Бассейны</p></nuxt-link
                            >
                            <nuxt-link class="header__links-link js-header-link" :to="{ path: '/', hash: '#team' }"
                                ><p>Тренеры</p></nuxt-link
                            >
                            <nuxt-link class="header__links-link js-header-link" :to="{ path: '/', hash: '#comments' }"
                                ><p>Отзывы</p></nuxt-link
                            >
                            <nuxt-link class="header__links-link js-header-link" :to="{ path: '/', hash: '#media' }"
                                ><p>Медиа</p></nuxt-link
                            >
                            <nuxt-link
                                class="header__links-link js-header-link"
                                :to="{ path: '/', hash: '#contact-form' }"
                                ><p>Контакты</p></nuxt-link
                            >
                            <div class="header__links-social">
                                <a
                                    href="https://www.instagram.com/swim_shot/"
                                    class="header__links-social-item header__links-social-item--modal"
                                    target="_blank"
                                >
                                    <Instagram class="header__links-social-item-img" />
                                </a>

                                <a
                                    href="https://vk.com/swim_shot"
                                    class="header__links-social-item header__links-social-item--modal"
                                    target="_blank"
                                >
                                    <Vk class="header__links-social-item-img" />
                                </a>

                                <a
                                    href="https://vm.tiktok.com/ZSektyPHj"
                                    class="
                                        header__links-social-item
                                        header__links-social-item--modal
                                        header__links-social-item--new
                                    "
                                    target="_blank"
                                >
                                    <TikTok class="header__links-social-item-img" />
                                    <!-- <NewBadge class="header__links-social-item-badge" /> -->
                                </a>
                            </div>
                        </Slide>
                    </client-only>

                    <div class="header__links" v-if="!isTablet">
                        <nuxt-link class="header__links-link js-header-link" :to="{ path: '/', hash: '#pools-list' }"
                            ><p>Бассейны</p></nuxt-link
                        >
                        <nuxt-link class="header__links-link js-header-link" :to="{ path: '/', hash: '#team' }"
                            ><p>Тренеры</p></nuxt-link
                        >
                        <nuxt-link class="header__links-link js-header-link" :to="{ path: '/', hash: '#comments' }"
                            ><p>Отзывы</p></nuxt-link
                        >
                        <nuxt-link class="header__links-link js-header-link" :to="{ path: '/', hash: '#media' }"
                            ><p>Медиа</p></nuxt-link
                        >
                        <nuxt-link class="header__links-link js-header-link" :to="{ path: '/', hash: '#contact-form' }"
                            ><p>Контакты</p></nuxt-link
                        >
                    </div>
                    <a class="header__logo-wrap" v-if="isTablet" href="/">
                        <img
                            class="header__logo"
                            :src="require('~/assets/swimshot_header_logo.jpg')"
                            alt="Swim shot логотип"
                    /></a>
                    <div class="header__links header__links--media">
                        <div class="header__links-social">
                            <a
                                href="https://www.instagram.com/swim_shot/"
                                target="_blank"
                                class="header__links-social-item"
                            >
                                <Instagram class="header__links-social-item-img" />
                            </a>

                            <a href="https://vk.com/swim_shot" target="_blank" class="header__links-social-item">
                                <Vk class="header__links-social-item-img" />
                            </a>

                            <a
                                href="https://vm.tiktok.com/ZSektyPHj"
                                target="_blank"
                                class="header__links-social-item header__links-social-item--new"
                            >
                                <TikTok class="header__links-social-item-img" />
                                <!-- <NewBadge class="header__links-social-item-badge" /> -->
                            </a>
                        </div>
                        <div v-if="!isTablet" class="header__links-phone-wrap">
                            <a class="header__links-phone" href="tel:+74994305595">+7 (499) 430-55-95</a>
                            <a class="header__links-phone-text" href="javascript:;" @click="showModal"
                                >Заказать обратный звонок</a
                            >
                        </div>
                        <!-- <a class="header__links-login" href="https://my.swimshot.ru" title="Войти в личный кабинет"
                        ><Login class="header__links-login-icon"
                    /></a> -->
                    </div>
                </div>
            </div>
        </fixed-header>
        <div class="sticky"></div>
        <Modal @closeModal="onModalClose" :open="modalOpen"></Modal>
    </div>
</template>

<script>
import './styles.css';
import FixedHeader from 'vue-fixed-header';
import Vk from '~/assets/svg/vk.svg';
import TikTok from '~/assets/svg/tiktok.svg';
import Instagram from '~/assets/svg/instagram.svg';
import NewBadge from '~/assets/svg/new-badge.svg';
// import Login from '~/assets/svg/login.svg';

import Modal from '~/components/Modal/Modal.vue';

export default {
    name: 'a-header',
    components: { FixedHeader, Vk, TikTok, Instagram, NewBadge, Modal },
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
        onModalClose(data) {
            this.modalOpen = data;
        },
        showModal() {
            this.modalOpen = true;
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
