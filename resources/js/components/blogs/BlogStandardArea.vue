<template>
  <section class="blog__area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div v-if="left_side" class="col-xl-3 col-lg-4">
          <blog-sidebar />
        </div>
        <div :class="`col-xl-${left_side?'9':'8'} col-lg-8`">
          <div class="blog__wrapper">
            <blog-standard-item
              v-for="(blog, i) in filteredRows.slice(
                pageStart,
                pageStart + countOfPage
              )"
              :key="i"
              :blog="blog"
            />
            <div class="row">
              <div class="col-xl-12">
                <pagination
                  :items="blogData.filter((b) => b.blog === 'blog-standard')"
                  :count-of-page="3"
                  @paginatedData="paginatedData"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="!left_side" class="col-xl-3 col-lg-4 offset-xl-1">
          <blog-sidebar />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import blogData from "../../../data/blog-data.js";
import BlogSidebar from "../common/sidebar/BlogSidebar.vue";
import Pagination from "../../ui/Pagination.vue";
import BlogStandardItem from "./BlogStandardItem.vue";

export default defineComponent({
  components: { BlogSidebar, Pagination, BlogStandardItem },
  props:{
    left_side:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      filteredRows: [],
      pageStart: 0 ,
      countOfPage: 9,
    };
  },
  methods: {
    paginatedData(
      filteredRows= [],
      pageStart = '',
      countOfPage = ''
    ) {
      this.filteredRows = filteredRows;
      this.pageStart = pageStart;
      this.countOfPage = countOfPage;
    },
  },
  setup() {
    return {
      blogData,
    };
  },
});
</script>
