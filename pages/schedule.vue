<template>
    <div>
        <div class="bg-grey">
            <Schedule />
        </div>
        <Team @modalOpen="onModalContactOpen" />
    </div>
</template>

<script>
import Schedule from '~/views/Schedule/Schedule.vue';
import Team from '~/views/Team/Team.vue';

export default {
    layout: 'default',

    components: {
        Team,
        Schedule,
    },

    data() {
        return {};
    },

    methods: {
        onCloseModal() {},

        onModalContactOpen(name = null) {
            this.$parent.$emit('modalOpen', name);
        },
    },
};
</script>
