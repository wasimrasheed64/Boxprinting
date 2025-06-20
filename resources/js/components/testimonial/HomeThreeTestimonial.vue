<template>
    <section class="testimonial__area box-m-15 pt-100 pb-140">
        <div class="container">
            <!-- Google Reviews Summary Bar -->
            <div class="google-summary-bar">
                <div class="google-logo-reviews">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" class="google-logo" />
                    <span class="google-reviews-title">Reviews</span>
                </div>
                <div class="google-rating">
                    <span class="google-rating-value">4.9</span>
                    <span class="google-stars">
            <span v-for="n in 5" :key="n" class="star">★</span>
          </span>
                    <span class="google-review-count">142 reviews</span>
                </div>
                <button class="google-review-btn">Review us on Google</button>
            </div>
            <!-- End Google Reviews Summary Bar -->

            <!-- Testimonial Carousel -->
            <div class="testimonial-slider-wrapper">
                <Carousel
                    :items-to-show="3"
                    :wrap-around="true"
                    :mouse-drag="true"
                    :autoplay="false"
                    :pause-autoplay-on-hover="true"
                    :transition="500"
                >
                    <Slide v-for="item in testimonial_data" :key="item.id">
                        <div class="testimonial-card-col">
                            <div class="testimonial-card">
                                <div class="testimonial-header">
                                    <div class="testimonial-avatar" :style="{ background: item.avatarColor }">
                                        {{ item.initial }}
                                    </div>
                                    <div class="testimonial-header-info">
                                        <div class="testimonial-name-row">
                                            <span class="testimonial-name">{{ item.name }}</span>
                                            <span class="testimonial-check">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#2196F3" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
                          <circle cx="12" cy="12" r="12" fill="#E3F2FD"/>
                          <path d="M17 9l-5.2 5.2-2.8-2.8" stroke="#2196F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                        </svg>
                      </span>
                                        </div>
                                        <div class="testimonial-time">{{ item.timeAgo }}</div>
                                        <div class="testimonial-stars">
                                            <span v-for="n in 5" :key="n" class="star">★</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-desc">
                                    {{ item.desc }}
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    components: {
        Carousel,
        Slide,
        Pagination
    },
    setup() {
        const testimonial_data = [
            {
                id: 1,
                name: "Sudha Sikha",
                initial: "S",
                avatarColor: "#D84315",
                timeAgo: "2 months ago",
                desc: "Fantastic product quality and exceptional customer service! We had an outstanding experience with Half Price Packaging. Ross from their sales team was incredibly patient, working closely with us to curate packaging that perfect...",
            },
            {
                id: 2,
                name: "Lisa Nelson",
                initial: "L",
                avatarColor: "#5C6BC0",
                timeAgo: "5 months ago",
                desc: "We hired Half Price Packaging to create new boxes for some of our products and we couldn't be happier with the outcome...",
            },
            {
                id: 3,
                name: "Samuel Palmer",
                initial: "S",
                avatarColor: "#8E24AA",
                timeAgo: "a month ago",
                desc: "I am extremely pleased with my order from Half Price Packaging. Aaron, my sales rep, was responsive and helpful throughout...",
            },
        ]
        return { testimonial_data }
    }
})
</script>


<style scoped lang="scss">
.google-summary-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 32px 32px 32px 32px;
  margin-bottom: 40px;
  box-shadow: 0 2px 8px rgba(60,60,60,0.04);
  flex-wrap: wrap;
  gap: 16px;
}
.google-logo-reviews {
  display: flex;
  align-items: center;
  gap: 12px;
}
.google-logo {
  width: 56px;
  height: 56px;
}
.google-reviews-title {
  font-size: 2rem;
  font-weight: 600;
  color: #222;
}
.google-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
}
.google-rating-value {
  font-weight: 700;
  color: #222;
  font-size: 1.5rem;
}
.google-stars .star {
  color: #FFD600;
  font-size: 1.3rem;
  margin-right: 2px;
}
.google-review-count {
  color: #888;
  font-size: 1.1rem;
  margin-left: 8px;
}
.google-review-btn {
  background: #1976D2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.google-review-btn:hover {
  background: #1565C0;
}

.testimonial-slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
}
.slider-arrow {
  background: #1976D2;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
}
.testimonial-card-col {
  flex: 1 1 300px;
  max-width: 370px;
  min-width: 280px;
  display: flex;
}
.testimonial-card {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(60,60,60,0.07);
  padding: 32px 28px 32px 28px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.testimonial-header {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 18px;
}
.testimonial-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}
.testimonial-header-info {
  flex: 1;
}
.testimonial-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.15rem;
  font-weight: 700;
  color: #222;
}
.testimonial-check {
  display: flex;
  align-items: center;
}
.testimonial-time {
  color: #888;
  font-size: 1rem;
  margin-bottom: 2px;
}
.testimonial-stars .star {
  color: #FFD600;
  font-size: 1.1rem;
  margin-right: 1px;
}
.testimonial-desc {
  color: #222;
  font-size: 1.13rem;
  margin-top: 10px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 90px;
}
@media (max-width: 991px) {
  .testimonial-cards-row {
    flex-direction: column;
    gap: 24px;
  }
  .testimonial-card-col {
    max-width: 100%;
    min-width: 0;
  }
}
</style>
