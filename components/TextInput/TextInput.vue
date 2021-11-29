<template>
    <div
        class="text-input"
        :class="[
            { 'text-input--active': active },
            { 'text-input--invalid': error },
            { 'text-input--disabled': disabled },
        ]"
    >
        <label class="text-input__label" :for="inputId" :class="getLength > 0 ? 'hidden-placeholder' : ''">
            <slot />
        </label>
        <div class="text-input__container">
            <input
                ref="input"
                v-if="tag === 'input'"
                v-bind="$attrs"
                v-on="customHandlers ? $listeners : handlers"
                class="text-input__input"
                :id="inputId"
                :value="internal_value"
                :type="type"
                :disabled="disabled"
                :aria-describedby="`${inputId}-alert`"
                :required="required"
                :placeholder="placeholderText"
                @focus="focus = true"
                @blur="focus = false"
            />
            <the-mask
                ref="TheMask"
                v-if="tag === 'input-masked'"
                v-bind="$attrs"
                v-on="customHandlers ? $listeners : handlers"
                class="text-input__input"
                :id="inputId"
                :value="internal_value"
                :type="type"
                :disabled="disabled"
                :placeholder="placeholderText"
                :aria-describedby="`${inputId}-alert`"
                @focus="focus = true"
                @blur="focus = false"
                :masked="true"
            ></the-mask>
            <textarea
                ref="textarea"
                v-if="tag === 'textarea'"
                v-bind="$attrs"
                v-on="customHandlers ? $listeners : handlers"
                class="text-input__input text-input__input--textarea"
                rows="1"
                :id="inputId"
                :value="internal_value"
                :disabled="disabled"
                :placeholder="placeholderText"
                :aria-describedby="`${inputId}-alert`"
                autoresize
                @focus="focus = true"
                @blur="focus = false"
            />
            <slot name="after" />
        </div>
        <div :id="`${inputId}-alert`" class="error-message text-input__error" role="alert">
            <slot name="error" :error="error">{{ error }}</slot>
        </div>
    </div>
</template>

<script>
import inputMixin from './inputMixin';
import './styles.css';
import { TheMask } from 'vue-the-mask';

const validTags = ['input', 'textarea', 'input-masked'];

export default {
    name: 'text-input',
    components: {
        TheMask,
    },
    inheritAttrs: false,
    mixins: [inputMixin],
    props: {
        value: {},
        type: { type: String, default: 'text' },
        tag: {
            type: String,
            default: 'input',
            validator(value) {
                return validTags.indexOf(value) !== -1;
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        error: String,
        placeholderText: String,
        customHandlers: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            inputId: `text-input-id-${this._uid}`,
            internal_value: this.value,
            focus: false,
        };
    },
    methods: {},
    watch: {
        value(value) {
            this.internal_value = value;
            const { textarea } = this.$refs;
            if (textarea) {
                textarea.value = this.internal_value;
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 5 + 'px';
            }
        },
    },
    computed: {
        active() {
            return this.focus || this.internal_value;
        },

        handlers() {
            const keys = Object.keys(this.$listeners);
            const handlers = {};
            keys.forEach((k) => {
                handlers[k] = (e) => this.$emit(k, e);
            });
            handlers.input = (e) => {
                /* поиск в массиве дочерних компонентов соответствующего со свойством mask, и получение значения его вводимого value */
                if (this.$children.find((x) => x.mask)) {
                    this.internal_value = this.$children.find((x) => x.mask).lastValue;
                } else {
                    this.internal_value = e.target.value;
                }

                this.$emit('input', this.internal_value);
            };
            return handlers;
        },

        getLength() {
            if (this.internal_value === null || typeof this.internal_value === 'undefined') {
                return 0;
            }
            return this.internal_value.length;
        },
    },
};
</script>
