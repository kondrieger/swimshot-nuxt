<template>
    <div class="container schedule">
        <h2 class="text-header">Расписание <span class="blue">занятий</span></h2>

        <p class="text-subheader">
            Выбирай бассейн, возраст, тип занятия и группу. Занятие длится
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
                        <nuxt-link :to="pool.href" class="schedule__list-item-link">
                            {{ pool.title }}
                        </nuxt-link>

                        <span class="schedule__list-item-text-subtitle">, {{ pool.subtitle }}</span>
                    </p>
                </div>
            </div>
        </div>

        <div v-if="active.pool && activeAgeOptions && activeAgeOptions.length" class="schedule__list">
            <div
                v-for="(age, index) in activeAgeOptions"
                :key="index"
                class="schedule__list-item schedule__list-item--sm"
                :class="{
                    'js-active': active.age === age,
                    'not-active': active.age !== age && active.age !== null,
                }"
                @click="onActiveAgeChange(age)"
            >
                <template v-if="age === 'children'">
                    <BoyIcon class="schedule__list-item-icon" />
                    <p class="schedule__list-item-title">Дети</p>
                </template>

                <template v-else-if="age === 'adults'">
                    <PersonIcon class="schedule__list-item-icon" />
                    <p class="schedule__list-item-title">Взрослые</p>
                </template>
            </div>
        </div>

        <div v-if="active.age && activeTypeOptions && activeTypeOptions.length" class="schedule__list">
            <div
                v-for="(type, index) in activeTypeOptions"
                :key="index"
                class="schedule__list-item schedule__list-item--sm"
                :class="{
                    'js-active': active.type === type,
                    'not-active': active.type !== type && active.type !== null,
                }"
                @click="onActiveTypeChange(type)"
            >
                <template v-if="type === 'group'">
                    <CrowdIcon class="schedule__list-item-icon" />
                    <p class="schedule__list-item-title">Групповые</p>
                </template>

                <template v-else-if="type === 'personal'">
                    <BoyTrainerIcon class="schedule__list-item-icon" />

                    <p class="schedule__list-item-title">Персональные</p>
                </template>

                <template v-else-if="type === 'free'">
                    <PersonHandsIcon class="schedule__list-item-icon" />

                    <p class="schedule__list-item-title">Свободное плавание</p>
                </template>

                <template v-else-if="type === 'sport'">
                    <Cup class="schedule__list-item-icon" />

                    <p class="schedule__list-item-title">Спортгруппа</p>
                </template>
            </div>
        </div>

        <div class="schedule__select-wrap" v-if="activeGroupOptions && activeGroupOptions.length">
            <Treeselect
                class="schedule__select"
                :options="activeGroupOptions"
                v-model="active.group"
                :default-expand-level="1"
                placeholder="Группа"
                @select="() => {}"
                :disable-branch-nodes="true"
                :searchable="false"
                :is-default-expanded="true"
            />
        </div>

        <div class="schedule__table" v-if="activeGroup">
            <h3 class="text-subheader schedule__table-title">
                {{ activeGroup.label }}
            </h3>
            <p class="text-subheader schedule__table-subtitle">
                {{ activeGroup.info }}

                <template v-if="activeGroup.combine && active.type === 'group'">
                    <br v-if="activeGroup.info" />Можно комбинировать любые дни и любых тренеров из списка ниже
                </template>
            </p>

            <template v-if="active.type === 'group'">
                <div class="bg-grey schedule__content" v-if="activeGroup.groupDays">
                    <div class="schedule__table-list">
                        <ScheduleItem
                            v-for="groupDay in activeGroup.groupDays"
                            :key="groupDay.id"
                            :groupDay="groupDay"
                            :weekDay="weekDays[groupDay.id]"
                            @trainerClick="onTrainerClick"
                        />
                    </div>

                    <div class="schedule__table-price-wrap">
                        <div class="schedule__table-price">
                            <p class="text-subheader schedule__table-price-title">
                                <span class="text-bold">Групповые тренировки</span><br />
                                Стоимость в это время и дни за месяц
                            </p>

                            <div class="schedule__table-price-list">
                                <div
                                    class="schedule__table-price-list-item"
                                    v-for="price in activeGroup.price"
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

                <template v-if="activeGroup.types">
                    <div class="wrapper">
                        <div class="schedule-tab-wrapper">
                            <ul class="tabs">
                                <li
                                    class="schedule-tab-link"
                                    :class="{ active: active.tab === groupType.id }"
                                    v-for="groupType in activeGroup.types"
                                    :key="groupType.id"
                                    @click="onTabChange(groupType.id)"
                                >
                                    Группа {{ groupType.id }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        :id="`schedule-tab-${groupType.id}`"
                        class="schedule-tab-content bg-grey schedule__content"
                        v-for="groupType in activeGroup.types"
                        :key="groupType.id"
                        :class="{ active: active.tab === groupType.id }"
                    >
                        <div class="schedule__table-list">
                            <ScheduleItem
                                v-for="groupDay in groupType.groupDays"
                                :key="groupDay.id"
                                :groupDay="groupDay"
                                :weekDay="weekDays[groupDay.id]"
                                @trainerClick="onTrainerClick"
                            />
                        </div>

                        <div class="schedule__table-price-wrap">
                            <div class="schedule__table-price">
                                <p class="text-subheader schedule__table-price-title">
                                    <span class="text-bold">Групповые тренировки</span><br />
                                    Стоимость в это время и дни за месяц
                                </p>

                                <div class="schedule__table-price-list">
                                    <div
                                        class="schedule__table-price-list-item"
                                        v-for="price in groupType.price"
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
                </template>
            </template>

            <div class="bg-grey schedule__content" v-if="active.type === 'personal'">
                <p class="text-subheader text-subheader--note schedule__table-note">
                    * Расписание согласуется <span class="blue">индивидуально с тренером</span> и более гибко для
                    Ученика
                </p>

                <div class="schedule__table-price-wrap">
                    <div class="schedule__table-price">
                        <p class="text-subheader schedule__table-price-title">
                            <span class="text-bold">Персональные тренировки</span><br />
                            Покупаются блоком
                        </p>

                        <div class="schedule__table-price-list">
                            <div
                                class="schedule__table-price-list-item"
                                v-for="price in price.personal"
                                :key="price.id"
                            >
                                <p class="schedule__table-price-list-item-times">
                                    <span v-if="price.id === 1">Одна тренировка</span>
                                    <span v-if="price.id === 3">Три тренировки</span>
                                    <span v-if="price.id === 5">Пять тренировок</span>
                                    <span v-if="price.id === 10">Десять тренировок</span>
                                </p>
                                <p class="schedule__table-price-list-item-amount">
                                    <span class="blue">{{ price.amount }}</span> р/мес
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="active.type === 'free'">
            <h3 class="text-subheader schedule__table-title">Свободное плавание</h3>

            <p class="text-subheader schedule__table-subtitle" v-if="active.age === 'children'">
                Дети до 14 лет могут проходить на свободное плавание только в сопровождении представителей и по
                письменному заявлению об их ответственности за ребенка. Дети с 14 до 17 лет включительно уже могут
                плавать без личного присутствия представителя, <b>но с его письменного заявления</b>.

                <br />
                <br />
                Абонементы на свободное плавание также можно приобрести на детей
                <b>с письменным заявлением от представителя</b>
            </p>

            <div class="wrapper">
                <div class="schedule-tab-wrapper">
                    <ul class="tabs">
                        <li class="schedule-tab-link" :class="{ active: active.tab === 1 }" @click="onTabChange(1)">
                            По времени
                        </li>
                        <li class="schedule-tab-link" :class="{ active: active.tab === 2 }" @click="onTabChange(2)">
                            В любое время
                        </li>
                    </ul>
                </div>
            </div>

            <div class="schedule-tab-content bg-grey schedule__content" :class="{ active: active.tab === 1 }">
                <p class="text-subheader schedule__table-subtitle">
                    Свободное плавание в будние дни <b>до 13:00</b> и <b>после 21:15</b>, а также
                    <b>в выходные после 20:30</b> *
                </p>

                <p class="text-subheader text-subheader--note schedule__table-note">
                    <span class="text-danger">* ВАЖНО</span>: <b>С понедельника по субботу включительно</b> с
                    <span class="blue">16:00</span> до <span class="blue">19:00</span> свободного плавания <b>нет</b>. В
                    это время проводятся тренировки спортивных групп, под которые используется весь бассейн.
                </p>

                <div class="schedule__table-price-wrap">
                    <div class="schedule__table-price">
                        <p class="text-subheader schedule__table-price-title">
                            <span class="text-bold">Свободное посещение</span><br />
                            Стоимость в это время
                        </p>

                        <div class="schedule__table-price-list">
                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Разовое посещение</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">350</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Месяц — 8 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">2800</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Месяц — 12 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">3900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три месяца — 24 посещения</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">7900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три месяца — 36 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">10900</span> р</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="schedule-tab-content bg-grey schedule__content" :class="{ active: active.tab === 2 }">
                <p class="text-subheader schedule__table-subtitle">Свободное плавание в любое время *</p>
                <p class="text-subheader text-subheader--note schedule__table-note">
                    <span class="text-danger">* ВАЖНО</span>: <b>С понедельника по субботу включительно</b> с
                    <span class="blue">16:00</span> до <span class="blue">19:00</span> свободного плавания <b>нет</b>. В
                    это время проводятся тренировки спортивных групп, под которые используется весь бассейн.
                </p>

                <div class="schedule__table-price-wrap">
                    <div class="schedule__table-price">
                        <p class="text-subheader schedule__table-price-title">
                            <span class="text-bold">Свободное посещение</span><br />
                        </p>

                        <div class="schedule__table-price-list">
                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Разовое посещение</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">500</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Месяц — 8 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">3900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Месяц — 12 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">4900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Месяц — безлимит</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">5900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три месяца — 24 посещения</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">10500</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три месяца — 36 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">13900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три месяца — безлимит</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">14900</span> р</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="active.group && active.type === 'sport'">
            <h3 class="text-subheader schedule__table-title">Спортивная группа</h3>

            <p class="text-subheader schedule__table-subtitle">Необходимо пройти отбор</p>

            <div class="bg-grey schedule__content">
                <p class="text-subheader text-subheader--note schedule__table-note">
                    * Продолжительность тренировки — 1.5 часа
                </p>

                <div class="schedule__table-price-wrap">
                    <div class="schedule__table-price">
                        <p class="text-subheader schedule__table-price-title">
                            <span class="text-bold">Спортивная группа</span><br />
                            Стоимость в это время
                        </p>

                        <div class="schedule__table-price-list">
                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три раза в неделю</p>
                                <p class="schedule__table-price-list-item-amount">
                                    <span class="blue">10000</span> р/мес
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="schedule-tab-content bg-grey schedule__content" :class="{ active: active.tab === 2 }">
                <p class="text-subheader schedule__table-subtitle">Свободное плавание в любое время *</p>
                <p class="text-subheader text-subheader--note schedule__table-note">
                    <span class="text-danger">* ВАЖНО</span>: <b>С понедельника по субботу включительно</b> с
                    <span class="blue">16:00</span> до <span class="blue">19:00</span> свободного плавания <b>нет</b>. В
                    это время проводятся тренировки спортивных групп, под которые используется весь бассейн.
                </p>

                <div class="schedule__table-price-wrap">
                    <div class="schedule__table-price">
                        <p class="text-subheader schedule__table-price-title">
                            <span class="text-bold">Свободное посещение</span><br />
                        </p>

                        <div class="schedule__table-price-list">
                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Разовое посещение</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">500</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Месяц — 8 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">3900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Месяц — 12 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">4900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Месяц — безлимит</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">5900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три месяца — 24 посещения</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">10500</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три месяца — 36 посещений</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">13900</span> р</p>
                            </div>

                            <div class="schedule__table-price-list-item">
                                <p class="schedule__table-price-list-item-times">Три месяца — безлимит</p>
                                <p class="schedule__table-price-list-item-amount"><span class="blue">14900</span> р</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h3 v-else class="text-subheader schedule__title bg-grey schedule__content schedule__end-text">
            Выбери <b>{{ computedWord }}</b
            >, чтобы увидеть расписание
        </h3>
    </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
import { schedule, price } from '~/static/js/poolsInfo.js';

import ScheduleItem from './ScheduleItem/ScheduleItem.vue';

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
import Cup from '~/assets/svg/cup.svg';

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

// const defaultActive = {
//     pool: 'zelenograd',
//     age: 'children',
//     type: 'group',
//     group: 'child-912',
//     tab: 1,
// };
const defaultActive = {
    pool: null,
    age: null,
    type: null,
    group: null,
    tab: 1,
};

const weekDays = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
};

const weekDaysSm = {
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
        ScheduleItem,

        PersonIcon,
        BoyIcon,
        CrowdIcon,
        PersonHandsIcon,
        BoyTrainerIcon,
        Cup,
    },

    data() {
        return {
            schedule,
            price,
            poolsArr,
            weekDays,

            active: { ...defaultActive },
        };
    },

    methods: {
        onTabChange(tab) {
            this.active.tab = tab;
        },

        onTrainerClick(name) {
            this.$emit('trainerClick', name);
        },

        onActivePoolChange(pool) {
            const { pool: activePool } = this.active;
            this.active = { ...defaultActive };

            if (activePool === pool) {
                this.active.pool = null;
            } else {
                this.active.pool = pool;
            }

            this.$nextTick(() => {
                if (this.activeAgeOptions && this.activeAgeOptions.length === 1) {
                    this.active.age = this.activeAgeOptions[0];
                }
            });
        },

        onActiveAgeChange(age) {
            this.active.type = null;

            if (this.active.age === age) {
                this.active.age = null;
            } else {
                this.active.age = age;
            }

            this.$nextTick(() => {
                if (this.activeTypeOptions && this.activeTypeOptions.length === 1) {
                    this.active.type = this.activeTypeOptions[0];
                }
            });
        },

        onActiveTypeChange(type) {
            this.active.group = null;
            this.active.tab = 1;

            if (this.active.type === type) {
                this.active.type = null;
            } else {
                this.active.type = type;
            }

            this.$nextTick(() => {
                if (this.activeGroupOptions && this.activeGroupOptions.length === 1) {
                    this.active.group = this.activeGroupOptions[0].id;
                }
            });
        },
    },

    computed: {
        activePool() {
            return schedule.pools.find((p) => p.id === this.active.pool);
        },

        computedWord() {
            const { pool, age, type } = this.active;
            if (!pool) return 'бассейн';
            if (!age) return 'возрастную группу';
            if (!type) return 'вид тренировки';

            return 'группу';
        },

        /**
         * Возрастные группы выбранного бассейна
         */
        activeAgeOptions() {
            if (!this.activePool) return [];

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
            let typesArr = [];

            if (this.activeAgeOptions.includes(age)) {
                this.activePool[age]?.forEach((i) => {
                    i.type.forEach((t) => {
                        if (!typesArr.includes(t)) typesArr.push(t);
                    });
                });

                if (this.active.pool === 'zelenograd') typesArr.push('free');
            }

            return typesArr;
        },

        /**
         * Группы для селекта
         */
        activeGroupOptions() {
            if (!this.activePool) return [];

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

            if (this.active.type === 'sport') return null;

            return activeGroup;
        },
    },

    mounted() {
        const searchParams = new URLSearchParams(document.location.search);
        if (searchParams) this.active.pool = searchParams.get('pool');
    },
};
</script>

<style>
</style>
