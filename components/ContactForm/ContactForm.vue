<template>
    <div :style="{ 'background-image': 'url(' + bgPic + ')' }" class="contact-form__bg" id="contact-form">
        <div class="container contact-form__wrap">
            <div class="contact-form__contacts contact-form-border">
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
                            v-for="link in socialLinks"
                            :key="link.id"
                            :href="link.href"
                            class="social-item contact-form__contacts-item-social"
                            target="_blank"
                        >
                            <Vk
                                v-if="link.id === 'vk'"
                                class="social-item-img contact-form__contacts-item-social-img"
                            />

                            <Whatsapp
                                v-if="link.id === 'whatsapp'"
                                class="social-item-img contact-form__contacts-item-social-img"
                            />

                            <Telegram
                                v-if="link.id === 'telegram'"
                                class="social-item-img contact-form__contacts-item-social-img"
                            />

                            <img
                                v-if="link.id === 'instagram'"
                                class="social-item-img social-item-img--image contact-form__contacts-item-social-img"
                                :src="require('~/assets/swimshot_header_logo.jpg')"
                                alt="Swim shot логотип"
                            />

                            <Zen
                                v-if="link.id === 'zen'"
                                class="social-item-img contact-form__contacts-item-social-img"
                            />

                            <span class="contact-form__contacts-item-social-text">{{ link.text }}</span>
                        </a>
                    </div>
                </div>
            </div>

            <div id="contact-form" class="contact-form__form contact-form-border">
                <FormLoad
                    v-if="formState.isLoading || formState.loaded || formState.errored"
                    :state="formState"
                    @closeFormLoad="onCloseFormLoad"
                />
                <template v-else>
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
                        Нажимая на кнопку "Отправить", Вы даете согласие на обработку персональных данных и соглашаетесь
                        с
                        <nuxt-link to="/policy" target="_blank"> политикой конфиденциальности</nuxt-link>
                    </p>

                    <div @click="submitForm">
                        <VButton wide text="Отправить" />
                    </div>
                </template>
            </div>
        </div>

        <div class="container contact-form__wrap" id="contact-form-map">
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
import './styles.css';
import { socialLinksContactForm } from '~/static/js/links.js';
import submitMixin from '~/static/js/submitMixin.js';
import validationMixin, { required, tel, nameAll } from '../../plugins/validation';

import TextInput from '~/components/TextInput/TextInput.vue';
import VButton from '~/components/VButton/VButton.vue';
import FormLoad from '~/components/FormLoad/FormLoad.vue';

import Vk from '~/assets/svg/vk.svg';
import Instagram from '~/assets/svg/instagram.svg';
import Telegram from '~/assets/svg/telegram.svg';
import Whatsapp from '~/assets/svg/whatsapp.svg';
import Zen from '~/assets/svg/zen.svg';
import House from '~/assets/svg/house.svg';

import bgPic from '~/assets/jpg/things_bg.jpg';

export default {
    name: 'ContactForm',
    components: { FormLoad, Vk, Instagram, TextInput, VButton, Telegram, Whatsapp, Zen, House },
    mixins: [validationMixin, submitMixin],

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

            socialLinks: socialLinksContactForm,
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
};
</script>
