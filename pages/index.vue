<template>
    <div>
        <StartBlock />
        <Features />
        <PoolList />
        <Team />
        <Comments />
        <FAQ />
        <Media />
        <Photos />

        <ModalBlackFriday :open="isFridayModalOpen" @closeModal="onCloseModal" />
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

import ModalBlackFriday from '~/components/Modal/BlackFriday.vue';

export default {
    components: {
        StartBlock,
        Media,
        Features,
        Team,
        Photos,
        FAQ,
        PoolList,
        Comments,
        ModalBlackFriday,
    },

    data() {
        return {
            isFridayModalOpen: false,
        };
    },

    methods: {
        onCloseModal() {
            this.isFridayModalOpen = false;
        },
    },

    mounted() {
        setTimeout(() => {
            this.isFridayModalOpen = true;
        }, 1000);
    },
};
</script>
