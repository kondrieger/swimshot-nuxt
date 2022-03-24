<template>
    <div class="bg-grey" id="pools-list">
        <div class="container pools">
            <h2 class="media__title" data-aos="fade-right" data-aos-once="true">Бассейны</h2>
            <h3 class="media__text">
                Занятия по обучению плаванию проходят 1-3 раза в неделю по 45 мин. на выделенных дорожках. <br />
                Приглашаем тебя в комфортные бассейны с чистой водой и температурой 28ºС
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
                    <span v-if="pool.free" class="pools__list-item-free-badge">свободное плавание</span>
                    <NewBadge v-if="pool.new" class="pools__list-item-new-badge" />
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

import ph1801 from '~/assets/jpg/pools/1801.jpg';
import Question from '~/assets/svg/question.svg';
import NewBadge from '~/assets/svg/new-badge.svg';

import './styles.css';

const poolsArr = [
    {
        title: 'Бассейн Swim Shot',
        subtitle: 'Зеленоград',
        pic: ph1801,
        href: '/zelenograd',
        free: true,
    },
];

export default {
    name: 'PoolList',
    components: { VButton, Question, NewBadge },
    data() {
        return {
            poolsArr,
        };
    },
};
</script>
