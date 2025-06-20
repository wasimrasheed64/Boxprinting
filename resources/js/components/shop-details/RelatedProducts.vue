<template>
    <section class="related__product pb-20 mt-20">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section__title-wrapper mt-20 mb-30 ">
                        <div class=" mb-10">
                            <h2>Related Products</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div
                    v-for="(prdItem, i) in item"
                    :key="i"
                    class="col-xl-3 col-lg-3 col-md-6 col-sm-6"
                >
                    <product-item :item="prdItem" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProductItem from '../products/ProductItem.vue'

const props = defineProps<{
    item: any
}>()


</script>
