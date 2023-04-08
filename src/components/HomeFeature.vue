<template>
  <div class="d-flex flex-column feature-card justify-center align-center pa-4 float-in-in-in-in-down">
    <v-icon size="x-large" color="primary" :icon=icon />
    <h4 class="text-primary mt-2">{{ title }}</h4>
    <p class="mt-1"><slot></slot></p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
})
</script>

<style lang="scss">
.feature-card {
  width: 300px;
  flex-shrink: 0;

  .v-icon {
    font-size: 3em;
  }

  h4 {
    user-select: text;
  }

  p {
    font-size: 14px;
    user-select: text;
    text-align: center;
  }
}
</style>
