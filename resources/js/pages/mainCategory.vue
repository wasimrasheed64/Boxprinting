<template>
    <layout :transparent="true">
        <breadcrumb-area :title="mainCategory.name" :subtitle="mainCategory.name" />
        <category-area :categories="categories" />
    </layout>
</template>

<script setup lang="ts">
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import ShopArea from "../components/shop/ShopArea.vue";
import CategoryArea from '@/components/shop/CategoryArea.vue';

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
