<template>
    <vue-modaltor
        :visible="open || isOpen"
        :closeScroll="false"
        @closeModal="closeModal"
        class="modal-contact"
        defaultWidth="600px"
        :resize-width="{ 960: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <div @click="closeModal" class="modal__close-btn"></div>
                <h4 class="modal-contact__header-title">НУЖЕН ОБРАТНЫЙ ЗВОНОК?</h4>

                <h3 class="modal-contact__header-subtitle">Оставь свой номер и мы перезвоним</h3>
            </div>
        </template>
        <template #body>
            <TextInput v-model="form.name" :error="nameError" placeholderText="Имя *" />

            <TextInput
                v-model="form.phone"
                :error="telError"
                :tag="'input-masked'"
                mask="+7 (###) ###-##-##"
                type="phone"
                placeholderText="Телефон *"
            />

            <div v-if="modalComment" class="modal-contact__body-text">
                <Check class="modal-contact__body-text-icon" />

                <p>
                    <span class="modal-contact__body-text-name">{{ modalComment }}</span
                    >, хочу к тебе!
                </p>
            </div>

            <p class="contact-form__policy-text">
                Нажимая на кнопку "Отправить", Вы даете согласие на обработку персональных данных и соглашаетесь с
                <nuxt-link to="/policy" target="_blank"> политикой конфиденциальности</nuxt-link>
            </p>

            <div class="" @click="submit"><VButton wide text="Отправить" /></div>
        </template>
    </vue-modaltor>
</template>

<script>
import validationMixin, { required, tel, nameAll } from '../../../plugins/validation';

import VButton from '~/components/VButton/VButton.vue';
import TextInput from '~/components/TextInput/TextInput.vue';

import Check from '~/assets/svg/check.svg';

import './styles.css';

export default {
    name: 'modal',
    components: { TextInput, VButton, Check },
    mixins: [validationMixin],
    props: {
        open: {
            type: Boolean,
            default: false,
        },

        modalComment: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            isOpen: this.open,

            form: {
                name: null,
                phone: null,
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
        closeModal() {
            this.isOpen = false;
            this.$emit('closeModal', this.isOpen);
        },

        sendLead() {
            this.$fb.track('Lead');
        },

        async submit() {
            this.$v.$touch();
            if (this.$v.$invalid) return;

            if (this.modalComment) this.form.comment = `Хочу к тренеру: ${this.modalComment}`;

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

            this.closeModal(true);
        },
    },
};
</script>
