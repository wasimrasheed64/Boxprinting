<template>
  <layout :transparent="true">
    <breadcrumb-area title="Login" subtitle="Login"/>
    <login-area/>
  </layout>
</template>

<script>
import { defineComponent } from "vue";
import Layout from "../layout/AppLayout.vue";
import BreadcrumbArea from "../components/common/breadcrumb/BreadcrumbArea.vue";
import LoginArea from "../components/login-register/LoginArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    LoginArea,
  },
  setup() {
    useHead({
      title: "Login - outStock",
    });
  },
});
</script>
