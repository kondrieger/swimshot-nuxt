<template>
    <vue-modaltor
        :visible="open"
        @hideModal="hideModal"
        :closeScroll="false"
        defaultWidth="660px"
        :resize-width="{ 768: '100%' }"
        :animation-panel="'modal-slide-bottom'"
        :bg-overlay="'rgba(0,0,0,0.3)'"
    >
        <template #header>
            <div class="modal__header">
                <div @click="hideModal" class="modal__close-btn"></div>
            </div>
        </template>
        <template #body>
            <div class="comments__item">
                <p class="comments__item-comment">
                    <span>{{ comment.text }}</span>
                </p>
                <div class="comments__item-text-wrap">
                    <img class="comments__item-pic" :src="comment.pic" alt="" />
                    <div class="comments__item-text">
                        <p class="comments__item-name">{{ comment.name }} — {{ comment.relation }}</p>
                        <a
                            target="_blank"
                            class="comments__item-inst"
                            :href="`https://www.instagram.com/${comment.inst}`"
                            >@{{ comment.inst }}</a
                        >
                    </div>
                </div>
            </div>
        </template>
    </vue-modaltor>
</template>

<script>
export default {
    name: 'modal',
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        comment: Object,
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
.modal {
    &__close-btn {
        position: absolute;
        right: 25px;
        top: 25px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        cursor: pointer;

        @media (--tablet) {
            top: 10px;
            right: 10px;
        }

        &:hover {
            opacity: 1;
        }

        &:before,
        &:after {
            position: absolute;
            left: 15px;
            content: '';
            height: 33px;
            width: 2px;
            background-color: #333;
        }

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }
    }
}
.modaltor__panel {
    padding: 65px 55px;
    background-color: #fff !important;

    @media (--tablet) {
        padding: 55px 20px;
    }
}
</style>
