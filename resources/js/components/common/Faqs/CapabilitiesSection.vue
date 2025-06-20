<template>
    <section class="py-5 bg-white text-center">
        <div class="container">
            <h2 class="theme-primary-color mb-3">Our Capabilities</h2>
            <p class="theme-secondary-color mb-5">
                At Half Price Packaging, we are committed to delivering exceptional packaging solutions customized to your needs. From innovative design to seamless delivery, we ensure excellence at every step, bringing your vision to life with precision and care.
            </p>

            <div class="row g-4 mt-1">
                <CapabilityItem
                    v-for="(item, index) in capabilities"
                    :key="index"
                    :icon="item.icon"
                    :title="item.title"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import CapabilityItem from './CapabilityItem.vue'

const capabilities = [
    { title: 'Global Sourcing', icon: '🌐' },
    { title: 'Price Match Guarantee', icon: '💲' },
    { title: '3D Design Services', icon: '🖥️' },
    { title: 'Flexible Lead Times', icon: '🗓️' },
    { title: 'High-Volume Printing', icon: '🖨️' },
    { title: '24/7 Support', icon: '📞' },
    { title: 'Custom Payment Plans', icon: '🤝' },
    { title: 'Warehousing & Inventory', icon: '🏢' }
]
</script>
