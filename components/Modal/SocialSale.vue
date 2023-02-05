<template>
    <vue-modaltor
        :visible="open || isOpen"
        :closeScroll="false"
        @closeModal="closeModal"
        class="modal-february"
        defaultWidth="600px"
        :resize-width="{ 960: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <Gift class="modal-february__icon modal-february__icon--gift" />
                <div @click="closeModal" class="modal__close-btn"></div>
                <h4 class="modal-february__header-title">БЕСПЛАТНОЕ ПЛАВАНИЕ В БАССЕЙНЕ SWIM SHOT</h4>
                <h3 class="modal-february__header-subtitle">
                    Отмечай аккаунт <span class="text-blue text-bold">Swim Shot</span> в социальных сетях и получай
                    <span class="text-bold">бесплатное плавание </span>в нашем бассейне.
                </h3>
                <h3 class="modal-february__header-subtitle">
                    Одно упоминание — одно плавание. Количество посещений одним человеком
                    <span class="text-bold">не ограничено</span>
                </h3>
            </div>
        </template>
        <template #body :style="{}">
            <div class="modal__body">
                <p class="modal-february__body-text">
                    Звони
                    <a class="contact-form__contacts-item-content" href="tel:+74994305595" @click="closeModal">
                        +7 (499) 430-55-95
                    </a>
                    , чтобы узнать подробности, и отмечай нас в двух самых популярных соц сетях
                </p>

                <div class="modal-february__body-img-wrap">
                    <a class="contact-form__contacts-item-content" href="https://vk.com/swim_shot" target="_blank">
                        <Vk class="social-item-img modal-february__body-img" />
                    </a>

                    <a class="contact-form__contacts-item-content" href="https://vk.com/swim_shot" target="_blank">
                        <img
                            class="social-item-img social-item-img--image modal-february__body-img"
                            :src="require('~/assets/swimshot_header_logo.jpg')"
                            alt="Swim shot логотип"
                        />
                    </a>
                </div>

                <div @click="closeModal" class="modal-february__body-btn-wrap">
                    <VButton class="modal-february__body-btn" wide text="УЖЕ БЕГУ" />
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
    name: 'SocialSaleModal',
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
.modal-february {
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
            color: var(--cl-blue) !important;
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

        &--february {
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
