<template>
    <div :style="{ 'background-image': 'url(' + bgPic + ')' }" class="contact-form__bg" id="contact-form">
        <div class="container contact-form__wrap">
            <form @submit.prevent="submit" class="contact-form">
                <div id="contacts" class="contact-form__contacts">
                    <div class="contact-form__contacts-item">
                        <p class="contact-form__contacts-item-title">Звони нам</p>
                        <a class="contact-form__contacts-item-content" href="tel:+74994305595">+7 (499) 430-55-95</a>
                    </div>
                    <div class="contact-form__contacts-item">
                        <p class="contact-form__contacts-item-title">Пиши на почту</p>
                        <a class="contact-form__contacts-item-content" href="mailto:swim_shot@mail.ru"
                            >swim_shot@mail.ru</a
                        >
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

                            <a
                                href="https://www.instagram.com/swim_shot/"
                                target="_blank"
                                class="header__links-social-item"
                            >
                                <Instagram class="header__links-social-item-img" />
                            </a>
                        </div>
                    </div>
                    <p
                        class="
                            contact-form__contacts-item
                            contact-form__contacts-item--wide
                            contact-form__contacts-item--text
                        "
                    >
                        Оставляй заявку на сайте, и мы сами тебе позвоним
                    </p>
                </div>

                <TextInput v-model="form.name" :error="nameError" placeholderText="Имя *" />

                <TextInput
                    v-model="form.phone"
                    :error="telError"
                    :tag="'input-masked'"
                    mask="+7 (###) ###-##-##"
                    type="phone"
                    placeholderText="Телефон *"
                />

                <TextInput v-model="form.email" :error="emailError" :placeholderText="'Email'" />

                <p class="contact-form__policy-text">
                    Нажимая на кнопку "Отправить", Вы даете согласие на обработку персональных данных и соглашаетесь с
                    <nuxt-link to="/policy" target="_blank"> политикой конфиденциальности</nuxt-link>
                </p>

                <VButton wide text="Отправить" />
            </form>

            <yandex-map
                class="contact-form__map"
                :settings="{
                    apiKey: '24493451-0d78-48ba-a1b8-259797024b9a',
                    lang: 'ru_RU',
                }"
                :coords="coordsCenter"
                :zoom="isTablet ? 12 : 13"
            >
                <ymap-marker :icon="markerIcon1801" :coords="coords1801" marker-id="1" hint-content="Бассейн Swim Shot">
                    <div class="another-pools__list-item-text" slot="balloon">
                        <nuxt-link to="/zelenograd" target="_blank">
                            <b>Бассейн Swim Shot</b>, Зеленоград, к1801
                        </nuxt-link>
                    </div>
                </ymap-marker>

                <ymap-marker :coords="coordsOrbita" marker-id="2" hint-content="СК Орбита">
                    <div class="another-pools__list-item-text" slot="balloon">
                        <nuxt-link to="/orbita" target="_blank">
                            <b>СК Орбита</b>, Зеленоград, ул. Озерная аллея, 6
                        </nuxt-link>
                    </div>
                </ymap-marker>
            </yandex-map>
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import bgPic from '~/assets/jpg/things_bg.jpg';
import './styles.css';
import validationMixin, { required, email, tel, nameAll } from '../../plugins/validation';
import TextInput from '~/components/TextInput/TextInput.vue';
import VButton from '~/components/VButton/VButton.vue';

import Vk from '~/assets/svg/vk.svg';
import Instagram from '~/assets/svg/instagram.svg';
import Telegram from '~/assets/svg/telegram.svg';
import Whatsapp from '~/assets/svg/whatsapp.svg';

import House from '~/assets/svg/house.svg';

export default {
    name: 'ContactForm',
    components: { Vk, Instagram, TextInput, VButton, Telegram, Whatsapp, House },
    mixins: [validationMixin],
    data() {
        return {
            bgPic,
            form: {
                name: null,
                phone: null,
                email: null,
            },

            coordsCenter: [55.98220773463946, 37.199245310702274],
            coords1801: [55.97779002199537, 37.162751976922856],
            coordsOrbita: [55.987888828917455, 37.22616932479378],

            markerIcon1801: {
                layout: 'default#image',
                imageHref: 'svg/house.svg',
                imageSize: [30, 30],
                imageOffset: [0, -18],
            },

            markerIconOrbita: {
                layout: 'default#image',
                imageHref: 'svg/house.svg',
                imageSize: [30, 30],
                imageOffset: [0, 0],
            },
        };
    },
    validations: {
        form: {
            name: {
                required,
                nameAll,
            },
            phone: {
                required,
                tel,
            },
            email: {
                email,
            },
        },
    },
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },

        nameError() {
            if (this.$v.form.name.$dirty) {
                if (!this.$v.form.name.required) return 'Укажите свое имя';
                if (!this.$v.form.name.nameAll) return 'Укажите корректное имя';
            }
            return '';
        },

        telError() {
            if (this.$v.form.phone.$dirty) {
                if (!this.$v.form.phone.required) return 'Укажите телефон';
                if (!this.$v.form.phone.tel) return 'Неверный формат телефона';
            }
            return '';
        },

        emailError() {
            if (this.$v.form.email.$dirty) {
                if (!this.$v.form.email.email) return 'Неверный формат Email';
            }
            return '';
        },
    },
    methods: {
        sendLead() {
            this.$fb.track('Lead');
        },

        submit() {
            this.$v.$touch();
            if (this.$v.invalid) return;

            fetch('https://cloud.1c.fitness/api/hs/lead/Webhook/6cdcce9e-6824-11ed-da8f-00505683b2c0/', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.form),
            }).then((resp) => {
                if (!window.dataLayer.find((item) => item.event === 'form')) {
                    window.dataLayer.push({
                        event: 'form',
                    });
                    this.sendLead();
                }
            });
        },
    },
};
</script>
