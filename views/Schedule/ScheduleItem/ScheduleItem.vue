<template>
    <div class="schedule-item" :class="{ 'schedule-item--multiple': groupDay.diffs }">
        <template v-if="groupDay.diffs">
            <p class="text-bold schedule-item__weekday">{{ weekDay }}</p>

            <div class="schedule-item__block" v-for="training in groupDay.diffs" :key="training.trainer">
                <div class="schedule-item__wrap">
                    <p class="schedule-item__text">Время:</p>
                    <p class="blue text-bold schedule-item__block-time">
                        {{ training.time.join(' ') }}
                    </p>
                </div>

                <div v-if="training.trainer" class="schedule-item__wrap">
                    <p class="schedule-item__text">Тренер:</p>
                    <a class="js-link" href="#team">{{ training.trainer }}</a>
                </div>
            </div>
        </template>

        <template v-else>
            <p class="text-bold schedule-item__weekday">{{ weekDay }}</p>

            <div class="schedule-item__wrap">
                <p class="schedule-item__text">Время:</p>
                <p class="blue text-bold schedule-item__block-time">
                    {{ groupDay.time.join(' ') }}
                </p>
            </div>

            <div v-if="groupDay.trainer" class="schedule-item__wrap">
                <p class="schedule-item__text">Тренер:</p>
                <a class="js-link" href="#team">{{ groupDay.trainer }}</a>
            </div>
        </template>
    </div>
</template>

<script>
import './styles.css';

export default {
    props: {
        groupDay: {
            type: Object,
            default: () => {},
        },
        weekDay: {
            type: String,
            default: 'Не указан',
        },
    },
};
</script>
