<template>
    <nav class="breadcrumb-minimal" aria-label="breadcrumb">
        <ol>
            <li
                v-for="(item, idx) in items"
                :key="idx"
                class="breadcrumb-item"
                :class="{ 'is-last': idx === items.length - 1 }"
            >
                <template v-if="idx === 0">
          <span class="breadcrumb-icon">
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
            >
              <path d="M3 12L12 3l9 9" />
              <path d="M9 21V9h6v12" />
            </svg>
          </span>
                </template>
                <template v-else>
                    <span class="breadcrumb-separator">›</span>
                </template>

                <template v-if="item.link && idx !== items.length - 1">
                    <a :href="item.link" class="breadcrumb-link">{{ item.label }}</a>
                </template>
                <template v-else>
          <span
              class="breadcrumb-label"
              :aria-current="idx === items.length - 1 ? 'page' : undefined"
          >
            {{ item.label }}
          </span>
                </template>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
    label: string
    link?: string
}

defineProps<{ items: BreadcrumbItem[] }>()
</script>

<style scoped>
.breadcrumb-minimal {
    background: #fafbfc;
    padding: 1.5rem 0 1rem 0;
    font-family: inherit;
}
.breadcrumb-minimal ol {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}
.breadcrumb-item {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    color: #222;
    font-weight: 500;
}
.breadcrumb-icon {
    display: flex;
    align-items: center;
    margin-right: 0.7rem;
}
.breadcrumb-separator {
    margin: 0 1.1rem;
    color: #888;
    font-size: 2rem;
    font-weight: 400;
}
.breadcrumb-link {
    color: #222;
    text-decoration: none;
    transition: color 0.2s;
}
.breadcrumb-link:hover {
    color: #007bff;
}
.breadcrumb-label {
    color: #222;
}
.breadcrumb-item.is-last .breadcrumb-label {
    font-weight: 600;
}
</style>
