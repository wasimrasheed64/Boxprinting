<template>
    <layout>
        <home-hero-slider :banners="banners" />
        <category-area />
        <trending-products :intro="homePage.company_intro" :products="products"  />
        <shop-banner :promotions="promotions"/>
        <CapabilitiesSection></CapabilitiesSection>
        <content-show :company-intro="homePage.description" />
        <FaqAndBlog :blogs="props.blogs" :faqs="props.faqs"/>
        <HomeSevenTestimonial></HomeSevenTestimonial>
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
    },
    promotions: {
        type: Array,
        default: () => []
    }
    ,
    blogs:{
        type: [],
        default: []
    },
    faqs: {
        type: Array,
        default: () => []
    }
})

console.log('HomePage:', props.promotions)

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
import CapabilitiesSection from '@/components/common/Faqs/CapabilitiesSection.vue';
import ContentShow from '@/components/common/contentShow.vue';
import FaqAccordion from '@/components/common/Faqs/FaqAccordion.vue';
import FaqAndBlog from '@/components/blogs/FaqAndBlog.vue';
import HomeThreeTestimonial from '@/components/testimonial/HomeThreeTestimonial.vue';
import HomeSevenTestimonial from '@/components/testimonial/HomeSevenTestimonial.vue';
import RequestQouteForm from '@/components/forms/RequestQouteForm.vue';
</script>
