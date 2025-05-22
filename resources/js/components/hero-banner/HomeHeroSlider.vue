<template>
  <section :class="`slider__area p-relative tp_hero`">
    <Carousel :items-to-show="1" :wrap-around="slider_data.length > 1" class="slider-active">
      <Slide
        v-for="item in slider_data"
        :key="item.id"
        :class="`single-slider slider__height d-flex align-items-center`"
        :style="{ backgroundImage: `url(${item.bgImg})` }"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
              <div class="slider__content">
                <h2 v-html="item.title"></h2>
                <p v-html="item.subtile"></p>
                <nuxt-link
                  href="/shop"
                  class="os-btn os-btn-2 hero-slider-btn">
                  Discover now
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
// external
import slider_img_1 from "../../../assets/img/slider/slider-1.jpg";

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  setup() {
    const slider_data = ref([
      {
        id: 1,
        bgImg: slider_img_1,
        title: "Think Different &<br /> Do it otherwise",
        subtile:
          "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
      },
    ]);
    return { slider_data };
  },
});
</script>
