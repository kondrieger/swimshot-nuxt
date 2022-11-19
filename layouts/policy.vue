<template>
    <div>
        <Header />
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';

export default {
    components: {
        Header,
    },
    methods: {
        editLinks() {
            const linkArr = Array.from(document.getElementsByClassName('js-link'));
            location.hash && history.pushState({}, '', location.pathname);

            linkArr.forEach((l) => {
                l.addEventListener('click', function (event) {
                    event.preventDefault();
                    //отключаем стандартный переход по ссылке
                    location.hash && history.pushState({}, '', location.pathname);

                    // сворачиваем боковое меню
                    const menu = Array.from(document.getElementsByClassName('bm-menu'))[0];
                    if (menu) menu.style.width = '0';

                    //по href ищем элемент с нужным id и определяем его позицию
                    const linkingElement = document
                        .querySelector(`${this.getAttribute('href')?.replace('/', '')}`)
                        ?.getBoundingClientRect();
                    const elementTop = linkingElement?.top && window.scrollY + linkingElement?.top;

                    if (elementTop) {
                        //скролим на эту позицию
                        window.scrollTo(0, elementTop);
                    }
                });
            });
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => this.$nuxt.$loading.finish(), 1000);
        });

        this.editLinks();
    },
};
</script>
