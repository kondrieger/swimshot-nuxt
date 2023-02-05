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
        <ModalSocialSale :open="isModalSocialSaleOpen" @closeModal="onCloseModalSocialSale" />
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
import ModalSocialSale from '~/components/Modal/SocialSale.vue';

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
        ModalSocialSale,
    },

    data() {
        return {
            isModalSocialSaleOpen: false,
        };
    },

    methods: {
        onModalContactOpen(name = null) {
            this.$parent.$emit('modalOpen', name);
        },

        onOpenModalSocialSale() {
            this.isModalSocialSaleOpen = true;
        },
        onCloseModalSocialSale() {
            this.isModalSocialSaleOpen = false;
        },
    },

    mounted() {
        setTimeout(() => {
            this.onOpenModalSocialSale();
        }, 1000);
    },
};
</script>
