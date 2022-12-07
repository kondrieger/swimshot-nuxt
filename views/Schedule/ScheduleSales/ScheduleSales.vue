<template>
    <div class="schedule-sales">
        <div class="container">
            <h2 class="text-header schedule-sales__title">
                <span class="text-danger">Постоянные акции</span> Swim Shot
            </h2>

            <div class="schedule-sales__list">
                <div class="schedule-sales__list-item">
                    <p class="text-danger schedule-sales__list-item-percent">15%</p>

                    <p class="text-subheader schedule-sales__list-item-text">
                        Приведи друга и получи скидку 15% на следующую покупку себе, а ему 5% на первую покупку.
                        <br />
                        <span class="text-danger"> Суммируется </span>с любыми скидками. Действует
                        <span class="text-danger">многократно</span>*
                    </p>
                </div>

                <div class="schedule-sales__list-item">
                    <p class="text-danger schedule-sales__list-item-percent">15%</p>

                    <p class="text-subheader schedule-sales__list-item-text">
                        Подарок на День рождения. За неделю до и через неделю после Дня рождения** именинник получает
                        скидку 15% на любые услуги Swim Shot***
                    </p>
                </div>

                <div class="schedule-sales__list-item">
                    <p class="text-danger schedule-sales__list-item-percent">10%</p>

                    <p class="text-subheader schedule-sales__list-item-text">
                        Скидка 10% при одновременной покупке двух услуг (две разные услуги, на двух человек, на два
                        месяца и тд)
                    </p>
                </div>

                <div class="schedule-sales__list-item">
                    <p class="text-danger schedule-sales__list-item-percent">5%</p>

                    <p class="text-subheader schedule-sales__list-item-text">
                        Скидка 5% при покупке абонемента в день пробного занятия
                    </p>
                </div>
            </div>

            <div class="schedule-sales__notes">
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
            </div>
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

<style>
</style>
