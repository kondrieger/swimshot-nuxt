<template>
    <div>
        <Schedule @trainerClick="onTrainerClick" />
        <ScheduleSales id="sales" />
        <div class="bg-grey">
            <Team :currentTrainer="currentTrainer" @modalOpen="onModalContactOpen" />
        </div>
    </div>
</template>

<script>
import Schedule from '~/views/Schedule/Schedule.vue';
import ScheduleSales from '~/views/Schedule/ScheduleSales/ScheduleSales.vue';
import Team from '~/views/Team/Team.vue';

export default {
    layout: 'default',

    components: {
        Team,
        Schedule,
        ScheduleSales,
    },

    data() {
        return {
            currentTrainer: null,
        };
    },

    methods: {
        onTrainerClick(name) {
            this.currentTrainer = name;
        },

        onModalContactOpen(name = null) {
            this.$parent.$emit('modalOpen', name);
        },
    },
};
</script>
