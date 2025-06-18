<template>
    <layout>
        <home-hero-slider :banners="banners" />
        <category-area />
        <trending-products :intro="homePage.company_intro" :products="products"  />
        <shop-banner />
        <sale-off-product />
        <client-brand-slider />
        <blog-area />
        <subscribe-area />
    </layout>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Props
const props = defineProps({
    banners: {
        type: [],
        required: true,
    },
    homePage:{
        type: object,
        default: {},
    },
    products:{
      type: [],
      default: []
    }
})

console.log('HomePage:', props.products)

// Components
import Layout from '../layout/AppLayout.vue'
import HomeHeroSlider from '../components/hero-banner/HomeHeroSlider.vue'
import CategoryArea from '../components/category/CategoryArea.vue'
import TrendingProducts from '../components/products/TrendingProducts.vue'
import ShopBanner from '../components/shop-banner/ShopBanner.vue'
import SaleOffProduct from '../components/products/SaleOffProduct.vue'
import ClientBrandSlider from '../components/client-brands/ClientBrandSlider.vue'
import BlogArea from '../components/blogs/BlogArea.vue'
import SubscribeArea from '../components/subscribe/SubscribeArea.vue'
import { object } from 'yup';
</script>
