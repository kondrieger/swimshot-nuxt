<template>
    <div class="schedule-sales">
        <div class="container">
            <h2 class="text-header schedule-sales__title">
                Постоянные <span class="text-danger">акции</span> Swim Shot
            </h2>

            <div class="schedule-sales__list">
                <div class="schedule-sales__list-item">
                    <p class="text-danger schedule-sales__list-item-percent">
                        <GiftIcon class="schedule-sales__list-item-icon" />
                    </p>

                    <p class="text-subheader schedule-sales__list-item-text">
                        <span class="text-danger">Бесплатное пробное</span>
                        <br />
                        При покупке абонемента в день пробной тренировки пробное занятие бесплатное
                    </p>
                </div>

                <div class="schedule-sales__list-item">
                    <p class="text-danger schedule-sales__list-item-percent">10%</p>

                    <p class="text-subheader schedule-sales__list-item-text">
                        <span class="text-danger">Семейная скидка</span>
                        <br />
                        Семейная скидка <span class="text-danger">-10%</span> предоставляется при одновременной покупке
                        двух услуг для двух членов семьи
                    </p>
                </div>

                <div class="schedule-sales__list-item">
                    <p class="text-danger schedule-sales__list-item-percent">15%</p>

                    <p class="text-subheader schedule-sales__list-item-text">
                        <span class="text-danger">Скидка на день рождения</span>
                        <br />
                        Именинник может воспользоваться скидкой -15% за неделю до и после дня рождения
                    </p>
                </div>
            </div>

            <!-- <div class="schedule-sales__notes">
                <p class="text-subheader text-subheader--note schedule-sales__notes-item">
                    * чем больше друзей приведешь, тем дешевле будешь плавать. Можно приводить несколько человек в
                    месяц. Ты нам новых учеников, мы тебе выгодное плавание. Все в плюсе!
                </p>
                <p class="text-subheader text-subheader--note schedule-sales__notes-item">
                    ** воспользоваться скидкой можно только в указанный период и только один раз в год
                </p>
                <p class="text-subheader text-subheader--note schedule-sales__notes-item">
                    *** скидка действует только на услуги, которыми будет пользоваться именинник
                </p>
            </div> -->
        </div>
    </div>
</template>

<script>
import './styles.css';

import TwoIcon from '~/assets/svg/two.svg';
import GiftIcon from '~/assets/svg/gift.svg';
import PersonHandsIcon from '~/assets/svg/person-hands.svg';

export default {
    components: { TwoIcon, GiftIcon, PersonHandsIcon },
};
</script>

<style></style>
