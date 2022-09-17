<template>
    <vue-modaltor
        :visible="open"
        @hideModal="hideModal"
        defaultWidth="560px"
        :resize-width="{ 768: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <div @click="hideModal" class="modal__close-btn"></div>
                <h4 class="modal__header-text">НУЖЕН ОБРАТНЫЙ ЗВОНОК?</h4>
                <p class="modal__header-subtext">Оставь свой номер и мы перезвоним</p>
            </div>
        </template>
        <template #body>
            <div></div>
        </template>
    </vue-modaltor>
</template>

<script>
export default {
    name: 'modal',
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
