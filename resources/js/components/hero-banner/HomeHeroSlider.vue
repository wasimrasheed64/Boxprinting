<template>
    <section :class="`slider__area p-relative tp_hero`">
        <Carousel :items-to-show="1" :wrap-around="banners.length > 1" class="slider-active">
            <Slide
                v-for="item in banners"
                :key="item.id"
                :class="`single-slider d-flex align-items-center ${item.position}`"
                :style="{
          backgroundImage: `url(${item.image})`,
          height: height,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
            >
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                            <div class="slider__content">
                                <h2 class="theme-primary-color" v-if="item.heading" v-html="item.heading"></h2>
                                <p class="theme-primary-color" v-if="item.description" v-html="item.description"></p>
                                <Link
                                    v-if="item.link"
                                    :href="item.link"
                                    class="os-btn os-btn-2  theme-color-button"
                                >
                                    {{ item.button_text || 'Discover Now' }}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    banners: {
        type: Array,
        required: true,
    },
    height: {
        type: String,
        default: '500px', // Default slider height
    },
})
</script>
