<template>
    <div :style="{ 'background-image': 'url(' + bgPic + ')' }" class="contact-form__bg" id="contact-form">
        <div class="container contact-form__wrap">
            <form @submit.prevent="submit" class="contact-form">
                <div class="contact-form__contacts">
                    <div class="contact-form__contacts-item">
                        <p class="contact-form__contacts-item-title">Звони нам</p>

                        <a class="contact-form__contacts-item-content" href="phone:+74994305595">+7 (499) 430-55-95</a>
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
                        </div>
                    </div>

                    <p
                        class="
                            contact-form__contacts-item
                            contact-form__contacts-item--wide
                            contact-form__contacts-item--text
                        "
                    >
                        Оставляй заявку прямо на сайте и мы сами тебе позвоним
                    </p>
                </div>

                <iframe
                    class="we-fit-iframe"
                    src="https://cloud.1c.fitness/api/hs/api/lead/?apikey=07914eda-27af-11ed-bb82-00505683b2c0&amp;formid=0a8c30b8-1cd4-11ed-4681-00505683b2c0"
                    >Ваш браузер не поддерживает плавающие фреймы!</iframe
                >

                <text-input v-model="form.surname" :error="surnameError" placeholderText="Фамилия" />

                <text-input v-model="form.name" :error="nameError" placeholderText="Имя" />

                <text-input
                    v-model="form.phone"
                    :error="telError"
                    :tag="'input-masked'"
                    mask="+7 (###) ###-##-##"
                    type="phone"
                    :placeholderText="'Телефон'"
                />

                <text-input v-model="form.email" :error="emailError" :placeholderText="'Email'" />

                <VButton wide text="Отправить" />
            </form>
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
import validationMixin, { required, email, tel, nameAll } from '../../plugins/validation';
import TextInput from '~/components/TextInput/TextInput.vue';
import VButton from '~/components/VButton/VButton.vue';
import axios from 'axios';

export default {
    name: 'ContactForm',
    components: { Vk, Instagram, TextInput, VButton },
    mixins: [validationMixin],
    data() {
        return {
            bgPic,
            form: {
                name: 'Тест',
                surname: 'Тест',
                phone: '+79999872096',
                email: 'kondrieger@gmail.com',
                FormID: '0a8c30b8-1cd4-11ed-4681-00505683b2c0',
                clubid: '628ecba8-d1d5-11ec-7e89-00505683b2c0',
            },
        };
    },
    head() {
        return {
            script: [
                {
                    src: 'https://fitness1c.ru/lead/?apikey=07914eda-27af-11ed-bb82-00505683b2c0&formid=0a8c30b8-1cd4-11ed-4681-00505683b2c0&height=560px&url=cloud.1c.fitness',
                    callback: () => {
                        console.log('Форма загружена');
                    },
                },
            ],
        };
    },
    validations: {
        form: {
            name: {
                required,
                nameAll,
            },
            surname: {
                required,
                nameAll,
            },
            phone: {
                required,
                tel,
            },
            email: {
                required,
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

        surnameError() {
            if (this.$v.form.surname.$dirty) {
                if (!this.$v.form.surname.required) return 'Укажите свою фамилию';
                if (!this.$v.form.surname.nameAll) return 'Укажите корректную фамилию';
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
                if (!this.$v.form.email.required) return 'Укажите Email';
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

            // $.ajax({
            //     method: 'POST',
            //     url: 'https://cloud.1c.fitness/api/hs/api/lead/',
            //     headers: {
            //         'Content-Type': ['application/json'],
            //         Apikey: '07914eda-27af-11ed-bb82-00505683b2c0',
            //     },
            //     data: JSON.stringify(this.form),
            //     catche: false,
            // }).then((resp) => console.log(resp));

            axios
                .post(
                    'https://cloud.1c.fitness/api/hs/api/lead/',
                    {
                        data: JSON.stringify(this.form),
                    },
                    {
                        headers: {
                            'Content-Type': ['application/json'],
                            Apikey: '07914eda-27af-11ed-bb82-00505683b2c0',
                        },
                    }
                )
                .then((response) => {
                    console.log(response);
                });

            // if (!window.dataLayer.find((item) => item.event === 'form')) {
            //     window.dataLayer.push({
            //         event: 'form',
            //     });
            //     this.sendLead();
            //     console.log('Заявка отправлена');
            // }
        },
    },
};
</script>
