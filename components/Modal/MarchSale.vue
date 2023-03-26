<template>
    <vue-modaltor
        :visible="open || isOpen"
        :closeScroll="false"
        @closeModal="closeModal"
        class="modal-march"
        defaultWidth="600px"
        :resize-width="{ 960: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <Gift class="modal-march__icon modal-march__icon--gift" />
                <div @click="closeModal" class="modal__close-btn"></div>
                <h4 class="modal-march__header-title">ТОЛЬКО ДО КОНЦА МАРТА</h4>
                <h3 class="modal-march__header-subtitle">
                    Скидка на <span class="text-bold">годовой и полугодовой</span> абонементы на свободное плавание до
                    <span class="text-bold">5000</span> рублей!
                </h3>
                <h3 class="modal-march__header-subtitle">
                    А также абонемент <span class="text-bold">"до лета"</span> всего за
                    <span class="text-bold">7900</span> для тех, кто с июня планирует уезжать
                </h3>
            </div>
        </template>
        <template #body :style="{}">
            <div class="modal__body">
                <p class="modal-march__body-text">
                    Звони
                    <a class="contact-form__contacts-item-content" href="tel:+74994305595" @click="closeModal">
                        +7 (499) 430-55-95
                    </a>
                    , чтобы узнать подробности и урвать самые выгодные условия в Swim Shot
                </p>

                <div class="modal-march__body-img-wrap">
                    <a class="contact-form__contacts-item-content" href="https://vk.com/swim_shot" target="_blank">
                        <Vk class="social-item-img modal-march__body-img" />
                    </a>

                    <a
                        class="contact-form__contacts-item-content"
                        href="https://www.instagram.com/swim_shot"
                        target="_blank"
                    >
                        <img
                            class="social-item-img social-item-img--image modal-march__body-img"
                            :src="require('~/assets/swimshot_header_logo.jpg')"
                            alt="Swim shot логотип"
                        />
                    </a>
                </div>

                <div @click="closeModal" class="modal-march__body-btn-wrap">
                    <VButton class="modal-march__body-btn" wide text="УЖЕ БЕГУ" />
                </div>
            </div>
        </template>
    </vue-modaltor>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import Gift from '~/assets/svg/gift-hand.svg';
import Vk from '~/assets/svg/vk.svg';
import Instagram from '~/assets/svg/instagram.svg';

export default {
    name: 'MarchSaleModal',
    components: { VButton, Gift, Vk, Instagram },
    props: {
        open: Boolean,
    },
    data() {
        return {
            isOpen: this.open,
        };
    },

    methods: {
        closeModal() {
            this.isOpen = false;
            this.$emit('closeModal', this.isOpen);
        },
    },
};
</script>

<style>
.modal-march {
    .modaltor__panel {
        color: white;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            z-index: -1;
            background: url('~/assets/jpg/pool_bg.jpg');
            background-position: -100px 0;
            background-size: cover;
        }
    }

    .modal__close-btn {
        opacity: 0.8 !important;

        &::before,
        &::after {
            background-color: red !important;
        }
    }

    &__header {
        &-title {
            font-size: 32px !important;
            text-transform: uppercase !important;
            text-align: center !important;
            color: var(--cl-red) !important;
            margin-bottom: calc(var(--gs));
        }

        &-subtitle {
            font-weight: 500;
            text-align: center !important;
            font-size: 20px !important;
            color: black !important;
            margin-bottom: calc(var(--gs) * 2) !important;
        }

        &-text {
            text-align: center !important;
            font-size: 18px !important;
            color: black;
            margin-bottom: calc(var(--gs) * 2) !important;
        }
    }

    &__body {
        &-text {
            margin-bottom: calc(var(--gs) * 1);
            text-align: center !important;
            font-size: 20px !important;
            color: black;

            @media (--tablet) {
                font-size: 16px !important;
            }

            & a {
                display: inline !important;
                font-size: 20px;
                font-weight: bold;
                color: var(--cl-blue);

                @media (--tablet) {
                    font-size: 16px !important;
                }
            }
        }

        &-btn {
            &:not(:hover) {
                background: var(--cl-blue);
                border-color: var(--cl-blue);
            }

            &-wrap {
                margin-bottom: -20px;
            }
        }

        &-img {
            width: 50px;
            height: 50px;

            &-wrap {
                display: flex;
                justify-content: space-between;
                margin: 0 auto 20px;
                width: 110px;

                & a {
                    width: auto;
                }
            }
        }
    }

    &__icon {
        position: absolute;
        fill: var(--cl-blue);

        &--march {
            display: none;
            bottom: 0;
            right: 0;
        }

        &--gift {
            width: 80px;
            height: 80px;
            top: 0;
            left: 0;

            @media (--tablet) {
                width: 50px;
                height: 50px;
            }
        }
    }
}
</style>
