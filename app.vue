<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Calibur Pixel` : 'Calibur Pixel';
  }
})
</script>

<template>
  <VApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VApp>
</template>
