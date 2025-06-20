<template>
    <section class="shop__area pt-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 mb-30">
                    <div class="shop__header">
                        <p v-if="description" class="shop__description" v-html="description" ></p>
                    </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="shop__content-area">
                        <div class="tab-content" id="pills-tabContent">
                            <div
                                class="tab-pane fade show active"
                                id="pills-grid"
                                role="tabpanel"
                                aria-labelledby="pills-grid-tab"
                            >
                                <div class="row custom-row-10">
                                    <div
                                        v-for="(item, i) in categories"
                                        :key="i"
                                        class="col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10"
                                    >
                                        <Categoryitem :item="item" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Categoryitem from '@/components/products/Categoryitem.vue';



// Define props
const props = defineProps<{
    categories: Array<any>;
    shop_right?: boolean;
    description?: string;
}>();

// Use store
</script>
