<template>
    <div>
        <Header />
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';

export default {
    components: {
        Header,
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 1000);
        });
    },
};
</script>
