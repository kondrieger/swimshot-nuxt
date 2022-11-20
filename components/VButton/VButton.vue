<template>
    <button
        :class="`btn ${black ? `btn--black` : ''} ${wide ? 'btn--wide' : ''} ${sm ? 'btn--sm' : ''} ${
            animated ? 'btn--animated' : ''
        }`"
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

        animated: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
