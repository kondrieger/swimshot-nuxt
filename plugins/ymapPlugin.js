import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
    apiKey: '24493451-0d78-48ba-a1b8-259797024b9a',
    lang: 'ru_RU',
}; // настройки плагина

Vue.use(YmapPlugin, settings);
