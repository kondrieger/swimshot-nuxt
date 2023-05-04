<template>
    <div class="container another-pools">
        <h2 class="text-header" data-aos="fade-right">Другие наши <span class="blue">бассейны</span></h2>
        <div class="another-pools__list" data-aos="fade-up">
            <nuxt-link
                v-for="(pool, index) in computedArr"
                :key="index"
                :to="pool.href"
                :style="{ 'background-image': 'url(' + pool.pic + ')' }"
                class="another-pools__list-item"
                :class="{ 'pool-disabled': isPoolDisabled(pool) }"
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
import locationMixin from '~/static/js/locationMixin.js';

import VButton from '~/components/VButton/VButton.vue';

import './styles.css';

export default {
    components: { VButton },
    mixins: [locationMixin],

    props: {
        PoolsArr: {
            type: Array,
            default: () => [],
        },
    },

    computed: {
        computedArr() {
            if (this.isEkb) {
                return [...this.PoolsArr.filter((pool) => pool.isEkb), ...this.PoolsArr.filter((pool) => !pool.isEkb)];
            }

            if (this.isMsk) {
                return [...this.PoolsArr.filter((pool) => pool.isMsk), ...this.PoolsArr.filter((pool) => !pool.isMsk)];
            }

            return this.PoolsArr;
        },
    },

    methods: {
        isPoolDisabled(pool) {
            if (this.isEkb) return pool.isMsk;
            if (this.isMsk) return pool.isEkb;

            return false;
        },
    },
};
</script>
