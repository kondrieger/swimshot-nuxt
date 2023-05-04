<template>
    <div>
        <fixed-header :threshold="100">
            <div class="header navbar">
                <div v-if="!isTablet" class="container">
                    <div class="header__location">
                        <Popper
                            trigger="hover"
                            :options="{ placement: 'bottom', modifiers: { offset: { offset: '110%,5px' } } }"
                        >
                            <div class="popper header__location-content">
                                <p class="header__location-content-title">Ваш город:</p>

                                <div class="header__location-content-list">
                                    <div
                                        class="header__location-content-text"
                                        :class="[{ 'is-active': isMsk }]"
                                        @click="setLocation('mow')"
                                    >
                                        Москва, Зеленоград
                                    </div>

                                    <div
                                        class="header__location-content-text"
                                        :class="[{ 'is-active': isEkb }]"
                                        @click="setLocation('sve')"
                                    >
                                        Екатеринбург
                                    </div>

                                    <div
                                        class="header__location-content-text header__location-content-text--another"
                                        :class="[{ 'is-active': isAnother }]"
                                        @click="setLocation('another')"
                                    >
                                        Другой
                                    </div>
                                </div>
                            </div>

                            <div class="header__location-reference" slot="reference">
                                <img class="header__location-img" :src="mapMark" alt="Swim shot адрес" />

                                <div class="header__location-reference-text">{{ currentTitle }}</div>
                            </div>
                        </Popper>

                        <img :src="phrase" class="header__location-phrase" alt="Плыви быстрее пули" />
                    </div>
                </div>
                <div class="container header__wrap">
                    <nuxt-link v-if="!isTablet" to="/" class="header__logo-wrap-main">
                        <img
                            class="header__logo"
                            :src="require('~/assets/swimshot_header_logo.jpg')"
                            alt="Swim shot логотип"
                        />
                    </nuxt-link>

                    <client-only v-else>
                        <Slide :closeOnNavigation="true" noOverlay>
                            <nuxt-link
                                v-for="item in headerMenu"
                                :key="item.text"
                                class="header__links-link js-link"
                                :to="{ path: `${item.path || '/'}`, hash: `${item.hash}` }"
                            >
                                <p>{{ item.text }}</p>
                            </nuxt-link>

                            <div class="header__links-social">
                                <a
                                    v-for="link in currentLinksHeader"
                                    :key="link.id"
                                    :href="link.href"
                                    class="social-item social-item--modal"
                                    target="_blank"
                                >
                                    <Vk v-if="link.id === 'vk'" class="social-item-img" />
                                    <Whatsapp v-if="link.id === 'whatsapp'" class="social-item-img" />
                                    <Telegram v-if="link.id === 'telegram'" class="social-item-img" />
                                    <img
                                        v-if="link.id === 'instagram'"
                                        class="social-item-img social-item-img--image"
                                        :src="require('~/assets/swimshot_header_logo.jpg')"
                                        alt="Swim shot логотип"
                                    />
                                </a>
                            </div>
                        </Slide>
                    </client-only>

                    <div class="header__location" v-if="isTablet">
                        <Popper
                            trigger="click"
                            :options="{ placement: 'bottom', modifiers: { offset: { offset: '0,5px' } } }"
                        >
                            <div class="popper header__location-content">
                                <p class="header__location-content-title">Ваш город:</p>

                                <div class="header__location-content-list">
                                    <div
                                        class="header__location-content-text"
                                        :class="[{ 'is-active': isMsk }]"
                                        @click="setLocation('mow')"
                                    >
                                        Москва, Зеленоград
                                    </div>

                                    <div
                                        class="header__location-content-text"
                                        :class="[{ 'is-active': isEkb }]"
                                        @click="setLocation('sve')"
                                    >
                                        Екатеринбург
                                    </div>

                                    <div
                                        class="header__location-content-text header__location-content-text--another"
                                        :class="[{ 'is-active': isAnother }]"
                                        @click="setLocation('another')"
                                    >
                                        Другой
                                    </div>
                                </div>
                            </div>

                            <div class="header__location-reference" slot="reference">
                                <img class="header__location-img" :src="mapMark" alt="Swim shot адрес" />

                                <div class="header__location-reference-text">{{ currentTitle }}</div>
                            </div>
                        </Popper>
                    </div>

                    <div class="header__links" v-if="!isTablet">
                        <nuxt-link
                            v-for="item in headerMenu"
                            :key="item.text"
                            class="header__links-link js-link"
                            :to="{ path: `${item.path || '/'}`, hash: `${item.hash}` }"
                        >
                            <p>{{ item.text }}</p>
                        </nuxt-link>
                    </div>

                    <nuxt-link class="header__logo-wrap" v-if="isTablet" to="/">
                        <img
                            class="header__logo"
                            :src="require('~/assets/swimshot_header_logo.jpg')"
                            alt="Swim shot логотип"
                        />
                    </nuxt-link>

                    <div class="header__links header__links--media">
                        <div class="header__links-social">
                            <a
                                v-for="link in currentLinksHeader"
                                :key="link.id"
                                :href="link.href"
                                class="social-item"
                                target="_blank"
                            >
                                <Vk v-if="link.id === 'vk'" class="social-item-img" />
                                <Whatsapp v-if="link.id === 'whatsapp'" class="social-item-img" />
                                <Telegram v-if="link.id === 'telegram'" class="social-item-img" />
                                <img
                                    v-if="link.id === 'instagram'"
                                    class="social-item-img social-item-img--image"
                                    :src="require('~/assets/swimshot_header_logo.jpg')"
                                    alt="Swim shot логотип"
                                />
                            </a>
                        </div>

                        <div v-if="!isTablet" class="header__links-phone-wrap">
                            <a class="header__links-phone" :href="`tel:${currentContacts.tel}`">
                                {{ currentContacts.phone }}
                            </a>

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
import { headerMenu } from '~/static/js/links.js';
import locationMixin from '~/static/js/locationMixin.js';

import FixedHeader from 'vue-fixed-header';
import Popper from 'vue-popperjs';

import Vk from '~/assets/svg/vk.svg';
import Instagram from '~/assets/svg/instagram.svg';
import Zen from '~/assets/svg/zen.svg';
import Telegram from '~/assets/svg/telegram.svg';
import NewBadge from '~/assets/svg/new-badge.svg';
import Whatsapp from '~/assets/svg/whatsapp.svg';
import mapMark from '~/assets/mapMark.png';
import phrase from '~/assets/jpg/swimshot_subtext.jpg';
// import Login from '~/assets/svg/login.svg';

export default {
    name: 'a-header',
    mixins: [locationMixin],
    components: { FixedHeader, Vk, Instagram, Telegram, Zen, NewBadge, Whatsapp, Popper },

    data() {
        return {
            headerMenu,

            isBurgerOpen: false,
            modalOpen: false,
            mapMark,
            phrase,
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
