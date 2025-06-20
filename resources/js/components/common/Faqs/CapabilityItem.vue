<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="bg-light p-4 h-100 rounded text-center shadow-sm">
            <div class="fs-1 mb-3">{{ icon }}</div>
            <h5 class="text-dark fw-semibold">{{ title }}</h5>
        </div>
    </div>
</template>

<script setup>
defineProps({
    icon: String,
    title: String
})
</script>
