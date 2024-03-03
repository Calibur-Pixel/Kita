<script setup lang="ts">
const props = defineProps({
  bg: { type: String, required: false, default: 'var(--v-theme-surface)' },
  text: { type: String, required: false, default: 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))' },
  value: { type: String, required: true },
})

const snackbar = ref(false)

function updateClipboard() {
  navigator.clipboard.writeText(props.value).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
    alert('复制失败QWQ 是不是禁止了剪贴板权限呀');
  })
}
</script>

<template>
  <VCol cols="6" sm="3" md="3">
    <VHover v-slot="{ isHovering, props }">
      <VCard v-bind="props" :elevation="isHovering ? 6 : 2" class="color-block mx-auto px-4 py-2"
        @click="updateClipboard(); snackbar = true">
        <slot>
          {{ value }}
        </slot>
      </VCard>
    </VHover>
  </VCol>
  <VSnackbar v-model="snackbar">
    已复制 {{ value }}
    <template v-slot:actions>
      <VBtn color="pink" variant="text" @click="snackbar = false">
        关闭
      </VBtn>
    </template>
  </VSnackbar>
</template>

<style lang="scss">
.color-block {
  cursor: pointer;
  font-family: 'Cascadia Code',
    'Cascadia Mono',
    'JetBrains Mono',
    Consolas,
    'SF Mono',
    monospace;
  color: #{"v-bind(text)"} !important;
  background-color: #{"v-bind(bg)"} !important;
}
</style>
