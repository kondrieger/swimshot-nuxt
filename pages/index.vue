<template>
    <div>
        <StartBlock @modalOpen="onModalContactOpen" />
        <Features @modalOpen="onModalContactOpen" />
        <div class="bg-grey">
            <PoolList />
        </div>
        <Team @modalOpen="onModalContactOpen" />
        <Comments />
        <FAQ />
        <Media />
        <Photos />

        <ModalDoors :open="isModalDoorsOpen" @closeModal="onCloseModalDoors" />
    </div>
</template>

<script>
import StartBlock from '~/views/StartBlock/StartBlock.vue';
import Features from '~/views/Features/Features.vue';
import Media from '~/views/Media/Media.vue';
import Team from '~/views/Team/Team.vue';
import Photos from '~/views/Photos/Photos.vue';
import FAQ from '~/views/FAQ/FAQ.vue';
import PoolList from '~/views/PoolList/PoolList.vue';
import Comments from '~/views/Comments/Comments.vue';

import DoorsModal from '~/components/Modal/Doors.vue';

export default {
    layout: 'default',

    components: {
        StartBlock,
        Media,
        Features,
        Team,
        Photos,
        FAQ,
        PoolList,
        Comments,
        DoorsModal,
    },

    data() {
        return {
            isModalDoorsOpen: false,
        };
    },

    methods: {
        onModalContactOpen(name = null) {
            this.$parent.$emit('modalOpen', name);
        },

        onOpenModalDoors() {
            this.isModalDoorsOpen = true;
        },
        onCloseModalDoors() {
            this.isModalDoorsOpen = false;
        },
    },

    mounted() {
        setTimeout(() => {
            this.onOpenModalDoors();
        }, 1000);
    },
};
</script>
