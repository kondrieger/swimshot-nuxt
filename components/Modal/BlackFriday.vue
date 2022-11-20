<template>
    <vue-modaltor
        :visible="open || isOpen"
        :closeScroll="false"
        @closeModal="closeModal"
        class="modal-friday"
        defaultWidth="600px"
        :resize-width="{ 960: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <Gift class="modal-friday__icon modal-friday__icon--gift" />
                <div @click="closeModal" class="modal__close-btn"></div>
                <h4 class="modal-friday__header-title">Скидки до 80%</h4>
                <h3 class="modal-friday__header-subtitle">
                    ЧЕРНАЯ ПЯТНИЦА <span class="text-danger text-bold">25-28 НОЯБРЯ</span>
                </h3>
                <p class="modal-friday__header-text">
                    Самая масштабная акция Swim Shot с момента основания <br />
                    <span class="text-danger text-bold">СКИДКИ АБСОЛЮТНО НА ВСЕ!</span>
                </p>
            </div>
        </template>
        <template #body>
            <div class="modal__body">
                <p class="modal-friday__body-text">
                    Звони
                    <a class="contact-form__contacts-item-content" href="tel:+74994305595" @click="closeModal">
                        +7 (499) 430-55-95
                    </a>
                    или оставляй заявку в <a class="js-link" href="#contact-form" @click="closeModal">форме</a> для
                    уточнения информации
                </p>

                <div class="" @click="closeModal">
                    <VButton class="modal-friday__body-btn" wide text="УЖЕ БЕГУ" />
                </div>
            </div>
        </template>
    </vue-modaltor>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import Gift from '~/assets/svg/gift-hand.svg';

export default {
    name: 'black-friday-modal',
    components: { VButton, Gift },
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
.modal-friday {
    .modaltor__panel {
        background-color: #1b1b1b !important;
        color: white;
    }

    .modal__close-btn {
        &::before,
        &::after {
            background-color: #fff;
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
            color: white !important;
            margin-bottom: calc(var(--gs) * 2) !important;
        }

        &-text {
            text-align: center !important;
            font-size: 18px !important;
            color: white !important;
            margin-bottom: calc(var(--gs) * 1) !important;
        }
    }

    &__body {
        &-text {
            margin-bottom: calc(var(--gs) * 3);
            text-align: center !important;
            color: white !important;
            font-size: 20px !important;

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

        &--friday {
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
