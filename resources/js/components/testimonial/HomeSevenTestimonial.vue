<template>
    <div class="testimonial__area pt-40 pb-95">

        <div class="container custom-container-2">
            <div class="row">
                <div class="col-xl-12 text-center pb-30">
                    <h2 class="theme-primary-color">See Why Customers Love Us!</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <Carousel
                        :items-to-show="3"
                        :wrap-around="true"
                        ref="slider_1"
                        class="testimonial__slider-active"
                    >
                        <Slide
                            v-for="item in testimonial_data"
                            :key="item.id"
                            class="testimonial__slide px-3"
                        >
                            <div class="testimonial__image text-center mb-30">
                                <img :src="item.img" alt="User Image" class="testimonial__avatar" />
                            </div>
                            <div class="testimonial__content">
                                <p v-html="item.desc"></p>
                            </div>
                        </Slide>

                        <template #addons>
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

// assets
import user_1 from '../../../assets/img/testimonial/testi1.webp';
import user_2 from '../../../assets/img/testimonial/testi2.webp';
import user_3 from '../../../assets/img/testimonial/testi3.webp';

// types
interface TestimonialDataType {
    id: number;
    img: string;
    desc: string;
}

// data
const testimonial_data = ref<TestimonialDataType[]>([
    {
        id: 1,
        img: user_1,
        desc:
            'Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!',
    },
    {
        id: 2,
        img: user_2,
        desc:
            'Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!',
    },
    {
        id: 3,
        img: user_3,
        desc:
            'Great theme, extended super and fast professional support. easy to use, flexible, visual composer and more functional plugins on board. Yes a real good, strong theme with structured coding. Enjoy it! friendly and super good!',
    },
]);
</script>

<style scoped>
/* Remove background and card appearance */
.testimonial__area {
    background: none;
}

/* Slide spacing and style reset */
.carousel__slide {
    display: block;
    padding: 0 12px;
    background: transparent !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    border: none !important;
}

/* Optional padding between image and text */
.testimonial__image {
    margin-bottom: 20px;
}

.testimonial__avatar {
    max-width: 80px;
    border-radius: 50%;
}

.testimonial__content {
    text-align: center;
    padding: 0;
    background: none;
    box-shadow: none;
    border: none;
}
</style>
