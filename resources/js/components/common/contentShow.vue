<template>
    <section class="bg-brown py-5 position-relative text-dark">
        <div class="container">
            <div
                class="rounded bg-white p-4 p-md-5 shadow overflow-auto"
                style="max-height: 80vh;"
                v-html="companyIntro"
            ></div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps({
    companyIntro: {
        type: String,
        required: true,
    },
});
</script>

<style scoped lang="scss">
.bg-brown {
    background-color: #EAA374;
}
</style>
