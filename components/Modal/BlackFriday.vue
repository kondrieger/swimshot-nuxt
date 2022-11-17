<template>
    <vue-modaltor
        :visible="open || isOpen"
        @hideModal="hideModal"
        defaultWidth="600px"
        :resize-width="{ 960: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <FridayIcon class="modal-friday__icon modal-friday__icon--friday" />
                <Gift class="modal-friday__icon modal-friday__icon--gift" />
                <div @click="hideModal" class="modal__close-btn"></div>
                <h4 class="modal__header-text modal-friday__header-title">Скидки до 50%</h4>
                <h3 class="modal-friday__header-subtitle">
                    Черная пятница <span class="text-danger text-bold">25-27 ноября</span>
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
                    <a class="contact-form__contacts-item-content" href="tel:+74994305595" @click="hideModal">
                        +7 (499) 430-55-95
                    </a>
                    или оставляй заявку в <a href="#contact-form" @click="hideModal">форме</a> для уточнения информации
                </p>

                <div class="" @click="hideModal">
                    <VButton class="modal-friday__body-btn" wide text="УЖЕ БЕГУ" />
                </div>
            </div>
        </template>
    </vue-modaltor>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import FridayIcon from '~/assets/svg/friday.svg';
import Gift from '~/assets/svg/gift-hand.svg';

export default {
    name: 'black-friday-modal',
    components: { VButton, FridayIcon, Gift },
    props: {
        open: Boolean,
    },
    data() {
        return {
            isOpen: this.open,
        };
    },

    methods: {
        hideModal() {
            this.isOpen = false;
            this.$emit('closeModal', this.isOpen);
        },
    },
};
</script>

<style>
.modal-friday {
    &__header {
        &-title {
            color: var(--cl-red);
        }

        &-subtitle {
            font-size: 20px;
            margin-bottom: calc(var(--gs) * 1.1);
        }

        &-text {
            font-size: 18px;
        }
    }

    &__body {
        &-text {
            margin-bottom: calc(var(--gs) * 3);

            & a {
                display: inline;
                font-size: 20px;
                font-weight: bold;
                color: var(--cl-red);
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
        }
    }
}
</style>
