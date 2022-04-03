<template>
    <div>
        <Shedule />
        <StartBlock />
        <Features />
        <PoolList />
        <Team />
        <Comments />
        <FAQ />
        <Media />
        <Photos />
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
import Shedule from '~/views/Shedule/Shedule.vue';

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
        Shedule,
    },
};
</script>
