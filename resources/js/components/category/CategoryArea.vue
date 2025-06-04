<template>
  <div
    :class="`banner__area ${style_2?'pt-95':''} ${style_3?'pt-20':''} ${style_4?'pt-30':''}`"
  >
    <div :class="`container ${style_3 ? 'css-container' : ''}`">
      <div
        :class="`${style_2?'':!style_3 && !style_4 && 'banner__inner p-relative mt--95'} ${style_4 ? 'banner__inner-2 p-relative' : ''}`"
      >
        <div class="row">
          <div
            v-for="item in categoryData"
            :key="item.id"
            class="col-xl-4 col-lg-4 col-md-6"
          >
            <div class="banner__item mb-30 p-relative">
              <div class="banner__thumb fix">
                <Link href="/shop" class="w-img">
                  <img :src="item.img" alt="banner" />
                </Link>
              </div>
              <div class="banner__content p-absolute transition-3">
                <h5>
                  <Link href="/shop" >
                    <span v-html="item.parentTitle"></span>
                  </Link>
                </h5>
                <Link href="/shop" class="link-btn">Discover now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import category_data from "../../../data/category-data";
import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
    style_3: {
      type: Boolean,
      default: false,
    },
    style_4: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      categoryData: category_data.slice(0, 3),
    };
  }
});
</script>
