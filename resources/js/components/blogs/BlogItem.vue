<template>
  <div class="blog__item mb-30">
    <div class="blog__thumb fix">
      <Link :href="`/blog-details/${item.id}`" class="w-img">
        <img :src="item.img" alt="blog"/>
      </Link>
    </div>
    <div class="blog__content">
      <h4>
        <Link :href="`/blog-details/${item.id}`">
          <span v-html="item.title"></span>
        </Link>
      </h4>
      <div class="blog__meta">
        <span>By <a href="#">{{item.author}}</a></span>
        <span> / {{item.date}}</span>
      </div>
      <div v-if="!style_2">
        <p>
          {{item.desc}}
        </p>
        <Link :href="`/blog-details/${item.id}`" class="os-btn">read more</Link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  props: {
    item: {
      default: {},
      required: true,
    },
    style_2:{
      default:false,
    }
  },
});
</script>
