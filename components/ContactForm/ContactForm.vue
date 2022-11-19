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
                    <a href="https://vk.com/swim_shot" target="_blank" class="header__links-social-item">
                        <Vk class="header__links-social-item-img" />
                    </a>

                    <a href="https://wa.me/+79771885559" target="_blank" class="header__links-social-item">
                        <Whatsapp class="header__links-social-item-img" />
                    </a>

                    <a href="https://t.me/swim_shot" target="_blank" class="header__links-social-item">
                        <Telegram class="header__links-social-item-img" />
                    </a>

                    <a href="https://www.instagram.com/swim_shot/" target="_blank" class="header__links-social-item">
                        <Instagram class="header__links-social-item-img" />
                    </a>
                </div>
            </div>
            <p class="contact-form__contacts-item contact-form__contacts-item--wide contact-form__contacts-item--text">
                Оставляй заявку на сайте, и мы сами тебе позвоним
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
import bgPic from '~/assets/jpg/things_bg.jpg';

import Vk from '~/assets/svg/vk.svg';
import Instagram from '~/assets/svg/instagram.svg';
import Telegram from '~/assets/svg/telegram.svg';
import Whatsapp from '~/assets/svg/whatsapp.svg';

import './styles.css';

export default {
    name: 'ContactForm',
    components: { Vk, Instagram, Telegram, Whatsapp },
    data() {
        return {
            bgPic,
        };
    },
};
</script>
