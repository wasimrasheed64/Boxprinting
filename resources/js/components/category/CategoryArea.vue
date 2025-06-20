<template>
    <div :class="`banner__area ${style_2 ? 'pt-95' : ''} ${style_3 ? 'pt-20' : ''} ${style_4 ? 'pt-30' : ''}`">
        <div :class="`container ${style_3 ? 'css-container' : ''}`">
            <div :class="`${!syle_2 && !style_3 && !style_4 ? 'banner__inner p-relative mt--95' : ''} ${style_4 ? 'banner__inner-2 p-relative' : ''}`">
                <div class="row">
                    <div
                        v-for="item in maitnCategories"
                        :key="item.id"
                        class="col-xl-4 col-lg-4 col-md-6"
                    >
                        <div class="banner__item mb-30 p-relative">
                            <div class="banner__thumb fix">
                                <Link :href="item.slug" class="w-img">
                                    <img :src="item.image" alt="banner" />
                                </Link>
                            </div>
                            <div class="banner__content p-absolute transition-3">
                                <h5>
                                    <Link href="/shop">
                                        <span class="theme-font-16 theme-secondary-color">{{ item.name }}</span>
                                    </Link>
                                </h5>
                                <Link href="/shop" class="link-btn theme-font-14 theme-primary-color">Discover now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePage, Link } from '@inertiajs/vue3';

const props = defineProps({
    style_2: Boolean,
    style_3: Boolean,
    style_4: Boolean,
});

const mainCategories = computed(() => usePage().props.mainCategories || []);
</script>
