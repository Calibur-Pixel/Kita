<template>
  <v-layout class="aira-layout">
    <v-app-bar color="primary" class="position-fixed">
      <template v-slot:prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
        <v-img :width="125" src="@/assets/fontlogo-white.png"></v-img>
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :floating="true" elevation="2" class="position-fixed">
      <DrawerContent />
    </v-navigation-drawer>

    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>

<script setup>
import DrawerContent from "@/components/DrawerContent.vue";
</script>

<script>
import { useTheme } from 'vuetify';
export default {
  data: () => ({
    drawer: undefined,
  }),
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
}
</script>

<style scoped lang="scss">
.position-fixed {
  position: fixed !important;
}
</style>
