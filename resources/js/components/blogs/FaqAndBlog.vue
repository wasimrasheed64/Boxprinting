<script setup lang="ts">

import FaqAccordion from '@/components/common/Faqs/FaqAccordion.vue';
import BlogArea from '@/components/blogs/BlogArea.vue';
const props = defineProps({
    blogs: {
        type: Array,
        default: () => []
    },
    faqs: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="container my-5">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
            <blog-area :blogs="props.blogs" />
        </div>
        <div class="col-lg-6 col-md-6 col-12">

            <FaqAccordion :faqs="props.faqs" />
        </div>

    </div>
    </div>

</template>

<style scoped>

</style>
