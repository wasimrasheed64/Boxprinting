<template>
    <layout :transparent="true">
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

const props = defineProps({
    category: {
        type: {},
    },
    products: {
        type: Array,
        default: () => []
    },
})
console.log('props',props)
// Optional: Use this if you're in Nuxt 3 or using @vueuse/head
// useHead({ title: "Shop - outStock" });
</script>
