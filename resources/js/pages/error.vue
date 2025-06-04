<template>
  <Layout :transparent="true">
    <BreadcrumbArea title="Error" subtitle="Error" />

    <section class="error__area pt-60 pb-100">
      <div class="container">
        <div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
          <div class="error__content text-center">
            <div class="error__number">
              <h1>{{ error?.statusCode || 500 }}</h1>
            </div>
            <span>{{ error?.message || 'Something went wrong.' }}</span>
            <h2>Nothing To See Here!</h2>
            <p>
              The page you're looking for has been moved or doesn’t exist anymore.
              If you like, you can return to our homepage. If the problem
              persists, please send us an email at
              <span class="highlight comment">basictheme400@gmail.com</span>.
            </p>

            <div class="error__search">
              <Link class="os-btn os-btn-3 os-btn-black" to="/">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../layout/AppLayout.vue';
import BreadcrumbArea from '../components/common/breadcrumb/BreadcrumbArea.vue';
import { Link } from '@inertiajs/vue3';

defineProps({
  error: Object
});

</script>
