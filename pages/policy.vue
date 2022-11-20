<template>
    <div class="container policy">
        <img
            class="policy__item"
            v-for="(page, index) in policyArr"
            :key="index"
            :src="page"
            alt="Политика конфиденциальности"
        />
    </div>
</template>

<script>
import p1 from '~/assets/jpg/policy/1.jpg';
import p2 from '~/assets/jpg/policy/2.jpg';
import p3 from '~/assets/jpg/policy/3.jpg';
import p4 from '~/assets/jpg/policy/4.jpg';
import p5 from '~/assets/jpg/policy/5.jpg';
import p6 from '~/assets/jpg/policy/6.jpg';
import p7 from '~/assets/jpg/policy/7.jpg';

const policyArr = [p1, p2, p3, p4, p5, p6, p7];

export default {
    name: 'policy-page',
    layout: 'policy',
    data() {
        return {
            policyArr,
        };
    },
};
</script>

<style>
.policy {
    background-color: #f5f5f5;
    padding-bottom: 300px;

    &__item {
        display: block;
        max-width: 100% !important;
        margin-bottom: var(--gs);

        & + & {
            margin-top: var(--gs);
        }
    }
}
</style>
