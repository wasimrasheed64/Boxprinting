<template>
    <section :class="`blog__area ${style_2 ? 'pt-90' : ''}`">
        <div :class="style_3 ? 'css-container' : 'container'">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section__title-wrapper text-center mb-20">
                        <div class="mb-5">
                            <h2 class="theme-primary-color">Our Blog Posts</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div
                    class="col-xl-12 col-md-12 mb-1"
                    v-for="item in blogs"
                    :key="item.id"
                >
                    <BlogItemHorizontal :item="item" />
                </div>
            </div>

            <div class="row">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import blogData from '../../../data/blog-data'
import BlogItemHorizontal from '@/components/blogs/BlogItemHorizontal.vue';

const props = defineProps<{
    style_2?: boolean
    style_3?: boolean
    blogs: []
}>()




</script>

<style scoped>
.view-more-btn {
    background-color: #333;
    color: #fff;
    padding: 12px 25px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-more-btn:hover {
    background-color: #555;
}
</style>
