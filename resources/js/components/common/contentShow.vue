<template>
    <section class="bg-brown py-5 position-relative text-dark">
        <div class="container">
            <div
                class="p-4 p-md-5 shadow overflow-auto   custom-description-box"
                style="max-height: 60vh;"
            >
                <span v-html="companyIntro"></span>
            </div>
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
    background-color: #0F2D47;
}
</style>
