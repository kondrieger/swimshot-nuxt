<template>
    <div>
        <StartBlock />
        <Features />
        <PoolList />
        <Team />
        <NewTeam />
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
import NewTeam from '~/views/NewTeam/NewTeam.vue';
import Photos from '~/views/Photos/Photos.vue';
import FAQ from '~/views/FAQ/FAQ.vue';
import PoolList from '~/views/PoolList/PoolList.vue';
import Comments from '~/views/Comments/Comments.vue';

export default {
    components: {
        StartBlock,
        Media,
        Features,
        Team,
        NewTeam,
        Photos,
        FAQ,
        PoolList,
        Comments,
    },
};
</script>
