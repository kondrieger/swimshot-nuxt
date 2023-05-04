export default {
    data() {
        return {
            location: null,
            ekbTitle: 'Екатеринбург',
            mskTitle: 'Москва',
            anotherTitle: 'Другой',
        };
    },

    computed: {
        isEkb() {
            return this.location?.toLowerCase() === 'sve';
        },

        isMsk() {
            return this.location?.toLowerCase() === 'mow';
        },

        isAnother() {
            return this.location && this.location?.toLowerCase() !== 'mow' && this.location?.toLowerCase() !== 'sve';
        },

        currentTitle() {
            if (this.isEkb) return this.ekbTitle;
            if (this.isMsk) return this.mskTitle;
            if (this.isAnother) return this.anotherTitle;

            return '';
        },
    },

    methods: {
        async getLocation() {
            await fetch('http://ip-api.com/json', {
                method: 'GET',
            }).then((resp) => {
                resp.json().then((body) => this.setLocation(body.region));
            });
        },

        setLocation(location) {
            this.location = location;
        },
    },

    mounted() {
        if (!this.location) this.getLocation();
    },
};
