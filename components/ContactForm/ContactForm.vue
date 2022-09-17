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
                </div>
            </div>
            <p class="contact-form__contacts-item contact-form__contacts-item--wide contact-form__contacts-item--text">
                Оставляй заявку прямо на сайте и мы сами тебе позвоним
            </p>
        </div>

        <div class="container contact-form">
            <div id="schoolRequestFormElement"></div>
            <iframe
                id="iframe"
                class="we-fit-iframe iframe"
                src="https://cloud.1c.fitness/api/hs/api/lead/?apikey=07914eda-27af-11ed-bb82-00505683b2c0&amp;formid=0a8c30b8-1cd4-11ed-4681-00505683b2c0"
                >Ваш браузер не поддерживает плавающие фреймы!</iframe
            >
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import bgPic from '~/assets/jpg/things_bg.jpg';
import $ from 'jquery';
import Vk from '~/assets/svg/vk.svg';
import Instagram from '~/assets/svg/instagram.svg';
import './styles.css';

export default {
    name: 'ContactForm',
    components: { Vk, Instagram },
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
    mounted() {
        setTimeout(() => {
            $('#contacts, #iframe').prependTo($('#schoolRequestformDiv'));
            $('.form').hide();
        }, 0);
    },
};
</script>
