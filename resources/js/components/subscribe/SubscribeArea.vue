<template>
    <section :class="`mt-5 subscribe__area ${style_2 ? 'grey-bg box-m-15' : ''} pb-100 ${style_3 ? 'p-relative' : ''}` ">
        <div :class="`${style_3 ? 'css-container' : 'container'}`">
            <request-qoute-form></request-qoute-form>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RequestQouteForm from '@/components/forms/RequestQouteForm.vue';

export default defineComponent({
    components: { RequestQouteForm },
    props: {
        style_2: {
            type: Boolean,
            default: false,
        },
        style_3: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            inputVal: '',
        };
    },
    methods: {
        handleFormSubmit() {
            console.log(this.inputVal);
        },
    },
});
</script>
<style scoped>
.subscribe__area {
    background: #f9f7f0;
}
</style>
