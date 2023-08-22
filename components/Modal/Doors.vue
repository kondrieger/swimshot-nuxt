<template>
    <vue-modaltor
        :visible="open || isOpen"
        :closeScroll="false"
        @closeModal="closeModal"
        class="modal-doors"
        defaultWidth="800px"
        :resize-width="{ 960: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal-doors__header">
                <div @click="closeModal" class="modal__close-btn"></div>
                <h4 class="modal-doors__header-title">ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ В ШКОЛЕ ПЛАВАНИЯ</h4>
            </div>
        </template>
        <template #body :style="{}">
            <div class="modal-doors__body">
                <div class="modal-doors__body-text">
                    <span class="modal-doors__body-text-title">26-27 августа, 2 сентября</span><br />
                    Только по предзаписи ты можешь получить бесплатную тренировку и выиграть годовой абонемент
                </div>

                <a
                    class="btn modal-doors__body-btn"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfXkBCJ5merT1dd5T9k7nmG8O99zgFTq27ZDytrKk0T39krcg/viewform"
                    target="_blank"
                    @click="closeModal"
                >
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </a>

                <Logo class="modal-doors__logo" />
            </div>
        </template>
    </vue-modaltor>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';

import Logo from '~/assets/svg/logo.svg';

export default {
    name: 'DoorsModal',
    components: { VButton, Logo },
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
.modal-doors {
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
            opacity: 1;
            z-index: -1;
            background: url('~/assets/jpg/modal_doors_bg.jpg');
            background-position: -50px 0;
            background-size: cover;
            background-repeat: no-repeat;
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
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: calc(var(--gs) * 2);

        @media (--tablet) {
            margin-bottom: calc(var(--gs) * 1);
        }

        &-title {
            color: var(--cl-violet);
            font-size: 40px;
            line-height: 1.2;
            text-align: center;

            @media (--tablet) {
                font-size: 30px;
            }
        }
    }

    &__body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 100%;

        &-text {
            color: var(--cl-violet);
            background-color: var(--cl-pink);
            border-radius: 20px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            padding: var(--gs);
            max-width: 355px;
            text-align: center;
            font-weight: bold;
            line-height: 1.3;
            font-size: 18px;
            margin-bottom: calc(var(--gs) * 3);

            @media (--tablet) {
                margin-bottom: calc(var(--gs) * 2);
                font-size: 16px;
            }

            &-title {
                font-size: 26px;
                margin-bottom: var(--gs);
                font-weight: 800;

                @media (--tablet) {
                    margin-bottom: calc(var(--gs) * 2);
                    font-size: 22px;
                }
            }
        }

        &-btn {
            color: var(--cl-pink) !important;
            background-color: var(--cl-violet);
            width: 230px;
            height: 65px;

            &:hover {
                color: #fff !important;
            }

            @media (--tablet) {
                height: 55px;
            }
        }
    }

    &__logo {
        position: absolute;
        width: 300px;
        height: 300px;
        z-index: -1;
        bottom: 0;
        right: 0;

        @media (--tablet) {
            width: 120px;
            height: 120px;
        }
    }
}
</style>
