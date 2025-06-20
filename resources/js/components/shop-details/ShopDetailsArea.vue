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
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <product-details-content :item="item" :style_2="true" />
                    </div>
                </div>

            </div>
        </div>


        <div class="shop__bottom pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="product__details-tab">
                            <!-- Tab Navigation -->
                            <div class="custom-tab-nav">
                                <!-- Product Specification Tab -->
                                <div class="tab-btn" :class="{ active: activeTab === 'specification' }" @click="activeTab = 'specification'">
                                    <span class="tab-icon">
                                        <!-- Blueprint / Ruler Icon -->
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path
                                                d="M3 3h18v18H3V3zm4 3v12M9 9h6"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span class="tab-label">SPECIFICATION</span>
                                </div>

                                <!-- Product Description Tab -->
                                <div class="tab-btn" :class="{ active: activeTab === 'description' }" @click="activeTab = 'description'">
                                    <span class="tab-icon">
                                        <!-- Document/Note Icon -->
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path
                                                d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            />
                                            <path d="M8 9h8M8 13h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <span class="tab-label">DESCRIPTION</span>
                                </div>
                                <div class="tab-btn" :class="{ active: activeTab === 'services' }" @click="activeTab = 'services'">
                                    <span class="tab-icon">
                                       <!-- Services Icon (Wrench) -->
<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path
      d="M21.12 5.12a5.5 5.5 0 0 1-7.78 7.78l-7.31 7.31a1 1 0 0 1-1.41 0l-1.41-1.41a1 1 0 0 1 0-1.41l7.31-7.31a5.5 5.5 0 0 1 7.78-7.78z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  />
</svg>

                                    </span>
                                    <span class="tab-label">Services</span>
                                </div>
                                <div class="tab-btn" :class="{ active: activeTab === 'faqs' }" @click="activeTab = 'faqs'">
                                    <span class="tab-icon">
                                       <!-- FAQs Icon (Question in Speech Bubble) -->
<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path
      d="M21 11.5a8.38 8.38 0 0 1-1.18 4.28 8.5 8.5 0 1 1-2.1-11.79"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  />
  <path
      d="M12 17h.01"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  />
  <path
      d="M12 13a2 2 0 1 0-2-2"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  />
</svg>

                                    </span>
                                    <span class="tab-label">FAQS</span>
                                </div>
                            </div>

                            <!-- Tab Content -->
                            <div class="tab-content" id="pro-detailsContent">
                                <div v-if="activeTab === 'specification'" class="tab-pane fade show active">
                                    <ProductSpecification />
                                </div>

                                <div v-if="activeTab === 'description'" class="tab-pane fade show active">
                                    <div class="py-5" v-html="item?.description"></div>
                                </div>
                                <div v-if="activeTab === 'services'" class="tab-pane fade show active">
                                    <capabilities-section />
                                </div>
                                <div v-if="activeTab === 'faqs'" class="tab-pane fade show active">
                                    <FaqAccordion :faqs="faqs"  />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
import ProductDetailsContent from './ProductDetailsContent.vue';
import ProductSpecification from '@/components/ProductSpecification.vue';
import CapabilitiesSection from '@/components/common/Faqs/CapabilitiesSection.vue';
import FaqAccordion from '@/components/common/Faqs/FaqAccordion.vue';

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
const activeTab = ref<'specification' | 'description' | 'services' | 'faqs'>('specification');

function handleActiveImg(img: string) {
    activeImg.value = img;
}
</script>

<style scoped>
.custom-tab-nav {
    display: flex;
    background: #f5f6f7;
    border-radius: 16px;
    gap: 8px;
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
    color: #6c6e7e;
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
    background: #841338;
    color: #fff;
}

.tab-btn.active .tab-icon svg {
    color: #fff;
}

.tab-label {
    letter-spacing: 1px;
}
</style>
