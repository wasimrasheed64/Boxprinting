<template>
    <div class="product__wrapper mb-60">
        <Link :href="item.slug">
        <div class="product__thumb">
            <Link :href="item.slug" class="w-img">
                <img :src="item.img" alt="product-img" />
                <img class="product__thumb-2" :src="item.thumb_img" alt="product-img" />
            </Link>
            <div class="product__action transition-3">
                <!-- Actions can be added here -->
            </div>
        </div>
        <div class="product__content p-relative">
            <div class="product__content-inner">
                <Link :href="item.slug">
                    <span class="theme-secondary-color" v-html="item.title"></span>

                </Link>

            </div>
            <div class="add-cart p-absolute transition-3">
                <Link :href="item.slug" class="btn theme-color-button btn-sm btn-primary">
                    Request a Quote</Link>
                <!-- Add to Cart button or logic can go here -->
            </div>
        </div>
        </Link>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

// Define props using Composition API
const props = defineProps<{
    item: {
        id: number
        img: string
        thumb_img: string
        title: string
    }
}>()
</script>
