<template>
    <div class="bg-grey" id="pools-list">
        <div class="container pools">
            <h2 class="media__title" data-aos="fade-right" data-aos-once="true">Бассейны</h2>
            <h3 class="media__text">
                Занятия проходят от одного до четырех раз в неделю по 45-90 минут в двух бассейнах Зеленограда.
                Температура и качество воды комфортные для плавания в любом возрасте. Переходи на страницу бассейна
                ниже, и ознакомься с услугами, ценами и прочими условиями каждого из них
            </h3>
            <div class="pools__list" data-aos="fade-up" data-aos-once="true">
                <nuxt-link
                    v-for="(pool, index) in poolsArr"
                    :key="index"
                    :to="pool.href"
                    :style="{ 'background-image': 'url(' + pool.pic + ')' }"
                    class="pools__list-item"
                    :class="{ 'pools__list-item--new': pool.new }"
                >
                    <span v-if="pool.badge" class="pools__list-item-free-badge">{{ pool.badge }}</span>
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
                    href="https://www.instagram.com/swim_shot/"
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
    </div>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';

import orbita from '~/assets/jpg/pools/pool_orbita.jpg';
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
        new: true,
    },
];

export default {
    name: 'PoolList',
    components: { VButton, Question, NewBadge, House },
    data() {
        return {
            poolsArr,
        };
    },
};
</script>
