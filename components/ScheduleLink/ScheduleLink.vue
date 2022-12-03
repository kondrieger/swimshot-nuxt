<template>
    <nuxt-link :to="linkAddress" class="container schedule-link">
        <Timetable class="schedule-link__img" />
        <h2 class="text-header schedule-link__text">{{ linkText }}</h2>
    </nuxt-link>
</template>

<script>
import './styles.css';

import Timetable from '~/assets/svg/timetable.svg';
export default {
    components: { Timetable },
    props: {
        text: {
            type: String,
            default: null,
        },
        pool: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            linkText: this.text || 'Ознакомиться с расписанием',
            linkAddress: `/orbita${this.pool ? '?pool=zelenograd' : ''}`,
        };
    },
};
</script>

<style>
</style>
