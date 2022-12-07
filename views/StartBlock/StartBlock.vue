<template>
    <div id="start-bg" :style="{ 'background-image': 'url(' + bgPic + ')' }" class="start-block__wrap">
        <div class="container start-block">
            <div class="start-block__text">
                <img
                    width="530px"
                    height="199px"
                    :src="text"
                    class="start-block__text-img start-block__text-img--logo"
                    alt="Плыви быстрее пули"
                />

                <img
                    data-aos="fade-right"
                    width="466px"
                    height="23px"
                    :src="subtext"
                    class="start-block__text-img start-block__text-img--sublogo"
                    alt="Плыви быстрее пули"
                />

                <h1 class="start-block__text-title">
                    Школа плавания для детей и взрослых<br />
                    с собственным бассейном в Зеленограде
                </h1>

                <p class="start-block__text-subtitle">Записывайся на пробную тренировку всего за 500 рублей</p>

                <a class="btn btn--wide btn--animated" href="javascript:;" @click="onModalOpen">ЗАПИСАТЬСЯ</a>
            </div>

            <img
                data-aos="fade-right"
                v-if="!isTablet"
                width="587px"
                height="688px"
                alt="Записывайся на пробную тренировку всего за 500&nbsp;₽"
                :src="pic"
                class="start-block__image"
            />
        </div>
    </div>
</template>

<script>
import pic from '~/assets/jpg/swimshot_man_boy.jpg';
import text from '~/assets/jpg/swimshot_text.jpg';
import subtext from '~/assets/jpg/swimshot_subtext.jpg';
import bgPic from '~/assets/jpg/bg.jpg';

import './styles.css';

export default {
    name: 'StartBlock',
    data() {
        return {
            pic,
            text,
            subtext,
            bgPic,
        };
    },
    computed: {
        isTablet() {
            return this.$mq.tablet;
        },
    },
    mounted() {
        this.animateBg();
    },
    methods: {
        animateBg() {
            const bg = document.getElementById('start-bg');

            let entered = false;
            let y = 0;

            bg.addEventListener('mouseenter', (e) => {
                y = e.pageY;
                entered = true;
            });

            bg.addEventListener('mousemove', (e) => {
                if (entered === true) {
                    y = -e.pageY / 60;
                    bg.style.backgroundPositionY = `${y}px`;
                }
            });

            bg.addEventListener('mouseleave', () => {
                entered = false;
            });
        },

        onModalOpen() {
            this.$emit('modalOpen');
        },
    },
};
</script>
