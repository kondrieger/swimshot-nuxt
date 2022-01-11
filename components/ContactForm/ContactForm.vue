<template>
    <div :style="{ 'background-image': 'url(' + bgPic + ')' }" class="contact-form__bg" id="contact-form">
        <div id="contacts" class="contact-form__contacts">
            <div class="contact-form__contacts-item">
                <p class="contact-form__contacts-item-title">Звони нам</p>
                <a class="contact-form__contacts-item-content" href="tel:+74994305595">+7 (499) 430-55-95</a>
            </div>
            <div class="contact-form__contacts-item">
                <p class="contact-form__contacts-item-title">Пиши на почту</p>
                <a class="contact-form__contacts-item-content" href="mailto:swim_shot@mail.ru">swim_shot@mail.ru</a>
            </div>
            <div class="contact-form__contacts-item contact-form__contacts-item--wide">
                <p class="contact-form__contacts-item-title">Пиши в соц. сетях</p>
                <div class="contact-form__contacts-item-content">
                    <a href="https://www.instagram.com/swim_shot/" target="_blank" class="header__links-social-item">
                        <Instagram class="header__links-social-item-img" />
                    </a>

                    <a href="https://vk.com/swim_shot" target="_blank" class="header__links-social-item">
                        <Vk class="header__links-social-item-img" />
                    </a>

                    <a href="https://vm.tiktok.com/ZSektyPHj" target="_blank" class="header__links-social-item">
                        <TikTok class="header__links-social-item-img" />
                    </a>
                </div>
            </div>
            <p class="contact-form__contacts-item contact-form__contacts-item--wide contact-form__contacts-item--text">
                Оставляй заявку прямо на сайте и мы сами тебе позвоним
            </p>
        </div>

        <div class="container contact-form">
            <div id="schoolRequestFormElement"></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import bgPic from '~/assets/jpg/things_bg.jpg';
import $ from 'jquery';
import Vk from '~/assets/svg/vk.svg';
import TikTok from '~/assets/svg/tiktok.svg';
import Instagram from '~/assets/svg/instagram.svg';
import './styles.css';

export default {
    name: 'ContactForm',
    components: { Vk, TikTok, Instagram },
    data() {
        return {
            bgPic,
        };
    },
    head() {
        return {
            script: [
                {
                    hid: 'form',
                    src: 'https://static.education-erp.com/all.js?schoolTypeId=139&showMap=true',
                    defer: true,
                    id: 'schoolRequestScript',
                    callback: () => {
                        console.log('Форма загружена');
                    },
                },
            ],
        };
    },
    computed: {
        checkSuccess() {
            const success = $('.success-message');
            return success.css('display') === 'block';
        },
    },
    methods: {
        sendLead() {
            this.$fb.track('Lead');
            console.log(this.$fb);
        },
    },
    mounted() {
        const self = this;
        setTimeout(() => {
            $('#contacts').prependTo($('#schoolRequestformDiv'));
        }, 0);

        $('input[type="submit"]').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#contact-form').offset().top,
            });

            let checkSuccess = setInterval(() => {
                const success = $('.success-message');

                if (success.css('display') === 'block') {
                    clearInterval(checkSuccess);

                    if (!window.dataLayer.find((item) => item.event === 'form')) {
                        window.dataLayer.push({
                            event: 'form',
                        });
                        self.sendLead();
                        console.log('Заявка отправлена');
                    }
                }
            }, 1000);
        });
    },
};
</script>
