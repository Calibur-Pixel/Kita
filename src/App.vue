<template>
  <v-app>
    <DefaultLayout>
      <router-view v-slot="{ Component }">
        <transition name="page">
          <component :is="Component" />
        </transition>
      </router-view>
    </DefaultLayout>
  </v-app>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
</script>

<style scoped lang="scss">
.page-enter-active {
  transition: all $ease-out-smooth 500ms;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(10rem);
}
</style>
