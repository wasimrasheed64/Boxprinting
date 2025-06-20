<template>
    <div class="banner__area-2 ptb-75">
        <div :class="`container-fluid ${style_2 ? '' : 'p-0'}`">
            <div class="row g-0">
                <div
                    v-for="item in banner_products"
                    :key="item.id"
                    :class="`col-xl-${item.class} col-lg-${item.class}`"
                >
                    <div
                        :class="`banner__item-2 banner-${item.id === 1 ? 'right' : 'left'} p-relative mb-30 p${item.id === 1 ? 'r' : 'l'}-15`"
                    >
                        <div class="banner__thumb fix">
                            <Link :href="item.link" class="w-img">
                                <img :src="item.image" alt="banner" />
                            </Link>
                        </div>
                        <div
                            :class="`banner__content-2 ${style_3 ? 'banner__content-4' : ''} ${
                item.id !== 1 && style_3 ? 'banner__content-4-right' : ''
              } p-absolute transition-3`"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    style_2: Boolean,
    style_3: Boolean,
    promotions: {
        type: Array,
        default: () => []
    }
})


const banner_products = props.promotions;
</script>

<style scoped>
.banner__area-2 .sm_desc {
    max-width: 450px;
}
.banner__content-4 .sm_desc {
    max-width: 250px;
}
</style>
