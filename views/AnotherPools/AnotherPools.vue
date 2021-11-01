<template>
    <div class="container another-pools">
        <h2 data-aos="fade-right" data-aos-once="true">Другие наши <span class="blue">бассейны</span></h2>
        <div class="another-pools__list" data-aos="fade-up" data-aos-once="true">
            <nuxt-link
                v-for="(pool, index) in PoolsArr"
                :key="index"
                :to="pool.href"
                :style="{ 'background-image': 'url(' + pool.pic + ')' }"
                class="another-pools__list-item"
            >
                <div class="another-pools__list-item-text">
                    <p class="another-pools__list-item-text-title">
                        {{ pool.title }}
                        <span class="another-pools__list-item-text-subtitle">, {{ pool.subtitle }}</span>
                    </p>
                    <VButton wide text="ПОДРОБНОСТИ" />
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';

import './styles.css';

export default {
    components: { VButton },
    props: {
        PoolsArr: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
