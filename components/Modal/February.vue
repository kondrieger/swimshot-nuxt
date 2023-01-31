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
                <h4 class="modal-february__header-title">Скидки до <span class="text-danger text-bold">25%</span></h4>
                <h3 class="modal-february__header-subtitle">
                    <span class="text-blue text-bold">До конца <span class="text-danger text-bold">января</span> </span>
                </h3>
                <p class="modal-february__header-text">
                    На полугодовые и годовые абонементы безлимитного свободного плавания
                </p>
                <p class="modal-february__header-text">
                    Всего <span class="text-blue text-bold">2500₽</span> в месяц за год в бассейне!
                </p>
            </div>
        </template>
        <template #body :style="{}">
            <div class="modal__body">
                <p class="modal-february__body-text">
                    Звони
                    <a class="contact-form__contacts-item-content" href="tel:+74994305595" @click="closeModal">
                        +7 (499) 430-55-95
                    </a>
                    или оставляй заявку в <a class="js-link" href="#contact-form" @click="closeModal">форме</a> для
                    уточнения информации
                </p>

                <div @click="closeModal">
                    <VButton class="modal-february__body-btn" wide text="УЖЕ БЕГУ" />
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
    name: 'FebruaryModal',
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
            opacity: 0.15;
            z-index: -1;
            background: url('~/assets/jpg/winter.jpg');
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
            font-size: 38px !important;
            text-transform: uppercase !important;
            text-align: center !important;
            color: var(--cl-blue) !important;
        }

        &-subtitle {
            font-weight: 500;
            text-align: center !important;
            font-size: 20px !important;
            color: black !important;
            margin-bottom: calc(var(--gs) * 1) !important;
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
                color: var(--cl-blue);

                @media (--tablet) {
                    font-size: 16px !important;
                }
            }
        }

        &-btn {
            &:not(:hover) {
                background: var(--cl-red);
                border-color: var(--cl-red);
            }
        }
    }

    &__icon {
        position: absolute;
        fill: var(--cl-red);

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
