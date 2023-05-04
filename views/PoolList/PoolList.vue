<template>
    <div class="container pools" id="pools-list">
        <h2 class="text-header" data-aos="fade-right">Бассейны</h2>
        <h3 class="text-subheader" data-aos="fade-right">
            Занятия проходят от одного до четырех раз в неделю по 45-90 минут в трех бассейнах Зеленограда. Температура
            и качество воды комфортные для плавания в любом возрасте. Переходи на страницу бассейна ниже, и выбери
            наиболее подходящий для тебя по расположению, стоимости и прочим условиям
        </h3>
        <ScheduleLink border />
        <div class="pools__list" data-aos="fade-up">
            <nuxt-link
                v-for="(pool, index) in computedArr"
                :key="index"
                :to="pool.href"
                :style="{ 'background-image': 'url(' + pool.pic + ')' }"
                class="pools__list-item"
                :class="{ 'pools__list-item--new': pool.new, 'pool-disabled': isPoolDisabled(pool) }"
            >
                <span v-if="pool.badge" class="card-badge" :class="{ 'card-badge--black': pool.badgeBlack }">{{
                    pool.badge
                }}</span>
                <NewBadge v-if="pool.new" class="pools__list-item-new-badge" />
                <House v-if="pool.home" class="pools__list-item-home-badge" />
                <div class="pools__list-item-text">
                    <p class="pools__list-item-text-title">
                        {{ pool.title }}<span class="pools__list-item-text-subtitle">, {{ pool.subtitle }}</span>
                    </p>
                    <VButton wide text="ПОДРОБНОСТИ" />
                </div>
            </nuxt-link>
            <a
                v-if="computedArr.length < 3"
                href="https://vk.com/swim_shot/"
                target="_blank"
                class="pools__list-item pools__list-item--empty"
            >
                <Question class="pools__list-item-icon" />
                <div class="pools__list-item-text">
                    <VButton wide text="СЛЕДИ ЗА НОВОСТЯМИ" />
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import locationMixin from '~/static/js/locationMixin.js';
import { poolsList } from '~/static/js/poolsInfo.js';

import VButton from '~/components/VButton/VButton.vue';
import ScheduleLink from '~/components/ScheduleLink/ScheduleLink.vue';

import Question from '~/assets/svg/question.svg';
import NewBadge from '~/assets/svg/new-badge.svg';
import House from '~/assets/svg/house.svg';

import './styles.css';

export default {
    name: 'PoolList',
    components: { VButton, Question, NewBadge, House, ScheduleLink },
    mixins: [locationMixin],

    data() {
        return {
            poolsList,
        };
    },

    computed: {
        computedArr() {
            if (this.isEkb) {
                return [...poolsList.filter((pool) => pool.isEkb), ...poolsList.filter((pool) => !pool.isEkb)];
            }

            if (this.isMsk) {
                return [...poolsList.filter((pool) => pool.isMsk), ...poolsList.filter((pool) => !pool.isMsk)];
            }

            return poolsList;
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
