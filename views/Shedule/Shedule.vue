<template>
    <div class="container shedule">
        <h2 class="media__title" data-aos="fade-right" data-aos-once="true">
            Расписание <span class="blue">занятий</span>
        </h2>
        <h3 class="media__text">Расписание групповых занятий. Выбирай свою группу и количество занятий.</h3>
        <div class="shedule__select-wrap">
            <VSelect
                class="shedule__select"
                :options="groups"
                v-model="group"
                :searchable="false"
                @input="
                    () => {
                        this.times = null;
                    }
                "
                >Группа</VSelect
            >
            <VSelect
                v-if="computedTimes"
                class="shedule__select"
                :options="computedTimes"
                v-model="times"
                :searchable="false"
                >Количество занятий</VSelect
            >
        </div>
        <div class="shedule__select-wrap">фывфвыфыв</div>
    </div>
</template>

<script>
import { groups, times, shedules } from '~/static/js/sheduleZelenograd.js';
import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import './styles.css';

export default {
    props: {
        shedule: {
            type: Object,
            default: () => {},
        },
    },
    components: {
        VSelect,
    },
    data() {
        return {
            groups,
            timez: times,
            group: null,
            times: null,
        };
    },
    computed: {
        computedTimes() {
            if (this.group) {
                const times = this.timez.find((time) => time.id === this.group.id);
                return times && times.times;
            }

            return false;
        },
    },
};
</script>

<style>
</style>
