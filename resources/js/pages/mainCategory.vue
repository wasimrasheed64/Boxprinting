<template>
    <layout :transparent="true">
        <breadcrumb-area :title="mainCategory.name" :subtitle="mainCategory.name" />
        <category-area :categories="categories" :description="mainCategory.description" />
        <home-seven-testimonial></home-seven-testimonial>
        <subscribe-area></subscribe-area>
    </layout>
</template>

<script setup lang="ts">
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import CategoryArea from '@/components/shop/CategoryArea.vue';
import SubscribeArea from '@/components/subscribe/SubscribeArea.vue';
import HomeSevenTestimonial from '@/components/testimonial/HomeSevenTestimonial.vue';

const props = defineProps<{
    mainCategory: {
        name: string;
        [key: string]: any;
    };
    categories: Array<any>;
}>();

// useHead({
//     title: "Shop - outStock",
// });
</script>
