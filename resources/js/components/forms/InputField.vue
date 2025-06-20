<template>
    <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
        <input
            :type="type"
            :required="required"
            :min="min"
            v-model="modelValue"
            class="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    type?: string
    required?: boolean
    min?: number
}>()

const modelValue = defineModel<string | number>()
</script>
