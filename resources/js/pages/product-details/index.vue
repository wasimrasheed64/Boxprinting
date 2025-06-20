<template>
    <layout :transparent="true">
        <breadcrumb-minimal :items="[
    { label: 'Industry', link: '/industry' },
    { label: 'Cosmetics', link: '/industry/cosmetics' },
    { label: 'Makeup Boxes' }
  ]"></breadcrumb-minimal>
        <shop-details-area :item="product" :product="product" :promotions="promotions" :blogs="blogs" :faqs="faqs" />
        <shop-banner :promotions="promotions"/>
        <!-- related products start -->
        <related-products :item="relatedProducts"/>
        <!-- related products end -->
        <subscribe-area></subscribe-area>
    </layout>
</template>

<script setup lang="ts">
import Layout from "../../layout/AppLayout.vue";
import ShopDetailsArea from "../../components/shop-details/ShopDetailsArea.vue";
import ShopBanner from '@/components/shop-banner/ShopBanner.vue';
import SubscribeArea from '@/components/subscribe/SubscribeArea.vue';
import RelatedProducts from '@/components/shop-details/RelatedProducts.vue';
import BreadcrumbMinimal from '@/components/common/breadcrumb/BreadcrumbMinimal.vue';
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
    },
    'relatedProducts': {
        type: Array,
        default: () => []
    },
})
)

</script>
