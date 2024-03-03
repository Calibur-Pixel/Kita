<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Calibur Pixel` : 'Calibur Pixel'
  },
  meta: [
    { name: "referrer", content: "no-referrer" }
  ]
})
</script>

<template>
  <VApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VApp>
</template>

<style lang="scss">
$ease-out-smooth: cubic-bezier(0.1, 0.9, 0.2, 1);
$ease-in-out-smooth: cubic-bezier(0.75, 0, 0, 1);

*,
*::before,
*::after {
  user-select: none;
}

.a-primary {
  color: rgb(var(--v-theme-primary));
  transition: 200ms;

  &:hover {
    color: rgba(var(--v-theme-primary), 0.5);
  }
}

.float-in-up {
  animation: float-in-up $ease-out-smooth 600ms;
}

.float-in-down {
  animation: float-in-down $ease-out-smooth 600ms;
}

.float-in-left {
  animation: float-in-left $ease-out-smooth 600ms;
}

.float-in-right {
  animation: float-in-right $ease-out-smooth 600ms;
}

@keyframes float-in-up {
  from {
    transform: translateY(6em) scale(0.9);
    filter: opacity(0);
  }

  to {
    transform: none;
    filter: none;
  }
}

@keyframes float-in-down {
  from {
    transform: translateY(-6em) scale(0.9);
    filter: opacity(0);
  }

  to {
    transform: none;
    filter: none;
  }
}

@keyframes float-in-left {
  from {
    transform: translateX(6em);
    filter: opacity(0);
  }

  to {
    transform: none;
    filter: none;
  }
}

@keyframes float-in-right {
  from {
    transform: translateX(-6em);
    filter: opacity(0);
  }

  to {
    transform: none;
    filter: none;
  }
}
</style>
