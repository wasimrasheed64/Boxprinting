<template>
  <layout :transparent="true">
    <breadcrumb-area title="Contact" subtitle="Contact"/>
    <contact-area/>
  </layout>
</template>

<script>
import { defineComponent } from "vue";
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import ContactArea from "../components/contact/ContactArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ContactArea,
  },
  setup() {
    // useHead({
    //   title: "Contact - outStock",
    // });
  },
});
</script>
