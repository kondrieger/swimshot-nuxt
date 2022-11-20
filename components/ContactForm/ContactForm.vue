<template>
    <div :style="{ 'background-image': 'url(' + bgPic + ')' }" class="contact-form__bg" id="contact-form">
        <div class="container contact-form__wrap" data-aos="fade-up">
            <div id="contacts" class="contact-form__contacts contact-form-border">
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
                        <a
                            href="https://vk.com/swim_shot"
                            target="_blank"
                            class="header__links-social-item contact-form__contacts-item-social"
                        >
                            <Vk class="header__links-social-item-img contact-form__contacts-item-social-img" />

                            <span class="contact-form__contacts-item-social-text">Вконтакте</span>
                        </a>

                        <a
                            href="https://wa.me/+79771885559"
                            target="_blank"
                            class="header__links-social-item contact-form__contacts-item-social"
                        >
                            <Whatsapp class="header__links-social-item-img contact-form__contacts-item-social-img" />

                            <span class="contact-form__contacts-item-social-text">WhatsApp</span>
                        </a>

                        <a
                            href="https://t.me/swim_shot"
                            target="_blank"
                            class="header__links-social-item contact-form__contacts-item-social"
                        >
                            <Telegram class="header__links-social-item-img contact-form__contacts-item-social-img" />

                            <span class="contact-form__contacts-item-social-text">Telegram</span>
                        </a>

                        <a
                            href="https://www.instagram.com/swim_shot/"
                            target="_blank"
                            class="header__links-social-item contact-form__contacts-item-social"
                        >
                            <Instagram class="header__links-social-item-img contact-form__contacts-item-social-img" />

                            <span class="contact-form__contacts-item-social-text">Instagram</span>
                        </a>

                        <a
                            href="https://dzen.ru/swimshot/"
                            target="_blank"
                            class="header__links-social-item contact-form__contacts-item-social"
                        >
                            <Zen class="header__links-social-item-img contact-form__contacts-item-social-img" />

                            <span class="contact-form__contacts-item-social-text">Дзен</span>
                        </a>
                    </div>
                </div>
            </div>

            <form @submit.prevent="submit" class="contact-form__form contact-form-border">
                <p class="contact-form__contacts-item-title">Оставляй заявку на сайте, и мы сами тебе позвоним</p>

                <TextInput v-model="form.name" :error="nameError" placeholderText="Имя *" />

                <TextInput
                    v-model="form.phone"
                    :error="telError"
                    :tag="'input-masked'"
                    mask="+7 (###) ###-##-##"
                    type="phone"
                    placeholderText="Телефон *"
                />

                <p class="contact-form__policy-text">
                    Нажимая на кнопку "Отправить", Вы даете согласие на обработку персональных данных и соглашаетесь с
                    <nuxt-link to="/policy" target="_blank"> политикой конфиденциальности</nuxt-link>
                </p>

                <VButton wide text="Отправить" />
            </form>
        </div>

        <div class="container contact-form__wrap" data-aos="fade-up">
            <yandex-map
                class="contact-form-border contact-form__map"
                :settings="{
                    apiKey: '24493451-0d78-48ba-a1b8-259797024b9a',
                    lang: 'ru_RU',
                }"
                :coords="coordsCenter"
                :zoom="isTablet ? 12 : 14"
            >
                <ymap-marker :icon="markerIcon1801" :coords="coords1801" marker-id="1" hint-content="Бассейн Swim Shot">
                    <div class="another-pools__list-item-text" slot="balloon">
                        <nuxt-link to="/zelenograd"> <b>Бассейн Swim Shot</b>, Зеленоград, к1801 </nuxt-link>
                    </div>
                </ymap-marker>

                <ymap-marker :coords="coordsOrbita" marker-id="2" hint-content="СК Орбита">
                    <div class="another-pools__list-item-text" slot="balloon">
                        <nuxt-link to="/orbita"> <b>СК Орбита</b>, Зеленоград, ул. Озерная аллея, 6 </nuxt-link>
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
import validationMixin, { required, tel, nameAll } from '../../plugins/validation';
import TextInput from '~/components/TextInput/TextInput.vue';
import VButton from '~/components/VButton/VButton.vue';

import Vk from '~/assets/svg/vk.svg';
import Instagram from '~/assets/svg/instagram.svg';
import Telegram from '~/assets/svg/telegram.svg';
import Whatsapp from '~/assets/svg/whatsapp.svg';
import Zen from '~/assets/svg/zen.svg';

import House from '~/assets/svg/house.svg';

export default {
    name: 'ContactForm',
    components: { Vk, Instagram, TextInput, VButton, Telegram, Whatsapp, Zen, House },
    mixins: [validationMixin],
    data() {
        return {
            bgPic,
            form: {
                name: null,
                phone: null,
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
    },
    methods: {
        sendLead() {
            this.$fb.track('Lead');
        },

        async submit() {
            this.$v.$touch();
            if (this.$v.$invalid) return;

            await fetch('https://cloud.1c.fitness/api/hs/lead/Webhook/6cdcce9e-6824-11ed-da8f-00505683b2c0', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.form),
            });

            if (!window.dataLayer.find((item) => item.event === 'form')) {
                window.dataLayer.push({
                    event: 'form',
                });
                this.sendLead();
            }

            this.$emit('formSubmit');
        },
    },
};
</script>
