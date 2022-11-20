<template>
    <div :class="`alert ${theme ? `alert--${theme}` : ''} `">
        <slot />
    </div>
</template>

<script>
import './styles.css';
export default {
    name: 'alert',
    props: {
        theme: {
            type: String,
            default: null,
        },
    },
};
</script>

<style>
</style>
