<template>
  <v-col cols="6" sm="3" md="3">
    <v-hover v-slot="{ isHovering, props }">
      <v-card v-bind="props" :elevation="isHovering ? 6 : 2" class="calibur-color-block mx-auto px-4 py-2"
        @click="updateClipboard(); snackbar = true">
        <slot></slot>
      </v-card>
    </v-hover>
  </v-col>
  <v-snackbar v-model="snackbar">
    已复制 {{ colorValue }}
    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar = false">
        关闭
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style lang="scss">
.calibur-color-block {
  cursor: pointer;
  background-color: #{"v-bind(colorBg)"} !important;
  color: #{"v-bind(colorText)"} !important;
  font-family: $monospace-fonts;
}
</style>

<script setup>
const props = defineProps({
  colorBg: { type: String, required: false, default: 'var(--v-theme-surface)' },
  colorText: { type: String, required: false, default: 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))' },
  colorValue: { type: String, required: true },
});

function updateClipboard() {
  navigator.clipboard.writeText(props.colorValue).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
    alert('复制失败QWQ 是不是禁止了剪贴板权限呀');
  });
}
</script>

<script>
export default {
  data: () => ({
    snackbar: false,
  }),
}
</script>
