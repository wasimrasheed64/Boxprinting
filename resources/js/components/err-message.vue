<template>
  <div style="color: red">
    {{ msg }}
  </div>
</template>

<script setup>
defineProps<{ msg: string | undefined}>();
</script>
