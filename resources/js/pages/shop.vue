<template>
    <layout :transparent="true">
        <breadcrumb-area title="Shop" subtitle="Shop" />
        <shop-area />
    </layout>
</template>

<script setup>
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import ShopArea from "../components/shop/ShopArea.vue";

const props = defineProps({
    category: {
        type: Array,
        default: () => []
    },
    products: {
        type: Array,
        default: () => []
    },
})
// Optional: Use this if you're in Nuxt 3 or using @vueuse/head
// useHead({ title: "Shop - outStock" });
</script>
