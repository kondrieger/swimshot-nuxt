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
                v-for="(pool, index) in poolsArr"
                :key="index"
                :to="pool.href"
                :style="{ 'background-image': 'url(' + pool.pic + ')' }"
                class="pools__list-item"
                :class="{ 'pools__list-item--new': pool.new }"
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
            <a href="https://vk.com/swim_shot/" target="_blank" class="pools__list-item pools__list-item--empty">
                <Question class="pools__list-item-icon" />
                <div class="pools__list-item-text">
                    <VButton wide text="СЛЕДИ ЗА НОВОСТЯМИ" />
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import ScheduleLink from '~/components/ScheduleLink/ScheduleLink.vue';

import orbita from '~/assets/jpg/pools/pool_orbita_3.jpg';
import ph1801 from '~/assets/jpg/pools/1801.jpg';

import Question from '~/assets/svg/question.svg';
import NewBadge from '~/assets/svg/new-badge.svg';
import House from '~/assets/svg/house.svg';

import './styles.css';

const poolsArr = [
    {
        title: 'Бассейн Swim Shot',
        subtitle: 'Зеленоград',
        pic: ph1801,
        href: '/zelenograd',
        badge: 'свободное плавание',
        home: true,
    },
    {
        title: 'СК Орбита',
        subtitle: 'Зеленоград',
        pic: orbita,
        href: '/orbita',
        badge: 'для самых маленьких',
    },
];

export default {
    name: 'PoolList',
    components: { VButton, Question, NewBadge, House, ScheduleLink },
    data() {
        return {
            poolsArr,
        };
    },
};
</script>
