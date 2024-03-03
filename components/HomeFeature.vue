<script setup>
defineProps({
  icon: String,
  title: String,
})
</script>

<template>
  <div class="d-flex flex-column feature-card justify-center align-center pa-4 float-in-down">
    <VIcon size="x-large" color="primary" :icon=icon />
    <h4 class="text-primary mt-2">{{ title }}</h4>
    <p class="mt-1">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.feature-card {
  flex-shrink: 0;
  width: 300px;

  .v-icon {
    font-size: 3em;
  }

  h4 {
    user-select: text;
  }

  p {
    user-select: text;
    font-size: 14px;
    text-align: center;
  }
}
</style>