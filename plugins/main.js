import Vue from 'vue';
import extend from '~/utils/extend-vue-app'
import VueModalTor from 'vue-modaltor/dist/vue-modaltor.common';
import 'vue-modaltor/dist/vue-modaltor.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(VueModalTor);
Vue.config.productionTip = false;

export default async function ({ app }) {
	extend(app, {
		mounted () {
            AOS.init();
		},
	});
}
