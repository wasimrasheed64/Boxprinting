<template>
    <layout :transparent="true">
        <Head>
            <title>{{ title }}</title>
            <meta name="description" :content="description" />
        </Head>
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
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{
    mainCategory: {
        name: string;
        [key: string]: any;
    };
    categories: Array<any>;
}>();

const title = computed(() => props.mainCategory?.seo_title || 'Create My Packaging')
const description = computed(() =>
    props.mainCategory?.seo_description || 'Create My Packaging is your go-to destination for custom packaging solutions. Explore our wide range of products and services designed to meet your unique packaging needs.'
)
// useHead({
//     title: "Shop - outStock",
// });
</script>
