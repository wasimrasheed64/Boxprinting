<template>
  <section class="blog__area pt-100 pb-100">
    <div class="container">
      <div class="row grid">
        <masonry-wall
          :items="blogData.filter((b) => b.blog === 'blog-masonry')"
          :gap="30"
        >
          <template #default="{ item }">
            <div class="blog__wrapper">
              <div class="blog__item mb-60">
                <div class="blog__thumb fix">
                  <Link :href="`/blog-details/${item.id}`" class="w-img">
                    <img :src="item.img" alt="blog" />
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
                    <span>/ {{item.date}}</span>
                  </div>
                  <p>
                    {{item.desc}} [...]
                  </p>
                  <Link :href="`/blog-details/${item.id}`" class="os-btn">read more</Link>
                </div>
              </div>
            </div>
          </template>
        </masonry-wall>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  setup() {
    return {
      blogData,
    };
  },
});
</script>
