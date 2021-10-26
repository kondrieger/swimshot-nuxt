<template>
    <div>
        <Header />
        <main>
            <Nuxt />
        </main>
        <ContactForm />
    </div>
</template>

<script>
import Header from '~/components/Header/Header.vue';
import ContactForm from '~/components/ContactForm/ContactForm.vue';
export default {
    components: {
        Header,
        ContactForm,
    },
};
</script>

<style>
</style>
