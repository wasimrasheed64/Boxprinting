<template>
  <div class="banner__area-df mt-10">
      <div v-for="item in categoryData" :key="item.id" class="banner__item-3 mb-30">
          <div class="banner__item-3-image m-img">
              <img :src="item.img" alt="">
          </div>
          <div class="banner__content-5">
              <h5>{{item.parentTitle}}</h5>
              <p>{{item.smDesc}}</p>
              <nuxt-link href="/shop" class="os-btn-5">Shop Now</nuxt-link>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import category_data from "../../data/category-data";

export default defineComponent({
  setup() {
    const categoryData = category_data.slice(3, 6);
    return {
      categoryData
    };
  },
});
</script>
