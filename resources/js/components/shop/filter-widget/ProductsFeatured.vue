<template>
  <div class="sidebar__widget">
      <div class="sidebar__widget-title mb-30">
          <h3>Featured Products</h3>
      </div>
      <div class="sidebar__widget-content">
          <div class="features__product">
              <ul>
                  <li v-for="(item,i) in featured_prd" :key="i" class="mb-20">
                      <div class="featires__product-wrapper d-flex">
                          <div class="features__product-thumb mr-15">
                            <Link :href="`/product-details/${item.id}`">
                                <img :src="item.img" alt="pro-sm-1" style="width: 86px;height: 110px;">
                            </Link>
                          </div>
                          <div class="features__product-content">
                              <h5>
                                <Link :href="`/product-details/${item.id}`">
                                    <span v-html="item.title"></span>
                                </Link>
                              </h5>
                              <div class="price">
                                  <span>${{item.price}}</span>
                                  <span v-if="item.old_price" class="old-price">
                                    <del>${{item.old_price}}</del>
                                </span>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useProductsStore } from '../../../store/useProducts';

import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
    setup() {
    const store = useProductsStore();
    const featured_prd = store.products.filter(p => p.trending).slice(0,2)
    return {featured_prd}
  }
})
</script>
