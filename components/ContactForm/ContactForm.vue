<template>
    <div :style="{ 'background-image': 'url(' + bgPic + ')' }" class="contact-form__bg" id="contact-form">
        <div class="container contact-form">
            <div id="schoolRequestFormElement"></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable*/
import bgPic from '~/assets/jpg/things_bg.jpg';
import $ from 'jquery';

export default {
    name: 'ContactForm',
    data() {
        return {
            bgPic,
        };
    },
    head() {
        return {
            script: [
                {
                    hid: 'form',
                    src: 'https://static.education-erp.com/all.js?schoolTypeId=139&showMap=true',
                    defer: true,
                    id: 'schoolRequestScript',
                    callback: () => {
                        console.log('Форма загружена');
                    },
                },
            ],
        };
    },
    computed: {
        checkSuccess() {
            const success = $('.success-message');
            console.log(success.css('display'));
            return success.css('display') === 'block';
        },
    },
    methods: {
        sendLead() {
            this.$fb.track('Lead');
            console.log(this.$fb);
        },
    },
    mounted() {
        const self = this;
        $('input[type="submit"]').on('click', function () {
            $('html, body').animate({
                scrollTop: $('#contact-form').offset().top,
            });

            let checkSuccess = setInterval(() => {
                const success = $('.success-message');

                if (success.css('display') === 'block') {
                    clearInterval(checkSuccess);

                    if (!window.dataLayer.find((item) => item.event === 'form')) {
                        window.dataLayer.push({
                            event: 'form',
                        });
                        self.sendLead();
                        console.log('Заявка отправлена');
                    }
                }
            }, 1000);
        });
    },
};
</script>

<style>
.contact-form {
    padding-top: calc(var(--gs) * 12);
    padding-bottom: calc(var(--gs) * 12);

    @media (--desktop) {
        padding-top: calc(var(--gs) * 9);
        padding-bottom: calc(var(--gs) * 9);
    }

    @media (--tablet) {
        padding-top: calc(var(--gs) * 6);
        padding-bottom: calc(var(--gs) * 4);
    }

    &__bg {
        background-size: cover;
        background-repeat: no-repeat;
        background-color: rgba(41, 177, 255, 0.3);

        @media (--desktop) {
            background-size: auto 110%;
        }
    }

    & input[type='text'],
    & input[type='email'],
    & select {
        width: 100%;
        height: 60px;
        padding: 0 calc(var(--gs) * 2);
        color: #2b2a29 !important;
        border: 2px solid #c9c9c9 !important;
        font-size: 16px;
        line-height: 1.33;
        overflow: hidden;
        border-radius: 20px !important;
    }

    & input[type='submit'] {
        display: block !important;
        align-items: center;
        justify-content: center;
        border-radius: 25px !important;
        cursor: pointer;
        box-shadow: 0 13px 30px 1px rgb(49 145 204 / 80%);
        font-size: 18px !important;
        font-weight: 700 !important;
        color: var(--cl-white);
        background-color: var(--cl-blue) !important;
        border: 4px solid var(--cl-lt-blue) !important;
        font-family: var(--font-geometria) !important;
        text-transform: uppercase;

        &:hover {
            background-color: var(--cl-md-blue) !important;
            border-color: var(--cl-md-blue) !important;
        }

        &:active {
            background-color: var(--cl-dk-blue) !important;
            border-color: var(--cl-dk-blue) !important;
            transform: translateY(2px) !important;
        }
    }

    #schoolRequestformDiv,
    #schoolRequestMapDiv {
        @media (--tablet) {
            width: 100% !important;
        }
    }

    #schoolRequestMapDiv {
        @media (--tablet) {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }

    #schoolRequestformDiv {
        background-color: #fff;
        border-radius: 30px !important;
        margin-top: 20px;

        @media (--tablet) {
            margin-top: 0;
        }

        &,
        & * {
            font-family: var(--font-circe) !important;
        }
    }

    #schoolRequestAgreementDiv {
        @media (--tablet) {
            font-size: 14px;
        }

        & div + div {
            margin-left: 10px;
        }
    }
}
</style>
