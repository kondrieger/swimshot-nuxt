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
        <ModalMarchSale :open="isModalMarchSaleOpen" @closeModal="onCloseModalMarchSale" />
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
import MarchSale from '~/components/Modal/MarchSale.vue';

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
        MarchSale,
    },

    data() {
        return {
            isModalMarchSaleOpen: false,
        };
    },

    methods: {
        onModalContactOpen(name = null) {
            this.$parent.$emit('modalOpen', name);
        },

        onOpenModalMarchSale() {
            this.isModalMarchSaleOpen = true;
        },

        onCloseModalMarchSale() {
            this.isModalMarchSaleOpen = false;
        },
    },

    mounted() {
        setTimeout(() => {
            this.onOpenModalMarchSale();
        }, 1000);
    },
};
</script>
