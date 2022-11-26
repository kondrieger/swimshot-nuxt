<template>
    <div class="spinner">
        <div v-if="state.isLoading" class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <template v-else-if="state.loaded">
            <h3 class="text-success spinner__title">Заявка отправлена!</h3>
            <p class="contact-form__contacts-item-title text-success spinner__text">
                Не убирай телефон далеко, менеджер скоро перезвонит для уточнения деталей
            </p>

            <div @click="onCloseFormLoad">
                <VButton success text="Жду звонка" />
            </div>
        </template>

        <template v-else-if="state.errored">
            <h3 class="text-danger spinner__title">Произошла ошибка :(</h3>
            <p class="contact-form__contacts-item-title text-danger spinner__text">
                Если у тебя все хорошо с интернет-соединением, значит, наши шарики заехали за ролики,<br />
                и мы их уже чиним. <br /><br />Повтори попытку позднее
            </p>

            <div @click="onCloseFormLoad">
                <VButton danger text="Давайте быстрее" />
            </div>
        </template>
    </div>
</template>

<script>
import './styles.css';
import VButton from '~/components/VButton/VButton.vue';

export default {
    name: 'FormLoad',
    components: { VButton },

    props: {
        state: {
            type: Object,
            default: () => {},
        },
    },

    methods: {
        onCloseFormLoad() {
            this.$emit('closeFormLoad');
        },
    },
};
</script>
