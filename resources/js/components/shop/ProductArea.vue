<template>
    <section class="shop__area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="shop__header">
                        <h2 class="shop__title">{{ category.name }}</h2>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="shop__content-area pt-10">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active pt-10" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                                <div class="row custom-row-10">
                                    <div
                                        v-for="(item, i) in products"
                                        :key="i"
                                        class="col-xl-4 col-lg-4 col-md-6 col-sm-6 custom-col-10"
                                    >
                                        <product-item :item="item" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="sticky-top" style="top: 120px; z-index: 1">
                    <custom-qoute></custom-qoute>
                    </div>
                </div>
            </div>
            <div class="row">
               <div class="col-lg-12 col-md-12 col-12 mt-10">
                   <div class="custom-description-box ">
                        <span v-html="category.description"></span>
                   </div>
               </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProductItem from '../products/ProductItem.vue'
import CustomQoute from '@/components/forms/CustomQoute.vue';

// Props
defineProps({
    shop_right: {
        type: Boolean,
        default: false
    },
    products:{
        type: Array,
        default: () => []
    },
    category: {
        type: Object,
        default: () => ({})
    }
})

// Store

// Handle pagination event

</script>
<style scoped>
/* Global or scoped CSS */
.custom-description-box {
    background-color: #f7f7f7; /* or #f8f9fa for Bootstrap light */
    border-radius: 2rem;
    padding: 3rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

</style>
