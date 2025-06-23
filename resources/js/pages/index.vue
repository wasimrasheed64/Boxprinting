<template>
    <layout>
        <Head>
            <title>{{ title }}</title>
            <meta name="description" :content="description" />
        </Head>
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
import { computed, defineProps } from 'vue';
import { Head } from '@inertiajs/vue3';


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

const title = computed(() => props.homePage.seo_title || 'Create My Packaging')
const description = computed(() =>
    props.homePage.seo_description || 'Create My Packaging is your go-to destination for custom packaging solutions. Explore our wide range of products and services designed to meet your unique packaging needs.'
)
// Components
import Layout from '../layout/AppLayout.vue'
import HomeHeroSlider from '../components/hero-banner/HomeHeroSlider.vue'
import CategoryArea from '../components/category/CategoryArea.vue'
import TrendingProducts from '../components/products/TrendingProducts.vue'
import ShopBanner from '../components/shop-banner/ShopBanner.vue'
import SubscribeArea from '../components/subscribe/SubscribeArea.vue'
import { object } from 'yup';
import CapabilitiesSection from '@/components/common/Faqs/CapabilitiesSection.vue';
import ContentShow from '@/components/common/contentShow.vue';
import FaqAndBlog from '@/components/blogs/FaqAndBlog.vue';
import HomeSevenTestimonial from '@/components/testimonial/HomeSevenTestimonial.vue';
</script>
