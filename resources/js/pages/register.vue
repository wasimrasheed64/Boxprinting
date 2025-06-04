<template>
  <layout :transparent="true">
    <breadcrumb-area title="Register" subtitle="Register"/>
    <register-area/>
  </layout>
</template>

<script>
import { defineComponent } from "vue";
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import RegisterArea from "../components/login-register/RegisterArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    RegisterArea,
  },
  setup() {
    // useHead({
    //   title: "Register - outStock",
    // });
  },
});
</script>
