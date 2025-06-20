<script setup lang="ts">
import { ref } from 'vue'

type Faq = {
    question: string
    answer: string
}

defineProps<{ faqs: Faq[] }>()

const openIndex = ref<number | null>(0)
const toggle = (idx: number) => {
    openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<template>
    <section class="faq">
        <div class="row">
            <div class="col-xl-12">
                <div class="section__title-wrapper text-center mb-20">
                    <div class=" mb-5">
                        <h2>FAQs</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion">
            <div
                v-for="(faq, idx) in faqs"
                :key="idx"
                class="accordion-item"
            >
                <h2 class="accordion-header">
                    <button
                        class="accordion-button"
                        :class="{ collapsed: openIndex !== idx }"
                        type="button"
                        @click="toggle(idx)"
                    >
                        {{ faq.question }}
                    </button>
                </h2>
                <div
                    class="accordion-collapse collapse"
                    :class="{ show: openIndex === idx }"
                >
                    <div class="accordion-body">
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.faq {
    max-width: 900px;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
}

.faq-title {
    font-size:1.5rem;
    font-weight: 700;
    padding: 1rem 0 1.5rem;
    border-radius: 12px;
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
}

.accordion-item {
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    margin-bottom: 1.25rem;
    overflow: hidden;
}

.accordion-header {
    margin: 0;
}

.accordion-button {
    font-size: 1.125rem;
    font-weight: 600;
    padding: 1rem 1.25rem;
    border-radius: 0;
    transition: background-color 0.2s ease;
    background-color: #f8f9fa;
    color: #0F2D47;
}

.accordion-button:not(.collapsed) {
    background-color: #e6e6e6;
    color: #0F2D47;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.accordion-body {
    padding: 1rem 1.25rem;
    background-color: #fff;
    font-size: 1rem;
    color: #E1732D;
    line-height: 1.6;
}

.accordion-collapse {
    transition: height 0.25s ease;
}
</style>
