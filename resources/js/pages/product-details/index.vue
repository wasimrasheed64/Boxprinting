<template>
    <layout :transparent="true">
        <breadcrumb-area title="Product Details" subtitle="Product Details" />
        <shop-details-area :item="product" :product="product" :promotions="promotions" :blogs="blogs" :faqs="faqs" />
    </layout>
</template>

<script setup lang="ts">
import Layout from "../../layout/AppLayout.vue";
import BreadcrumbArea from "../../components/common/breadcrumb/BreadcrumbArea.vue";
import ShopDetailsArea from "../../components/shop-details/ShopDetailsArea.vue";
const props = defineProps({
    'product': {
        type: Object,
        default: () => ({})
    },
    'promotions': {
        type: Array,
        default: () => []
    },
    'blogs': {
        type: Array,
        default: () => []
    },
    'faqs': {
        type: Array,
        default: () => []
    }
})
</script>
