<template>
  <section class="page__title p-relative d-flex align-items-center" :style="{ backgroundImage: `url(${bg})`}">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="page__title-inner text-center">
                    <h1>{{title}}</h1>
                    <div class="page__title-breadcrumb">
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{{subtitle}}</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bg from '../../../../assets/img/page-title/page-title-1.jpg';
import { Link } from '@inertiajs/vue3';

export default defineComponent({
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { Link },
  props:{
    title:{
      type:String,
      required:true,
    },
    subtitle:{
      type:String,
      required:true,
    },
  },
  data() {
    return {
      bg
    }
  },
})
</script>
