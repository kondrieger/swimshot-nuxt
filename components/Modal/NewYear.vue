<template>
    <vue-modaltor
        :visible="open || isOpen"
        :closeScroll="false"
        @closeModal="closeModal"
        class="modal-new-year"
        defaultWidth="600px"
        :resize-width="{ 960: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <Gift class="modal-new-year__icon modal-new-year__icon--gift" />
                <div @click="closeModal" class="modal__close-btn"></div>
                <h4 class="modal-new-year__header-title">Скидки до 25%</h4>
                <h3 class="modal-new-year__header-subtitle">
                    Подарки от <span class="text-danger text-bold">Swim Shot</span> на
                    <span class="text-danger text-bold"> Новый год</span>!
                </h3>
                <p class="modal-new-year__header-text">
                    Скидки на свободное плавание, групповые и персональные тренировки для детей и взрослых
                    <span class="text-danger text-bold">до 25%</span> и подарочные сертификаты до
                    <span class="text-danger text-bold">15 000₽</span> – отличная возможность порадовать близких в
                    праздник!
                </p>
            </div>
        </template>
        <template #body :style="{}">
            <div class="modal__body">
                <p class="modal-new-year__body-text">
                    Звони
                    <a class="contact-form__contacts-item-content" href="tel:+74994305595" @click="closeModal">
                        +7 (499) 430-55-95
                    </a>
                    или оставляй заявку в <a class="js-link" href="#contact-form" @click="closeModal">форме</a> для
                    уточнения информации
                </p>

                <div @click="closeModal">
                    <VButton class="modal-new-year__body-btn" wide text="УЖЕ БЕГУ" />
                </div>
            </div>
        </template>
    </vue-modaltor>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import Gift from '~/assets/svg/gift-hand.svg';
import NewYearBg from '~/assets/jpg/new-year.jpg';

export default {
    name: 'black-new-year-modal',
    components: { VButton, Gift },
    props: {
        open: Boolean,
    },
    data() {
        return {
            isOpen: this.open,
            NewYearBg,
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
.modal-new-year {
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
            opacity: 0.2;
            z-index: -1;
            background: url('~/assets/jpg/new-year.jpg');
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
            font-size: 38px !important;
            text-transform: uppercase !important;
            text-align: center !important;
            color: var(--cl-red) !important;
        }

        &-subtitle {
            text-align: center !important;
            font-size: 20px !important;
            color: black !important;
            margin-bottom: calc(var(--gs) * 2) !important;
        }

        &-text {
            text-align: center !important;
            font-size: 18px !important;
            color: black;
            margin-bottom: calc(var(--gs) * 1) !important;
        }
    }

    &__body {
        &-text {
            margin-bottom: calc(var(--gs) * 3);
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
                color: var(--cl-red);

                @media (--tablet) {
                    font-size: 16px !important;
                }
            }
        }

        &-btn {
            &:not(:hover) {
                background: var(--cl-red);
                border-color: var(--cl-red);
                box-shadow: 0 13px 30px 5px var(--cl-red);
            }
        }
    }

    &__icon {
        position: absolute;
        fill: var(--cl-red);

        &--new-year {
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
