<template>
    <div class="bg-grey" id="pools-list">
        <div class="container pools">
            <h2 data-aos="fade-right" data-aos-once="true">Бассейны</h2>
            <div class="pools__list" data-aos="fade-up" data-aos-once="true">
                <nuxt-link
                    v-for="(pool, index) in poolsArr"
                    :key="index"
                    :to="pool.href"
                    :style="{ 'background-image': 'url(' + pool.pic + ')' }"
                    class="pools__list-item"
                    :class="{ 'pools__list-item--new': pool.new }"
                >
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

import orbita from '~/assets/jpg/pools/pool_orbita.jpg';
import butovo from '~/assets/jpg/pools/pool_butovo.jpg';
import malino from '~/assets/jpg/pools/pool_malino.jpg';
import Question from '~/assets/svg/question.svg';
import NewBadge from '~/assets/svg/new-badge.svg';

import './styles.css';

const poolsArr = [
    {
        title: 'ФОК Южное Бутово',
        subtitle: 'Москва',
        pic: butovo,
        href: '/butovo',
        new: true,
    },
    {
        title: 'СК Орбита',
        subtitle: 'Зеленоград',
        pic: orbita,
        href: '/orbita',
    },
    {
        title: 'СК Малино',
        subtitle: 'Зеленоград',
        pic: malino,
        href: '/malino',
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
