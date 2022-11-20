<template>
    <div>
        <Header @modalOpen="onOpenModal" />

        <main>
            <Nuxt @modalOpen="onOpenModal" />
        </main>

        <a class="phone-wrap" href="tel:+74994305595" v-if="isTablet">
            <Phone class="phone" />
        </a>

        <ContactForm @formSubmit="onCloseModal" />

        <Alert v-if="alert.visible" :theme="alert.theme">{{ alert.text }}</Alert>

        <ModalContact :open="isContactModalOpen" @closeModal="onCloseModal" :modalComment="modalComment" />
    </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';
import ContactForm from '~/components/ContactForm/ContactForm.vue';
import ModalContact from '~/components/Modal/ModalContact/ModalContact.vue';
import Alert from '~/components/Alert/Alert.vue';

import Phone from '~/assets/svg/phone.svg';

export default {
    components: {
        Header,
        ContactForm,
        Phone,
        ModalContact,
        Alert,
    },
    data() {
        return {
            isContactModalOpen: false,
            modalComment: null,

            alert: {
                visible: false,
                text: null,
                theme: null,
            },
        };
    },
    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },
    },
    methods: {
        editLinks() {
            const linkArr = Array.from(document.getElementsByClassName('js-link'));
            location.hash && history.pushState({}, '', location.pathname);

            linkArr.forEach((l) => {
                l.addEventListener('click', function (event) {
                    event.preventDefault();
                    //отключаем стандартный переход по ссылке
                    location.hash && history.pushState({}, '', location.pathname);

                    // сворачиваем боковое меню
                    const menu = Array.from(document.getElementsByClassName('bm-menu'))[0];
                    if (menu) menu.style.width = '0';

                    //по href ищем элемент с нужным id и определяем его позицию
                    const linkingElement = document
                        .querySelector(`${this.getAttribute('href')?.replace('/', '')}`)
                        ?.getBoundingClientRect();
                    const elementTop = linkingElement?.top && window.scrollY + linkingElement?.top;

                    if (elementTop) {
                        //скролим на эту позицию
                        window.scrollTo(0, elementTop);
                    }
                });
            });
        },

        showAlert() {
            this.alert.visible = true;

            setTimeout(() => {
                if (this.alert.visible) this.alert.visible = false;
            }, 4000);
        },

        onOpenModal(comment = null) {
            if (comment) {
                this.modalComment = comment;
            } else this.modalComment = null;

            this.isContactModalOpen = true;
        },

        onCloseModal(isSubmitOk = true) {
            this.alert.text = isSubmitOk ? 'Заявка успешно отправлена' : 'Произошла ошибка';
            this.alert.theme = isSubmitOk ? 'success' : 'danger';

            // Временно показываю только при успехе
            if (isSubmitOk) this.showAlert();

            this.isContactModalOpen = false;
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 1000);

            this.editLinks();
        });
    },
};
</script>

<style>
.phone {
    fill: #fff;
    width: 30px;
    height: 30px;

    &-wrap {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: fixed;
        right: 50px;
        bottom: 45px;
        background-color: var(--cl-blue);
        z-index: 98;
        border: none;
        cursor: pointer;

        &:hover,
        &:active {
            background-color: var(--cl-dk-blue);
        }

        @media (--mobile-lg) {
            right: 25px;
            bottom: 20px;
        }
    }
}
</style>
