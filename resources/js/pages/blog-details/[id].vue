<template>
  <layout :white_bg="true">
    <blog-details-area :item="item"/>
  </layout>
</template>

<script>
import { defineComponent } from "vue";
import Layout from "../../layout/AppLayout.vue";
import blogData from "../../../data/blog-data";
import BlogDetailsArea from "../../components/blog-details/BlogDetailsArea.vue";

export default defineComponent({
  data() {
    return {
      item:{}
    }
  },
  components: {
    Layout,
    BlogDetailsArea,
  },
  setup() {
    useHead({
      title: "Blog Details - outStock",
    });
    return {
      blogData,
    }
  },
  created(){
    const id = useRoute().params.id;
    const item = blogData.find(b => Number(b.id) === Number(id))
    this.item = item
  }
});
</script>
