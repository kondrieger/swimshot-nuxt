import { mskContacts, ekbContacts } from '~/static/js/poolsInfo.js';
import { socialLinksHeader, socialLinksHeaderEkb } from '~/static/js/links.js';
import { socialLinksContactForm, socialLinksContactFormEkb } from '~/static/js/links.js';

export default {
    data() {
        return {
            currentLocation: null,
            ekbTitle: 'Екатеринбург',
            mskTitle: 'Москва, Зеленоград',
            anotherTitle: 'Другой',

            coordsCenterMsk: [55.98180773463946, 37.199255310803],
            coordsCenterEkb: [56.839567, 60.550663],
        };
    },

    computed: {
        isEkb() {
            return this.currentLocation?.toLowerCase() === 'sve';
        },

        isMsk() {
            return this.currentLocation?.toLowerCase() === 'mow';
        },

        isAnother() {
            return (
                this.currentLocation &&
                this.currentLocation?.toLowerCase() !== 'mow' &&
                this.currentLocation?.toLowerCase() !== 'sve'
            );
        },

        currentTitle() {
            if (this.isEkb) return this.ekbTitle;
            if (this.isMsk) return this.mskTitle;
            if (this.isAnother) return this.anotherTitle;

            return '';
        },

        currentContacts() {
            if (this.isEkb || this.pathName === '/ekb') return ekbContacts;

            return mskContacts;
        },

        currentLinksHeader() {
            if (this.isEkb || this.pathName === '/ekb') return socialLinksHeaderEkb;

            return socialLinksHeader;
        },

        currentLinksContactForm() {
            if (this.isEkb || this.pathName === '/ekb') return socialLinksContactFormEkb;

            return socialLinksContactForm;
        },

        pathName() {
            if (!process.client) return '';

            return $nuxt.$route.path;
        },

        coordsCenter() {
            if (!process.client) return this.coordsCenterMsk;

            if (this.pathName === '/zelenograd') return this.coordsCenterMsk;
            if (this.pathName === '/orbita') return this.coordsCenterMsk;
            if (this.pathName === '/ekb') return this.coordsCenterEkb;

            if (this.isEkb) return this.coordsCenterEkb;

            return this.coordsCenterMsk;
        },
    },

    methods: {
        async getLocation() {
            await fetch('https://ipinfo.io/json?token=0a9c848024b91e', {
                method: 'GET',
            }).then((resp) => {
                resp.json().then((body) => this.setLocation(body.region));
            });
        },

        setLocation(currentLocation) {
            let settingLocation = 'another';

            if (currentLocation.toLowerCase() == 'sverdlovsk oblast') settingLocation = 'sve';
            if (currentLocation.toLowerCase() == 'moscow') settingLocation = 'mow';

            this.currentLocation = settingLocation;
            this.$root.$emit('currentLocationChange', settingLocation);
        },
    },

    mounted() {
        if (!this.currentLocation) this.getLocation();

        this.$root.$on('currentLocationChange', (currentLocation) => (this.currentLocation = currentLocation));
    },
};
