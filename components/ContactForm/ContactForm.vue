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

                <TextInput v-model="form.name" :error="nameError" placeholderText="Имя" />

                <TextInput
                    v-model="form.phone"
                    :error="telError"
                    :tag="'input-masked'"
                    mask="+7 (###) ###-##-##"
                    type="phone"
                    :placeholderText="'Телефон'"
                />

                <TextInput v-model="form.email" :error="emailError" :placeholderText="'Email'" />

                <VButton wide text="Отправить" />
            </form>

            <yandex-map
                class="contact-form__map"
                :settings="{
                    apiKey: '24493451-0d78-48ba-a1b8-259797024b9a',
                    lang: 'ru_RU',
                    zoom: '1',
                }"
                :coords="coords"
                :zoom="10"
            >
                <ymap-marker :icon="markerIcon" :coords="coords" marker-id="123" hint-content="some hint">
                    <div class="another-pools__list-item-text" slot="balloon">
                        <VButton text="ПОДРОБНОСТИ" />
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
                name: 'Тест',
                phone: '+79999872096',
                email: 'kondrieger@gmail.com',
                comment: 'Новая заявка с сайта',
            },
            coords: [55.97779002199537, 37.162751976922856],

            markerIcon: {
                layout: 'default#imageWithContent',
                imageHref: 'svg/house.svg',
                imageSize: [30, 30],
                imageOffset: [0, -18],
                content: '',
                contentOffset: [0],
                contentLayout:
                    '<div style="background: white; width: 30px; height: 30px; z-index: -10000;">$[properties.iconContent]</div>',
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

            fetch().then((resp) => {
                //     'https://cloud.1c.fitness/api/hs/lead/Webhook/6cdcce9e-6824-11ed-da8f-00505683b2c0/', {
                //     method: 'POST',
                //     mode: 'no-cors',
                //     headers: {
                //         Accept: 'application/json',
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(this.form),
                // }
                // if (!window.dataLayer.find((item) => item.event === 'form')) {
                //     window.dataLayer.push({
                //         event: 'form',
                //     });
                //     this.sendLead();
                // }
            });
        },
    },
};
</script>
