<template>
  <layout :transparent="true">
    <breadcrumb-area title="Shop" subtitle="Shop"/>
    <shop-area/>
  </layout>
</template>

<script>
import { defineComponent } from "vue";
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import ShopArea from "../components/shop/ShopArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ShopArea,
  },
  // setup() {
  //   useHead({title: "Shop - outStock"});
  // },
});
</script>
