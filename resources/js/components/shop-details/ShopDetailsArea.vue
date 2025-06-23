<template>
    <section class="shop__area">
        <div class="shop__top grey-bg-6 pt-100 pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="product__modal-box d-flex">
                            <div class="product__modal-nav mr-20">
                                <nav>
                                    <div class="nav nav-tabs" id="product-details" role="tablist">
                                        <button
                                            v-for="(img, i) in relatedImages"
                                            :key="i"
                                            :class="`nav-item nav-link ${img === activeImg.value ? 'active' : ''}`"
                                            @click="handleActiveImg(img)"
                                            style="margin-bottom: 5px"
                                        >
                                            <div class="product__nav-img w-img">
                                                <img :src="img" alt="image" style="width: 95px; height: 120px; object-fit: cover" />
                                            </div>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                            <div class="tab-content mb-20" id="product-detailsContent">
                                <div class="product__modal-img product__thumb w-img">
                                    <img :src="activeImg" alt="product_img" />
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="product__modal-img product__thumb w-img">
                                            <img src="https://usboxprinting.com/images/Payment-For_ProductPage.png" alt="product_img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <product-details-content :item="item" :style_2="true" />
                    </div>
                </div>
            </div>
        </div>

        <ProductStepper></ProductStepper>
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-12 col-12 py-5">
                    <div class="custom-description-box py-5" v-html="item?.description"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProductStepper from '@/components/products/ProductStepper.vue';
import { computed, defineProps, ref } from 'vue';
import ProductDetailsContent from './ProductDetailsContent.vue';

const props = defineProps<{
    item: any;
}>();

const relatedImages = computed(() => {
    const images: string[] = [];
    for (let i = 1; i <= 4; i++) {
        const key = `image_${i}`;
        if (props.item[key]) {
            images.push(props.item[key]);
        }
    }
    return images;
});

const activeImg = ref(relatedImages.value[0] || '');

function handleActiveImg(img: string) {
    activeImg.value = img;
}
</script>

<style scoped>
.custom-tab-nav {
    display: flex;
    background: #f9f7f0;
    border-radius: 16px;
    gap: 4px;
    margin-bottom: 5px;
    align-items: center;
    width: fit-content;
}

.tab-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 18px 48px;
    border-radius: 16px;
    background: transparent;
    color: #0f2d47;
    font-weight: 700;
    font-size: 0.8rem;
    cursor: pointer;
    transition:
        background 0.2s,
        color 0.2s;
}

.tab-btn .tab-icon svg {
    display: block;
    color: #6c6e7e;
    transition: color 0.2s;
}

.tab-btn.active {
    background: #0f2d47;
    color: #fff;
}

.tab-btn.active .tab-icon svg {
    color: #fff;
}

.tab-label {
    letter-spacing: 1px;
}
</style>
