<template>
    <div class="bg-grey" id="media">
        <div class="container media">
            <h2 class="media__title" data-aos="fade-right" data-aos-once="true">
                Swim shot в <span class="blue">медиа</span>
            </h2>
            <p class="media__text" data-aos="fade-right" data-aos-once="true">
                Говорим и пишем о плавании и нашей школе <br />Слушай и читай по ссылкам ниже
            </p>

            <ul class="media__list">
                <li data-aos="fade-up" data-aos-once="true" class="media__list-item">
                    <div class="media__list-item-img">
                        <img :src="kaleki" alt="Swim shot на sports.ru" />
                    </div>
                    <div class="media__list-item-text-wrap">
                        <p class="media__list-item-text-title">Мы в подкасте Sports.ru</p>
                        <p class="media__list-item-text">
                            Провели тренировку и поделились секретами плавания на главной спортивной площадке страны
                        </p>
                        <div class="media__list-item-text-btns">
                            <a href="https://www.sports.ru/tribuna/blogs/podcasts/2865303.html" target="_blank">
                                <VButton sm text="Слушать" />
                            </a>
                        </div>
                    </div>
                </li>
                <li data-aos="fade-up" data-aos-offset="100" data-aos-once="true" class="media__list-item">
                    <div class="media__list-item-img">
                        <img :src="zelenru" alt="Swim shot в сататьях Zelenograd.ru" />
                    </div>
                    <div class="media__list-item-text-wrap">
                        <p class="media__list-item-text-title">Swim Shot в сататьях Zelenograd.ru</p>
                        <p class="media__list-item-text">
                            Рассказываем про личности, структуру школы и ценности в обучение плаванию крупному изданию
                            Зеленорада
                        </p>
                        <div class="media__list-item-text-btns">
                            <a
                                href="https://www.zelenograd.ru/story/uchitsya-plavat-i-kayfovat-ot-etogo/"
                                target="_blank"
                            >
                                <VButton sm text="О школе" />
                            </a>
                            <a href="https://www.zelenograd.ru/story/trenery/ " target="_blank">
                                <VButton sm text="О тренировках" />
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import VButton from '~/components/VButton/VButton.vue';
import zelenru from '~/assets/jpg/zelen_ru.jpg';
import kaleki from '~/assets/jpg/kaleki.jpg';
import './styles.css';

export default {
    components: { VButton },
    data() {
        return {
            zelenru,
            kaleki,
        };
    },
};
</script>

<style></style>
