<template>
    <vue-modaltor
        :visible="open"
        @hideModal="hideModal"
        defaultWidth="560px"
        :resize-width="{ 768: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <div @click="hideModal" class="modal__close-btn"></div>
                <h4 class="modal__header-text">НУЖЕН ОБРАТНЫЙ ЗВОНОК?</h4>
                <p class="modal__header-subtext">Оставь свой номер и мы перезвоним</p>
            </div>
        </template>
        <template #body>
            <form @submit.prevent="submit" class="modal__form">
                <div class="modal__form-inputs">
                    <text-input v-model="form.name" :error="nameError" :placeholderText="'Ваше имя'"></text-input>
                    <text-input
                        v-model="form.tel"
                        :error="telError"
                        :tag="'input-masked'"
                        mask="+7 (###) ###-##-##"
                        type="tel"
                        :placeholderText="'Ваш телефон'"
                    ></text-input>
                    <text-input
                        v-if="email"
                        v-model="form.email"
                        :error="emailError"
                        :placeholderText="'Ваш Email'"
                    ></text-input>
                </div>
                <VButton wide text="Отправить" />
            </form>
            <p class="modal__form-text">
                Нажимая на кнопку, вы принимаете
                <a target="_blank" href="https://education-erp.com/agreement?type=Confidentiality"
                    >условия соглашения</a
                >
                об обработке персональных данных
            </p>
        </template>
    </vue-modaltor>
</template>

<script>
import validationMixin, { required, email, tel, nameAll } from '../../plugins/validation';
import TextInput from '~/components/TextInput/TextInput.vue';
import VButton from '~/components/VButton/VButton.vue';

export default {
    name: 'modal',
    mixins: [validationMixin],
    components: { TextInput, VButton },
    props: {
        open: Boolean,
        email: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isOpen: this.open,
            form: {
                name: null,
                tel: null,
                email: null,
            },
        };
    },
    validations: {
        form: {
            name: {
                required,
                nameAll,
            },
            email: {
                email,
            },
            tel: {
                required,
                tel,
            },
        },
    },
    methods: {
        hideModal() {
            this.isOpen = false;
            this.$emit('closeModal', this.isOpen);
        },
        submit() {
            this.$v.$touch();
            if (this.$v.invalid) return;
            console.log(this.$v);
            let formData = new FormData(document.forms.person);

            formData.append('Name', this.form.name);
            formData.append('Phone', this.form.tel);
            formData.append('Type', 0);
            formData.append('SchoolType', 'Swimshot');
            formData.append('Agreement', 'on');

            // отослать
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://education-erp.com/api/LandingService/v1/SingleRequest');
            xhr.send(formData);
            this.isOpen = false;
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
            if (this.$v.form.tel.$dirty) {
                if (!this.$v.form.tel.required) return 'Укажите телефон';
                if (!this.$v.form.tel.tel) return 'Неверный формат';
            }
            return '';
        },
        emailError() {
            if (this.$v.form.email.$dirty && this.email) {
                if (!this.$v.form.email.required) return 'Укажите почту';
                if (!this.$v.form.email.email) return 'Неверный формат';
            }
            return '';
        },
    },
};
</script>

<style>
.modaltor__panel {
    background-color: #fff !important;
    padding: calc(var(--gs) * 4) calc(var(--gs) * 3);
    text-align: center;
    @media (--tablet) {
        max-height: 100% !important;
        height: 100%;
        padding: calc(var(--gs) * 2);
        padding-top: 50px;
    }
}
.modaltor {
    z-index: 99999 !important;
}
.modal {
    &__close-btn {
        position: absolute;
        right: 25px;
        top: 25px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        @media (--tablet) {
            top: 10px;
            right: 10px;
        }
        &:hover {
            opacity: 1;
        }
        &:before,
        &:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 33px;
            width: 2px;
            background-color: #333;
        }
        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
        }
    }
    &__header {
        margin-bottom: calc(var(--gs) * 2.4);
        &-text {
            font-size: 36px;
            line-height: 1.23;
            font-weight: 800 !important;
            margin-bottom: calc(var(--gs) * 1.1);
            text-transform: uppercase;
            @media (--tablet) {
                font-size: 28px;
            }
        }
        &-subtext {
            font-size: 20px !important;
            line-height: 1.55 !important;
            font-weight: 300 !important;
        }
    }
    &__form {
        & .vs__dropdown-toggle {
            width: 100%;
            height: 60px;
            padding-left: calc(var(--gs) * 2);
            color: #2b2a29;
            border: 2px solid var(--cl-dk-blue);
            font-size: 16px;
            line-height: 1.33;
            border-radius: 20px;
            &:focus,
            &:active {
                outline: none;
            }
            * .vs__clear {
                display: none;
            }
        }
        &-text {
            margin-top: 20px;
            color: black;
            & a {
                display: inline;
            }
            &,
            & a {
                font-family: var(--font-geometria);
                line-height: 1.55 !important;
                font-weight: 300 !important;
                font-size: 15px !important;
            }
        }
        & .btn {
            margin: calc(var(--gs) * 2.5) 0;
        }
    }
}
</style>
