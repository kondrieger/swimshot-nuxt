<template>
    <div>
        <button v-if="isVisibleBtn" @click="scrollTop" class="arrow-wrap"><i class="arrow"></i></button>

        <Header @modalOpen="onOpenModal" />

        <main>
            <Nuxt @modalOpen="onOpenModal" />
        </main>

        <a class="phone-wrap" href="tel:+74994305595" v-if="isTablet">
            <Phone class="phone" />
        </a>

        <ContactForm @formSubmit="onCloseModal" />

        <ModalContact :open="isContactModalOpen" @closeModal="onCloseModal" :modalComment="modalComment" />
    </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';
import ContactForm from '~/components/ContactForm/ContactForm.vue';
import ModalContact from '~/components/Modal/ModalContact/ModalContact.vue';
import locationMixin from '~/static/js/locationMixin';

import Phone from '~/assets/svg/phone.svg';

export default {
    components: {
        Header,
        ContactForm,
        Phone,
        ModalContact,
    },

    mixins: [locationMixin],

    data() {
        return {
            isContactModalOpen: false,
            isVisibleBtn: false,
            modalComment: null,
        };
    },

    computed: {
        isTablet() {
            return this.$mq === 'tablet';
        },
    },

    methods: {
        scrollTop() {
            window.scrollTo(0, 0);
        },

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

        onOpenModal(comment = null) {
            if (comment) {
                this.modalComment = comment;
            } else this.modalComment = null;

            this.isContactModalOpen = true;
        },

        onCloseModal() {
            this.isContactModalOpen = false;
        },
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 1000);

            window.document.body.onscroll = () => {
                this.isVisibleBtn = +window.scrollY > 800;
            };

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

.arrow {
    border: solid white;
    border-width: 0 4px 4px 0;
    display: inline-block;
    margin-top: 5px;
    padding: 5px;
    transform: rotate(-135deg);

    &-wrap {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: fixed;
        left: 70px;
        bottom: 70px;
        background-color: var(--cl-blue);
        box-shadow: 0px 0px 15px 5px rgb(123 162 184 / 30%);
        border: 1px solid var(--cl-lt-blue);
        z-index: 98;
        cursor: pointer;

        &:hover,
        &:active {
            background-color: var(--cl-dk-blue);
        }

        @media (--tablet) {
            left: 50px;
            bottom: 50px;
        }

        @media (--mobile-lg) {
            left: 25px;
            bottom: 25px;
        }
    }
}
</style>
