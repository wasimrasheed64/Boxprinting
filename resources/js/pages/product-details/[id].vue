<template>
  <layout :transparent="true">
    <breadcrumb-area title="Product Details" subtitle="Product Details"/>
    <shop-details-area :item="item"/>
  </layout>
</template>

<script>
import { defineComponent } from "vue";
import Layout from "../../layout/AppLayout.vue";
import BreadcrumbArea from "../../components/common/breadcrumb/BreadcrumbArea.vue";
import { useProductsStore } from "@/store/useProducts";
import ShopDetailsArea from "../../components/shop-details/ShopDetailsArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ShopDetailsArea,
  },
  setup() {
    const state = useProductsStore();
    const id = useRoute().params.id;
    const item = state.products.find(p => Number(p.id) === Number(id))
    useHead({
      title: `${item?.title ? item.title : "Product Details"} - outStock`,
    });
    return {item}
  },
});
</script>
