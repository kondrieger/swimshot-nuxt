<template>
    <nuxt-link :to="linkAddress" data-aos="fade-up" class="schedule-link" :class="{ border }">
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
        border: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            linkText: this.text || 'Ознакомиться с расписанием',
            linkAddress: '/schedule' + (this.pool ? `?pool=${this.pool}` : ''),
        };
    },
};
</script>

<style>
</style>
