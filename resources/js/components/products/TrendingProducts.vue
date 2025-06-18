<template>
    <section class="product__area pt-60 pb-100">
        <div :class="`${style_2 ? 'css-container' : style_3 ? 'container-fluid' : 'container'}`">
            <div class="row">
                <div class="col-xl-12">
                    <div :class="`section__title-wrapper text-center mb-55 ${style_2 ? 'p-relative' : ''}`">
                        <div class="section__title mb-10" v-html="intro">
                        </div>
                    </div>
                </div>
            </div>
            <div :class="`product__slider ${style_2 ? 'product__slider-4' : ''}`">
                <div class="row">
                    <div
                        v-for="item in products"
                        :key="item.id"
                        :class="`${style_3 ? 'col-xl-2 col-lg-3 col-md-4' : 'col-lg-3 col-md-4'} product__item`"
                    >
                        <ProductItem :item="item" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import ProductItem from './ProductItem.vue'
import type { ProductType } from '../../types/productType'



const props = defineProps<{
    style_2?: boolean
    style_3?: boolean
    products: ProductType[]
    intro?: string
}>()
console.log({props})



</script>

