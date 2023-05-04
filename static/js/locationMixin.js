export default {
    data() {
        return {
            location: null,
            sve: 'Екатеринбург',
            mow: 'Москва',
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
            return this.location?.toLowerCase() === 'another';
        },
    },

    methods: {
        async getLocation() {
            await fetch('http://ip-api.com/json', {
                method: 'GET',
            }).then((resp) => {
                resp.json().then(setLocation(body.region));
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
