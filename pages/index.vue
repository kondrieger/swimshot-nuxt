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
        <ModalNewYear :open="isNewYearModalOpen" @closeModal="onCloseNewYearModal" />
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
import ModalNewYear from '~/components/Modal/NewYear.vue';

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
        ModalNewYear,
    },
    data() {
        return {
            isNewYearModalOpen: false,
        };
    },
    methods: {
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
