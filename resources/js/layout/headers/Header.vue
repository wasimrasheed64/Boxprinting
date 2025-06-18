<template>
    <header>
        <div
            id="header-sticky"
            style="background: #f8f9fa; border-bottom: 1px solid #e5e5e5"
            :class="`header__area ${transparent ? 'header__transparent' : ''} ${header_big ? 'box-25' : !white_bg ? 'grey-bg' : ''} ${isSticky ? 'sticky' : ''}`"
        >
            <div class="top-bar py-3" style="background: #f8f9fa; border-bottom: 1px solid #e5e5e5">
                <div class="d-flex justify-content-between align-items-center container">
                    <div class="top-bar__left d-flex align-items-center">
                        <div class="logo">
                            <Link href="/">
                                <img :src="siteSettings?.logo" class="logo-width" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div class="top-bar__right text-end">
                        <span class="me-3"><i class="fas fa-phone-alt"></i>{{ siteSettings.phone }}</span>
                        <span><i class="fas fa-envelope"></i> {{ siteSettings.email}} </span>
                    </div>
                </div>
            </div>

            <div :class="`${header_big ? 'container-fluid' : 'container'}`">
                <div class="row align-items-center">
                    <div :class="`${header_big ? 'col-xl-7 col-lg-6 col-md-2 col-sm-1 col-2' : 'col-xl-9 col-lg-9 col-md-8 col-sm-8'}`">
                        <div :class="`header__right p-relative ${header_big ? '' : 'd-flex justify-content-between align-items-center'}`">
                            <div :class="`main-menu ${header_big ? 'main-menu-2 text-center' : ''} d-none d-lg-block`">
                                <nav>
                                    <Menus />
                                </nav>
                            </div>
                            <div @click.prevent="handleOffcanvas" class="mobile-menu-btn d-lg-none">
                                <a href="#" class="mobile-menu-toggle"><i class="fas fa-bars"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <SearchPopup ref="searchPopupRef" />
    <OffCanvas ref="offCanvasRef" />
</template>
<style>
.logo-width{
    width: 20%;
}
</style>

<script setup lang="ts">
// external
import { ref, onMounted } from 'vue';
import { usePage, Link } from '@inertiajs/vue3';

// internal
import SearchPopup from '@/components/common/modals/SearchPopup.vue';
import OffCanvas from '@/components/common/sidebar/OffCanvas.vue';
import Menus from './Menus.vue';

// props
defineProps({
    header_big: {
        type: Boolean,
        default: false,
    },
    white_bg: {
        type: Boolean,
        default: false,
    },
    transparent: {
        type: Boolean,
        default: false,
    },
});

// refs
const isSticky = ref(false);
const siteSettings = ref(usePage().props?.siteSettings || {});
const searchPopupRef = ref(null);
const offCanvasRef = ref(null);


// methods
const handleSticky = () => {
    isSticky.value = window.scrollY > 80;
};

const handleOffcanvas = () => {
    offCanvasRef.value?.OpenOffcanvas();
};

// lifecycle
onMounted(() => {
    window.addEventListener('scroll', handleSticky);
});
</script>
