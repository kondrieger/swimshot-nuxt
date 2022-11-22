export default {
    data() {
        return {
            form: {
                name: null,
                phone: null,
                comment: null,
            },
        };
    },

    methods: {
        sendLead() {
            this.$fb.track('Lead');
        },

        async submitForm() {
            this.$v.$touch();
            if (this.$v.$invalid) return;

            if (this.modalComment) this.form.comment = `Хочу к тренеру: ${this.modalComment}`;

            await fetch('https://cloud.1c.fitness/api/hs/lead/Webhook/6cdcce9e-6824-11ed-da8f-00505683b2c0', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.form),
            });

            if (!window.dataLayer.find((item) => item.event === 'form')) {
                window.dataLayer.push({
                    event: 'form',
                });
                this.sendLead();
            }

            this.$emit('formSubmit');
        },
    },
};
