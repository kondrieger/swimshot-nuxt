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
                    data-aos-once="true"
                    width="466px"
                    height="23px"
                    :src="subtext"
                    class="start-block__text-img start-block__text-img--sublogo"
                    alt="Плыви быстрее пули"
                />
                <h1 class="start-block__text-title">
                    Школа плавания для детей и взрослых<br />
                    Зеленоград и Южное Бутово
                </h1>
                <p class="start-block__text-subtitle">Записывайся на пробное занятие всего за 300 рублей</p>
                <a class="btn btn--wide btn--animated" href="#contact-form">ЗАПИСАТЬСЯ</a>
            </div>
            <img
                data-aos="fade-up"
                data-aos-once="true"
                v-if="!isTablet"
                width="587px"
                height="688px"
                alt="Записывайся на пробное занятие всего за 300 рублей"
                :src="pic"
                class="start-block__image"
            />
        </div>
        <button v-if="isVisibleBtn" @click="scrollTop" class="arrow-wrap"><i class="arrow"></i></button>
    </div>
</template>

<script>
import $ from 'jquery';

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
            isVisibleBtn: false,
        };
    },
    computed: {
        isTablet() {
            return this.$mq.tablet;
        },
    },
    mounted() {
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

        window.document.body.onscroll = () => {
            this.isVisibleBtn = +window.scrollY > 800;
        };
    },
    methods: {
        scrollTop() {
            $('html, body').animate({
                scrollTop: 0,
            });
        },
    },
};
</script>

<style scoped>
.arrow {
    border: solid white;
    border-width: 0 4px 4px 0;
    display: inline-block;
    margin-top: 5px;
    padding: 5px;
    transform: rotate(-135deg);

    &-wrap {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: fixed;
        left: 70px;
        bottom: 70px;
        background-color: var(--cl-blue);
        z-index: 100;
        border: none;
        cursor: pointer;

        &:hover,
        &:active {
            background-color: var(--cl-dk-blue);
        }

        @media (--tablet) {
            left: 50px;
            bottom: 50px;
        }

        @media (--mobile-lg) {
            left: 25px;
            bottom: 25px;
        }
    }
}
</style>
