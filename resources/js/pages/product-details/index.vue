<template>

    <layout :transparent="true">
        <Head>
            <title>{{ title }}</title>
            <meta name="description" :content="description" />
        </Head>
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
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
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

const title = computed(() => props.product.seo_title || 'Create My Packaging')
const description = computed(() =>
    props.product.seo_description || 'Create My Packaging is your go-to destination for custom packaging solutions. Explore our wide range of products and services designed to meet your unique packaging needs.'
)
</script>
