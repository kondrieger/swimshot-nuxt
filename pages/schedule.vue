<template>
    <div>
        <Schedule @trainerClick="onTrainerClick" />
        <ScheduleSales id="sales" />
        <div class="bg-grey">
            <Team :currentTrainer="currentTrainer" @modalOpen="onModalContactOpen" />
        </div>
        <ModalNewYear :open="isNewYearModalOpen" @closeModal="onCloseNewYearModal" />
    </div>
</template>

<script>
import Schedule from '~/views/Schedule/Schedule.vue';
import ScheduleSales from '~/views/Schedule/ScheduleSales/ScheduleSales.vue';
import Team from '~/views/Team/Team.vue';
import ModalNewYear from '~/components/Modal/NewYear.vue';

export default {
    layout: 'default',

    components: {
        Team,
        Schedule,
        ScheduleSales,
        ModalNewYear,
    },

    data() {
        return {
            currentTrainer: null,
            isNewYearModalOpen: false,
        };
    },

    methods: {
        onTrainerClick(name) {
            this.currentTrainer = name;
        },

        onModalContactOpen(name = null) {
            this.$parent.$emit('modalOpen', name);
        },

        onOpenModalNewYear() {
            this.isNewYearModalOpen = true;
        },

        onCloseNewYearModal() {
            this.isNewYearModalOpen = false;
        },
    },

    mounted() {
        setTimeout(() => {
            this.onOpenModalNewYear();
        }, 7000);
    },
};
</script>
