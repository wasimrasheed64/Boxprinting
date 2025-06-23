<template>
    <layout :transparent="true">
        <Head>
            <title>{{ title }}</title>
            <meta name="description" :content="description" />
        </Head>
        <breadcrumb-area :title="category.name" :subtitle="category.name" :image="category.banner_image" />
        <product-area :products="products" :category="category" />
        <subscribe-area></subscribe-area>
    </layout>
</template>

<script setup lang="ts">
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import ProductArea from '@/components/shop/ProductArea.vue';
import SubscribeArea from '@/components/subscribe/SubscribeArea.vue';
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    category: {
        type: {},
    },
    products: {
        type: Array,
        default: () => []
    },
})
const title = computed(() => props.category.seo_title || 'Create My Packaging')
const description = computed(() =>
    props.category.seo_description || 'Create My Packaging is your go-to destination for custom packaging solutions. Explore our wide range of products and services designed to meet your unique packaging needs.'
)
// Optional: Use this if you're in Nuxt 3 or using @vueuse/head
// useHead({ title: "Shop - outStock" });
</script>
