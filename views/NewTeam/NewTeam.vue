<template>
    <div id="new-team">
        <div class="container new-team">
            <h2 class="media__title" data-aos="fade-right" data-aos-once="true">
                Наша <span class="blue">команда</span>
            </h2>

            <div class="new-team__wrap">
                <div class="new-team__pic-list">
                    <div class="new-team__pic-list-item js-tab" @click="showText(1)" id="tab-1">
                        <Team class="new-team__pic-list-item-icon" />
                    </div>
                    <div class="new-team__pic-list-item js-tab" @click="showText(2)" id="tab-2">
                        <img :src="Olympics" alt="" class="new-team__pic-list-item-img" />
                    </div>
                    <div class="new-team__pic-list-item js-tab" @click="showText(3)" id="tab-3">
                        <YinYang class="new-team__pic-list-item-icon" />
                    </div>
                </div>
                <div class="new-team__content">
                    <p class="new-team__content-item js-text" id="text-1">
                        У нас в команде: <br />3 основателя, 1 наставник, 6 тренеров, 2 менеджера, 1 администратор, 1
                        Instagram-менеджер, 1 менеджер контекстной рекламы, 1 разработчик, 1 финансит-бухгалтер и 1
                        юрист.
                    </p>
                    <p class="new-team__content-item js-text" id="text-2">
                        Среди них: <br />участник олимпийских игр, мастера спорта по обычному плаванию, по плаванию на
                        открытой воде, кандидаты в мастера спорта по плаванию в ластах, люди с высшим образованием и
                        дополнительной сертификацией.
                    </p>
                    <p class="new-team__content-item js-text" id="text-3">
                        Спринтеры и стайеры. Совы и жаворонки. Левши и правши. Мы все такие разные, но мы все хотим,
                        чтобы ты полюбил плавание. В Swim Shot ты точно найдешь того, кто поможет тебе кайфовать в воде.
                    </p>
                </div>
            </div>
            <VButton class="new-team__btn" text="ПОЗНАКОМЬСЯ САМ С СУПЕРГЕРОЯМИ SWIM SHOT!" />
        </div>
    </div>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import Team from '~/assets/svg/team.svg';
import Olympics from '~/assets/olympics.png';
import YinYang from '~/assets/svg/yinYang.svg';
import $ from 'jquery';
import './styles.css';

export default {
    components: { VButton, Team, YinYang },
    data() {
        return { Olympics };
    },
    methods: {
        showText(id) {
            const elem = $(`#text-${id}, #tab-${id}`);

            if (elem.hasClass('active')) {
                elem.removeClass('active');
            } else {
                $('.js-text, .js-tab').removeClass('active');
                elem.addClass('active');
            }
        },
    },
};
</script>
