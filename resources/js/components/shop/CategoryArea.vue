<template>
    <section class="shop__area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8">
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
                                        class="col-xl-4 col-lg-4 col-md-6 col-sm-6 custom-col-10"
                                    >
                                        <Categoryitem :item="item" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-40">
                            <!-- Pagination or other content can go here -->
                        </div>
                    </div>
                </div>

                <div v-if="shop_right" class="col-xl-3 col-lg-3 col-md-4">
                    <ShopSidebar />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Categoryitem from '@/components/products/Categoryitem.vue';
import ShopSidebar from './ShopSidebar.vue';
import SortFiltering from './filter-widget/SortFiltering.vue';
import ProductItem from '../products/ProductItem.vue';
import ProductListItem from '../products/ProductListItem.vue';
import Pagination from '../../ui/Pagination.vue';

import { useProductsStore } from '../../store/useProducts';

// Define props
const props = defineProps<{
    categories: Array<any>;
    shop_right?: boolean;
}>();

// Use store
const store = useProductsStore();
</script>
