<template>
  <div :class="`blog__item mb-60 ${style_2?'':'blog__border-bottom pb-60'}`">
    <div class="blog__thumb fix">
      <Link :href="`/blog-details/${blog.id}`" class="w-img">
        <img :src="blog.img" alt="blog" />
      </Link>
    </div>
    <div class="blog__content">
      <h4 :class="`${style_3?'':'blog__title'}`">
        <Link :href="`/blog-details/${blog.id}`">
          <span v-html="blog.title"></span>
        </Link>
      </h4>
      <div class="blog__meta">
        <span>By <a href="#">{{ blog.author }}</a></span>
        <span>/ {{ blog.date }}</span>
      </div>
      <p>{{ style_3 ? blog.desc.slice(0,80) : blog.desc }} [...]</p>
      <Link :href="`/blog-details/${blog.id}`" class="os-btn">read more</Link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  props: {
    blog: {
      type: Object,
      required: true,
    },
    style_2:{
      type:Boolean,
      default:false,
    },
    style_3:{
      type:Boolean,
      default:false,
    }
  },
});
</script>
