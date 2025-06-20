<template>
    <div class="product__wrapper mb-60">
        <div class="product__thumb">
            <Link :href="`/${item.slug}`" class="w-img">
                <img :src="item.category_image" alt="product-img" />
            </Link>
            <div class="product__action transition-3">
                <!-- Actions can be added here -->
            </div>
        </div>
        <div class="product__content p-relative">
            <div class="product__content-inner">
                <Link :href="`${item.slug}`">
                    <span class="theme-secondary-color" v-html="item.name"></span>

                </Link>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

// Define props using Composition API
const props = defineProps<{
    item: {
        id: number
        category_image: string
        name: string
        slug: string
    }
}>()
</script>
