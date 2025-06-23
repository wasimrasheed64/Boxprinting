<template>
  <div class="sidebar__wrapper">
    <div class="sidebar__widget mb-55">
      <div class="sidebar__widget-title mb-25">
        <h3>Latest Posts</h3>
      </div>
      <div class="sidebar__widget-content">
        <div class="rc__post-wrapper">
          <ul>
            <li
              v-for="(blog, i) in blogData.slice(3, 6)"
              :key="i"
              class="d-flex"
            >
              <div class="rc__post-thumb mr-20">
                <Link :href="`/blog-details/${blog.id}`">
                  <img :src="blog.img" alt="blog-1" style="width:70px;height: 70px;object-fit: cover;"/>
                </Link>
              </div>
              <div class="rc__post-content">
                <h6>
                  <Link :href="`/blog-details/${blog.id}`">
                    <span v-html="blog.title.slice(0,20)"></span>
                  </Link>
                </h6>
                <div class="rc__meta">
                  <span>{{ blog.date }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <div class="sidebar__widget mb-55">
          <div class="sidebar__widget-title mb-25">
              <h3>Related Posts</h3>
          </div>
          <div class="sidebar__widget-content">
              <div class="rc__post-wrapper">
                  <ul>
                      <li
                          v-for="(blog, i) in blogData.slice(3, 6)"
                          :key="i"
                          class="d-flex"
                      >
                          <div class="rc__post-thumb mr-20">
                              <Link :href="`/blog-details/${blog.id}`">
                                  <img :src="blog.img" alt="blog-1" style="width:70px;height: 70px;object-fit: cover;"/>
                              </Link>
                          </div>
                          <div class="rc__post-content">
                              <h6>
                                  <Link :href="`/blog-details/${blog.id}`">
                                      <span v-html="blog.title.slice(0,20)"></span>
                                  </Link>
                              </h6>
                              <div class="rc__meta">
                                  <span>{{ blog.date }}</span>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import blogData from "../../../../data/blog-data.js";

import { Link } from '@inertiajs/vue3';
export default defineComponent({
  components: { Link },
  setup() {
    const categoryData = [
      {
        id: "accessories",
        title: "Accessories",
        target: "collapseAccessories",
        expanded: true,
        show: true,
        category_list: [
          { list: "Catagories 1" },
          { list: "Catagories 2" },
          { list: "Catagories 3" },
        ],
      },
      {
        id: "cloth",
        target: "collapsecloth",
        title: "Clothing",
        category_list: [
          { list: "Catagories 1" },
          { list: "Catagories 2" },
          { list: "Catagories 3" },
        ],
      },
      {
        id: "men",
        target: "collapsemen",
        title: "Men's",
        category_list: [
          { list: "Catagories 1" },
          { list: "Catagories 2" },
          { list: "Catagories 3" },
        ],
      },
      {
        id: "music",
        target: "collapsemusic",
        title: "Music",
        category_list: [
          { list: "Catagories 1" },
          { list: "Catagories 2" },
          { list: "Catagories 3" },
        ],
      },
    ];
    return { categoryData,blogData };
  },
});
</script>
