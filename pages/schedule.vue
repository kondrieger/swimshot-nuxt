<template>
    <div>
        <div class="bg-grey">
            <Schedule />
        </div>
        <PoolList />
        <div class="bg-grey">
            <Team @modalOpen="onModalContactOpen" />
        </div>
    </div>
</template>

<script>
import Schedule from '~/views/Schedule/Schedule.vue';
import Team from '~/views/Team/Team.vue';
import PoolList from '~/views/PoolList/PoolList.vue';

export default {
    layout: 'default',

    components: {
        Team,
        PoolList,
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
