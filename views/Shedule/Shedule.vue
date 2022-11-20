<template>
    <div class="container shedule">
        <h2 class="text-header" data-aos="fade-right" data-aos-once="true">
            Расписание <span class="blue">занятий</span>
        </h2>

        <p class="text-subheader" data-aos="fade-right" data-aos-once="true">
            Выбирай свободное плавание или группу и количество занятий в неделю. Занятие длится
            <span class="blue">45 минут</span>. <br />Для уточнения расписания индивидуальных тренировок свяжись по
            телефону или оставь заявку на сайте.
        </p>

        <div class="shedule__select-wrap shedule__container">
            <Treeselect
                class="shedule__select"
                :options="groups"
                v-model="group"
                :default-expand-level="1"
                placeholder="Вид занятий"
                @select="clearTimes"
                :disable-branch-nodes="true"
                :searchable="false"
                :is-default-expanded="true"
            />

            <Treeselect
                v-if="computedTimes"
                class="shedule__select"
                :options="computedTimes"
                placeholder="Количество занятий"
                v-model="times"
                :searchable="false"
            />
        </div>

        <template v-if="computedShedule">
            <h3 class="text-subheader shedule__title">{{ computedShedule.title }}</h3>

            <div class="shedule__list shedule__container">
                <div
                    v-for="(sheduleItem, sheduleIndex) in computedShedule.shedule"
                    :key="sheduleIndex"
                    class="shedule__list-item"
                    style="display: flex"
                >
                    <h4 class="shedule__list-item-title">{{ sheduleItem.days }}</h4>
                    <div class="shedule__list-item-time-list" style="display: flex">
                        <div
                            class="shedule__list-item-time-wrap"
                            v-for="(item, index) in sheduleItem.items"
                            :key="index"
                        >
                            <p v-if="item.price" class="shedule__list-item-time-price">{{ item.price }}</p>
                            <div class="shedule__list-item-time" style="display: flex; flex-wrap: wrap">
                                <p
                                    v-for="(timeItem, timeIndex) in item.time"
                                    :key="timeIndex"
                                    class="shedule__list-item-time-time"
                                >
                                    {{ timeItem }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <h3 v-else class="text-subheader shedule__title">Выбери группу, чтобы увидеть расписание</h3>
    </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css';
import './styles.css';

export default {
    props: {
        shedule: {
            type: Object,
            default: () => {},
        },
    },
    components: {
        Treeselect,
    },
    data() {
        return {
            groups: this.shedule.groups,
            shedules: this.shedule.shedules,
            timez: this.shedule.times,
            group: null,
            times: null,
        };
    },
    methods: {
        clearTimes() {
            setTimeout(() => {
                if (this.group === 5) {
                    this.times = false;
                } else {
                    this.times = null;
                }
            }, 0);
        },
    },
    computed: {
        computedTimes() {
            if (this.group) {
                const times = this.timez.find((time) => time.id === this.group);
                return times && times.times;
            }

            return false;
        },
        computedShedule() {
            if (
                (this.group && this.times && typeof this.group === 'number' && typeof this.times === 'number') ||
                this.group === 5
            ) {
                return this.shedules.find((shedule) => {
                    return shedule.id === this.group && (shedule.times === this.times || shedule.times === this.times);
                });
            }

            return false;
        },
    },
};
</script>

<style>
</style>
