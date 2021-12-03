<template>
    <div class="bg-grey" id="new-team">
        <div class="container new-team">
            <h2 class="media__title" data-aos="fade-right" data-aos-once="true">
                Наша <span class="blue">команда</span>
            </h2>

            <div class="new-team__list">
                <div class="new-team__list-item">
                    <Team class="new-team__list-item-icon" />
                </div>
                <div class="new-team__list-item new-team__list-item--reverse">
                    <Olympics class="new-team__list-item-icon" />
                </div>
                <div class="new-team__list-item">
                    <YinYang class="new-team__list-item-icon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import Team from '~/assets/svg/team.svg';
import Olympics from '~/assets/svg/olympics.svg';
import YinYang from '~/assets/svg/yinYang.svg';
import './styles.css';

export default {
    components: { VButton, Team, Olympics, YinYang },
    data() {
        return {};
    },
};
</script>

<style>
.new-team {
    &__list {
        display: flex;
        flex-direction: column;

        &-item {
            display: flex;

            &--reverse {
                flex-direction: row-reverse;
            }

            &-icon {
                width: 63px !important;
                fill: var(--cl-blue);
            }
        }
    }
}
</style>
