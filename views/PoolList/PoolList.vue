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
                >
                    <div class="pools__list-item-text">
                        <p class="pools__list-item-text-title">
                            {{ pool.title }}<span class="pools__list-item-text-subtitle">, {{ pool.subtitle }}</span>
                        </p>
                        <VButton wide text="ПОДРОБНОСТИ" />
                    </div>
                </nuxt-link>
                <a
                    href="https://www.instagram.com/swim_shot"
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

import orbita from '~/assets/webp/pools/pool_orbita.webp';
import malino from '~/assets/webp/pools/pool_malino.webp';
import Question from '~/assets/svg/question.svg';

const poolsArr = [
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
    components: { VButton, Question },
    data() {
        return {
            poolsArr,
        };
    },
};
</script>

<style>
.pools {
    padding-top: calc(var(--gs) * 3);
    padding-bottom: calc(var(--gs) * 12);

    @media (--desktop) {
        padding-bottom: calc(var(--gs) * 9);
    }

    @media (--tablet) {
        padding-bottom: calc(var(--gs) * 6);
    }

    &__list {
        display: flex;
        width: 100%;
        justify-content: center;

        @media (--tablet) {
            flex-wrap: wrap;
        }

        &-item {
            width: 35%;
            height: 600px;
            z-index: 1;
            opacity: 0.8;
            background-size: cover;
            display: flex;
            align-items: flex-end;
            background-position: 50%;

            @media (--tablet) {
                width: 50%;
                height: 400px;
            }

            @media (--mobile-lg) {
                width: 100%;
                height: 200px;
                margin-top: 10px;
            }

            &--empty {
                background-color: #fff;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            &,
            & * {
                transition: all 0.3s ease;
            }

            &:nth-child(3) {
                @media (--tablet) {
                    margin-top: 10px;
                }
            }

            &:hover,
            &:active {
                opacity: 1;
                @media (--mobile-lg-min) {
                    width: 50%;
                }

                & .btn {
                    opacity: 1;
                }

                & .pools__list-item-text {
                    height: 25%;

                    @media (--desktop) {
                        height: 30%;
                    }

                    @media (--mobile-lg) {
                        height: 60%;
                    }
                }

                & .pools__list-item-text-title {
                    @media (--tablet-min) {
                        font-size: 24px;
                    }
                }

                & .pools__list-item-text-subtitle {
                    @media (--tablet-min) {
                        font-size: 20px;
                    }
                }
            }

            &-icon {
                display: block;
                width: 200px;
                height: 400px;
                fill: var(--cl-blue);
            }

            &-text {
                padding: 10px;
                width: 100%;
                height: 10%;
                background-color: #fff;
                margin-top: auto;
                margin-bottom: 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                @media (--desktop) {
                    height: 15%;
                }

                @media (--mobile-lg) {
                    height: 25%;
                }

                &-title {
                    font-size: 18px;
                    font-family: var(--font-geometria);
                    font-weight: 600;
                    margin-bottom: 15px;

                    @media (--tablet) {
                        font-size: 16px;
                        margin-bottom: 10px;
                    }
                }

                &-subtitle {
                    font-size: 16px;
                    font-weight: normal;

                    @media (--tablet) {
                        font-size: 14px;
                    }
                }

                & .btn {
                    max-width: 70%;
                    opacity: 0;
                    pointer-events: none;

                    @media (--desktop) {
                        font-size: 16px;
                    }

                    @media (--tablet) {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}
</style>
