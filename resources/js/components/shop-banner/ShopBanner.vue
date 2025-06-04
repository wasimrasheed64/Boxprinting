<template>
  <div class="banner__area-2 ptb-75">
    <div :class="`container-fluid ${style_2?'':'p-0'}`">
      <div class="row g-0">
        <div
          v-for="item in banner_products"
          :key="item.id"
          class="col-xl-6 col-lg-6"
        >
          <div
            :class="`banner__item-2 banner-${
              item.id === 1 ? 'right' : 'left'
            } p-relative mb-30 p${item.id === 1 ? 'r' : 'l'}-15`"
          >
            <div class="banner__thumb fix">
              <Link :href="`/product-details/${item.id}`" class="w-img">
                <img :src="item.banner_img" alt="banner" />
              </Link>
            </div>
            <div
              :class="`banner__content-2 ${style_3 ? 'banner__content-4' : ''} ${item.id !== 1 && style_3 ? 'banner__content-4-right' : ''} p-absolute transition-3`"
            >
              <span>Products {{ item.category }}</span>
              <h4>
                <Link :href="`/product-details/${item.id}`">{{ item.title }}</Link>
              </h4>
              <p class="sm_desc">
                {{ style_3 ? item.sm_desc.slice(0, 50) : item.sm_desc }}
              </p>
              <Link :href="`/product-details/${item.id}`" class="os-btn os-btn-2">
                buy now /
                <span>${{ item.price }}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProductsStore } from "../../store/useProducts";
import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  props: ["style_2", "style_3"],
  setup() {
    const store = useProductsStore();
    const banner_products = store.products.filter((p) => p.banner).slice(0, 2);
    return {
      banner_products,
    };
  },
});
</script>

<style scoped>
.banner__area-2 .sm_desc {
  max-width: 450px;
}
.banner__content-4 .sm_desc {
  max-width: 250px;
}
</style>
