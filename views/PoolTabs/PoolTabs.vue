<template>
    <div>
        <div class="wrapper" data-aos="fade-up" data-aos-once="true">
            <div class="tab-wrapper">
                <ul class="tabs">
                    <li class="tab-link" :class="{ active: littleActive }" data-tab="1">Малый бассейн</li>
                    <li
                        class="tab-link"
                        :class="{ active: bigActive }"
                        :style="bigActive ? 'order: -1;' : ''"
                        data-tab="2"
                    >
                        Большой бассейн
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-grey" data-aos="fade-up" data-aos-once="true">
            <div class="wrapper">
                <div class="content-wrapper">
                    <div id="tab-1" class="tab-content" :class="{ active: littleActive }">
                        <PoolsFeatures :PoolsFeatures="littlePool" />
                    </div>

                    <div id="tab-2" class="tab-content" :class="{ active: bigActive }">
                        <PoolsFeatures :PoolsFeatures="bigPool" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import './styles.css';

import PoolsFeatures from '~/components/PoolsFeatures/PoolsFeatures.vue';

export default {
    components: { PoolsFeatures },
    props: {
        littleActive: {
            type: Boolean,
            default: false,
        },
        bigActive: {
            type: Boolean,
            default: false,
        },
        littlePool: {
            type: Array,
            default: () => [],
        },
        bigPool: {
            type: Array,
            default: () => [],
        },
    },
    mounted() {
        $('.tab-link').click(function () {
            var tabID = $(this).attr('data-tab');

            $(this).addClass('active').siblings().removeClass('active');

            $('#tab-' + tabID)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    },
};
</script>
