<template>
  <layout :transparent="true">
    <breadcrumb-area title="News & Blog" subtitle="Blogs"/>
    <blog-standard-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import BlogStandardArea from "../components/blogs/BlogStandardArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    BlogStandardArea,
  },
  setup() {
    // useHead({
    //   title: "Blog - outStock",
    // });
  },
});
</script>
