<template>
    <div>
        <fixed-header :threshold="100">
            <div class="header navbar">
                <div class="container header__wrap">
                    <a v-if="!isTablet" href="/">
                        <img
                            class="header__logo"
                            :src="require('~/assets/swimshot_header_logo.webp')"
                            alt="Swim shot логотип"
                    /></a>
                    <client-only v-else>
                        <Slide :closeOnNavigation="true" noOverlay>
                            <a class="header__links-link" href="/#pools-list"><p>Бассейны</p></a>
                            <a class="header__links-link" href="/#team"><p>Тренеры</p></a>
                            <a class="header__links-link" href="/#comments"><p>Отзывы</p></a>
                            <a class="header__links-link" href="/#media"><p>Медиа</p></a>
                            <a class="header__links-link" href="/#contact-form"><p>Контакты</p></a>
                            <div>
                                <a
                                    href="https://www.instagram.com/swim_shot"
                                    class="header__links-social-item header__links-social-item--modal"
                                    target="_blank"
                                >
                                    <img
                                        class="header__links-social-item-img"
                                        :src="require('~/assets/inst_logo.png')"
                                        alt="Instagram логотип"
                                    />
                                </a>

                                <a
                                    href="https://vk.com/swim_shot"
                                    class="header__links-social-item header__links-social-item--modal"
                                    target="_blank"
                                >
                                    <img
                                        class="header__links-social-item-img"
                                        :src="require('~/assets/vk_logo.png')"
                                        alt="Vk логотип"
                                    />
                                </a>
                            </div>
                        </Slide>
                    </client-only>

                    <div class="header__links" v-if="!isTablet">
                        <a class="header__links-link" href="/#pools-list"><p>Бассейны</p></a>
                        <a class="header__links-link" href="/#team"><p>Тренеры</p></a>
                        <a class="header__links-link" href="/#comments"><p>Отзывы</p></a>
                        <a class="header__links-link" href="/#media"><p>Медиа</p></a>
                        <a class="header__links-link" href="#contact-form"><p>Контакты</p></a>
                    </div>
                    <a class="header__logo-wrap" v-if="isTablet" href="/">
                        <img
                            class="header__logo"
                            :src="require('~/assets/swimshot_header_logo.webp')"
                            alt="Swim shot логотип"
                    /></a>
                    <div class="header__links header__links--media">
                        <div class="header__links-social">
                            <a
                                href="https://www.instagram.com/swim_shot"
                                target="_blank"
                                class="header__links-social-item"
                            >
                                <img
                                    class="header__links-social-item-img"
                                    :src="require('~/assets/inst_logo.png')"
                                    alt="Instagram логотип"
                                />
                            </a>

                            <a href="https://vk.com/swim_shot" target="_blank" class="header__links-social-item">
                                <img
                                    class="header__links-social-item-img"
                                    :src="require('~/assets/vk_logo.png')"
                                    alt="Vk логотип"
                                />
                            </a>
                        </div>
                        <div v-if="!isTablet" class="header__links-phone-wrap">
                            <a class="header__links-phone" href="tel:+79771885559">+7 (977) 188-55-59</a>
                            <a class="header__links-phone-text" href="#contact-form">Заказать обратный звонок</a>
                        </div>
                        <!-- <a class="header__links-login" href="https://my.swimshot.ru" title="Войти в личный кабинет"
                        ><Login class="header__links-login-icon"
                    /></a> -->
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
import $ from 'jquery';
// import Login from '~/assets/svg/login.svg';

export default {
    name: 'a-header',
    components: { FixedHeader },
    data() {
        return {
            isBurgerOpen: false,
        };
    },
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },
    },
    mounted() {
        $('a[href^="/"], a[href^="#"]').on('click', function () {
            let href = $(this).attr('href').replace('/', '');
            $('html, body').animate({
                scrollTop: $(href).offset().top,
            });
        });
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
