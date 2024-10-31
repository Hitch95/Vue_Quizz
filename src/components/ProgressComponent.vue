<template>
  <div>Etape {{ value + 1 }} / {{ max + 1 }}</div>
  <progress class="w-full mb-4" :value="value" :max="max" />
</template>

<script setup lang="ts">
defineProps({
  value: { type: Number, required: true },
  max: { type: Number, required: true },
})
</script>
