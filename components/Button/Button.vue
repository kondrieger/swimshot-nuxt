<template>
    <button
        :class="`btn ${black ? `btn--black` : ''} ${wide ? 'btn--wide' : ''} ${sm ? 'btn--sm' : ''} ${
            modal ? 'btn--modal' : ''
        } ${animated ? 'btn--animated' : ''}`"
        @click="onClick"
    >
        {{ text }}
    </button>
</template>

<script>
import './styles.css';

export default {
    name: 'a-button',
    props: {
        text: {
            type: String,
            default: '',
        },
        onClick: {
            type: Function,
            default: () => {},
        },
        black: {
            type: Boolean,
            default: false,
        },
        wide: {
            type: Boolean,
            default: false,
        },
        sm: {
            type: Boolean,
            default: false,
        },
        modal: {
            type: Boolean,
            default: false,
        },
        animated: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
