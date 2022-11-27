<template>
    <div class="container schedule">
        <h1>Расписание</h1>

        <h2 class="text-header" data-aos="fade-right">Расписание <span class="blue">занятий</span></h2>

        <p class="text-subheader" data-aos="fade-right">
            Выбирай свободное плавание или группу и количество занятий в неделю. Занятие длится
            <span class="blue">45 минут</span>. <br />Для уточнения расписания индивидуальных тренировок свяжись по
            телефону или оставь заявку на сайте.
        </p>

        <div class="schedule__list">
            <div
                v-for="(pool, index) in poolsArr"
                :key="index"
                :style="{ 'background-image': 'url(' + pool.pic + ')' }"
                class="schedule__list-item"
                :class="{
                    'js-active': active.pool === pool.id,
                    'not-active': active.pool !== pool.id && active.pool !== null,
                }"
                @click="onActivePoolChange(pool.id)"
            >
                <div class="schedule__list-item-text">
                    <p class="schedule__list-item-text-title">
                        <nuxt-link :to="pool.href" target="_blank" class="schedule__list-item-link">
                            {{ pool.title }}
                        </nuxt-link>

                        <span class="schedule__list-item-text-subtitle">, {{ pool.subtitle }}</span>
                    </p>
                </div>
            </div>
        </div>

        <div v-if="active.pool" class="schedule__list">
            <div
                v-for="(age, index) in activeAgeOptions"
                :key="index"
                class="schedule__list-item schedule__list-item--sm"
                data-aos="fade-up"
                :class="{
                    'js-active': active.age === age,
                    'not-active': active.age !== age && active.age !== null,
                }"
                @click="onActiveAgeChange(age)"
            >
                <template v-if="age === 'children'">
                    <BoyIcon class="schedule__list-item-icon" />
                    <p class="schedule__list-item-age-text">Дети</p>
                </template>

                <template v-else-if="age === 'adults'">
                    <PersonIcon class="schedule__list-item-icon" />
                    <p class="schedule__list-item-age-text">Взрослые</p>
                </template>
            </div>
        </div>

        <div v-if="active.age" class="schedule__list">
            <div
                v-for="(type, index) in activeTypeOptions"
                :key="index"
                class="schedule__list-item schedule__list-item--sm"
                data-aos="fade-up"
                :class="{
                    'js-active': active.type === type,
                    'not-active': active.type !== type && active.type !== null,
                }"
                @click="onActiveTypeChange(type)"
            >
                <template v-if="type === 'group'">
                    <CrowdIcon class="schedule__list-item-icon" />
                    <p class="schedule__list-item-age-text">Групповые</p>
                </template>

                <template v-else-if="type === 'personal'">
                    <BoyTrainerIcon class="schedule__list-item-icon" />

                    <p class="schedule__list-item-age-text">Персональные</p>
                </template>

                <template v-else-if="type === 'free'">
                    <PersonHandsIcon class="schedule__list-item-icon" />

                    <p class="schedule__list-item-age-text">Свободное плавание</p>
                </template>
            </div>
        </div>

        <div class="schedule__select-wrap schedule__container" v-if="activeGroupOptions" data-aos="fade-up">
            <Treeselect
                class="schedule__select"
                :options="activeGroupOptions"
                v-model="active.group"
                :default-expand-level="1"
                placeholder="Вид занятий"
                @select="() => {}"
                :disable-branch-nodes="true"
                :searchable="false"
                :is-default-expanded="true"
            />
            <!--
            <Treeselect
                v-if="computedTimes"
                class="schedule__select"
                :options="computedTimes"
                placeholder="Количество занятий"
                v-model="times"
                :searchable="false"
            /> -->
        </div>

        <div class="schedule__table" v-if="activeGroup">
            <h3 class="text-subheader schedule__table-title" data-aos="fade-up">{{ activeGroup.label }}</h3>
            <p class="text-subheader schedule__table-subtitle" data-aos="fade-up">{{ activeGroup.info }}</p>

            <div class="schedule__table-list" v-if="activeGroup.groupDays">
                <div
                    class="schedule__table-list-item"
                    v-for="item in activeGroup.groupDays"
                    :key="item.id"
                    data-aos="fade-up"
                >
                    <div class="schedule__table-list-item-wrap">
                        <p class="text-bold">{{ weekDays[item.id] }}</p>
                        <p class="blue">{{ item.time.join(' ') }}</p>
                    </div>

                    <div v-if="item.trainer" class="schedule__table-list-item-wrap">
                        <p>Тренер:</p>
                        <a class="js-link" href="#team">{{ item.trainer }}</a>
                    </div>
                </div>
            </div>

            <div class="schedule__table-price-wrap">
                <div
                    class="schedule__table-price"
                    v-if="active.type === 'group' && activeGroup.price.group"
                    data-aos="fade-up"
                >
                    <p class="text-subheader schedule__table-price-title">
                        <span class="text-bold">Групповые тренировки.</span><br />
                        Стоимость в это время и дни за месяц
                    </p>

                    <div class="schedule__table-price-list">
                        <div
                            class="schedule__table-price-list-item"
                            v-for="price in activeGroup.price.group"
                            :key="price.id"
                        >
                            <p class="schedule__table-price-list-item-times">
                                <span v-if="price.id === 1">Один раз</span>
                                <span v-if="price.id === 2">Два раза</span>
                                <span v-if="price.id === 3">Три раза</span> в неделю
                            </p>
                            <p class="schedule__table-price-list-item-amount">
                                <span class="blue">{{ price.amount }}</span> р/мес
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="schedule__table-price"
                    v-if="active.type === 'personal' && activeGroup.price.personal"
                    data-aos="fade-up"
                >
                    <p class="text-subheader schedule__table-price-title">Стоимость в это время и дни за месяц</p>

                    <div class="schedule__table-price-list">
                        <div
                            class="schedule__table-price-list-item"
                            v-for="price in activeGroup.price.group"
                            :key="price.id"
                        >
                            <p class="schedule__table-price-list-item-times">
                                <span v-if="price.id === 1">Один раз</span>
                                <span v-if="price.id === 2">Два раза</span>
                                <span v-if="price.id === 3">Три раза</span> в неделю
                            </p>
                            <p class="schedule__table-price-list-item-amount">
                                <span class="blue">{{ price.amount }}</span> р/мес
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h3 v-else class="text-subheader schedule__title" data-aos="fade-up">
            Выбери группу, чтобы увидеть расписание
        </h3>
    </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';

// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css';
import './styles.css';

import orbita from '~/assets/jpg/pools/pool_orbita_3.jpg';
import ph1801 from '~/assets/jpg/pools/1801.jpg';

import PersonIcon from '~/assets/svg/person.svg';
import BoyIcon from '~/assets/svg/boy.svg';
import CrowdIcon from '~/assets/svg/crowd.svg';
import PersonHandsIcon from '~/assets/svg/person-hands.svg';
import BoyTrainerIcon from '~/assets/svg/boy-trainer.svg';

import { schedule } from '~/static/js/poolsInfo.js';

const poolsArr = [
    {
        id: 'zelenograd',
        title: 'Бассейн Swim Shot',
        subtitle: 'Зеленоград',
        pic: ph1801,
        href: '/zelenograd',
    },
    {
        id: 'orbita',
        title: 'СК Орбита',
        subtitle: 'Зеленоград',
        pic: orbita,
        href: '/orbita',
    },
];

const defaultActive = {
    pool: 'zelenograd',
    age: 'adults',
    type: 'group',
    group: 'aerobics',
};

const weekDays = {
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Сб',
    7: 'Вс',
};

export default {
    components: {
        Treeselect,

        PersonIcon,
        BoyIcon,
        CrowdIcon,
        PersonHandsIcon,
        BoyTrainerIcon,
    },

    data() {
        return {
            schedule,
            poolsArr,
            weekDays,

            active: { ...defaultActive },
        };
    },

    methods: {
        onActivePoolChange(pool) {
            const { pool: activePool } = this.active;
            this.active = { ...defaultActive };

            if (activePool === pool) {
                this.active.pool = null;
            } else {
                this.active.pool = pool;
            }
        },

        onActiveAgeChange(age) {
            this.active.type = null;

            if (this.active.age === age) {
                this.active.age = null;
            } else {
                this.active.age = age;
            }
        },

        onActiveTypeChange(type) {
            this.active.group = null;

            if (this.active.type === type) {
                this.active.type = null;
            } else {
                this.active.type = type;
            }
        },
    },
    computed: {
        activePool() {
            return schedule.pools.find((p) => p.id === this.active.pool);
        },

        /**
         * Возрастные группы выбранного бассейна
         */
        activeAgeOptions() {
            const { children = null, adults = null } = this.activePool;
            const agesArr = [];

            // Если в js файле есть контент в этих полях, значит, возвращаем элемент
            if (children) agesArr.push('children');
            if (adults) agesArr.push('adults');

            return agesArr;
        },

        /**
         * Тип тренировок для выбора
         */
        activeTypeOptions() {
            const { age } = this.active;
            const typesArr = [];

            if (this.activeAgeOptions.includes(age))
                this.activePool[age]?.forEach((i) => {
                    i.type.forEach((t) => {
                        if (!typesArr.includes(t)) typesArr.push(t);
                    });
                });

            return typesArr;
        },

        /**
         * Группы для селекта
         */
        activeGroupOptions() {
            const { age, type } = this.active;
            const activeGroups =
                age &&
                type &&
                this.activePool[age]?.length &&
                this.activePool[age].filter((i) => i.type.includes(type));

            return activeGroups;
        },

        /**
         * Выбранная в селекте группа полностью (для блока расписания самого)
         */
        activeGroup() {
            const activeGroup = this.activeGroupOptions?.find((g) => g.id == this.active.group);

            return activeGroup;
        },
    },
};
</script>

<style>
</style>
