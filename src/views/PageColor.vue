<template>
  <v-container>
    <div class="page-container page-container-color">
      <div class="page-section-color">
        <h1 class="text-primary float-right">通用颜色代码</h1>
        <p class="my-4 float-right">Calibur Pixel 支持 Minecraft 插件服通用颜色代码，下列颜色在新版旧版中各处皆可用~</p>
        <v-row class="mb-4 float-left">
          <ColorBlock colorBg="#be0000" colorText="white" colorValue="&4">&4</ColorBlock>
          <ColorBlock colorBg="#fe3f3f" colorText="white" colorValue="&c">&c</ColorBlock>
          <ColorBlock colorBg="#D9A334" colorText="white" colorValue="&6">&6</ColorBlock>
          <ColorBlock colorBg="#fefe3f" colorText="black" colorValue="&e">&e</ColorBlock>
          <ColorBlock colorBg="#00be00" colorText="white" colorValue="&2">&2</ColorBlock>
          <ColorBlock colorBg="#3ffe3f" colorText="black" colorValue="&a">&a</ColorBlock>
          <ColorBlock colorBg="#00bebe" colorText="white" colorValue="&3">&3</ColorBlock>
          <ColorBlock colorBg="#3ffefe" colorText="black" colorValue="&b">&b</ColorBlock>
          <ColorBlock colorBg="#0000be" colorText="white" colorValue="&1">&1</ColorBlock>
          <ColorBlock colorBg="#3f3ffe" colorText="white" colorValue="&9">&9</ColorBlock>
          <ColorBlock colorBg="#be00be" colorText="white" colorValue="&5">&5</ColorBlock>
          <ColorBlock colorBg="#fe3ffe" colorText="white" colorValue="&d">&d</ColorBlock>
          <ColorBlock colorBg="#bebebe" colorText="black" colorValue="&7">&7</ColorBlock>
          <ColorBlock colorBg="#ffffff" colorText="black" colorValue="&f">&f</ColorBlock>
          <ColorBlock colorBg="#3f3f3f" colorText="white" colorValue="&8">&8</ColorBlock>
          <ColorBlock colorBg="#000000" colorText="white" colorValue="&0">&0</ColorBlock>
        </v-row>
      </div>
      <div class="page-section-color">
        <h1 class="text-primary float-right">通用字体格式代码</h1>
        <p class="my-4 float-right">Calibur Pixel 支持 Minecraft 插件服通用字体格式代码，下列格式在新版旧版中各处皆可用~</p>
        <v-row class="mb-4 float-left">
          <ColorBlock colorValue="&l">&l - <b>粗体</b></ColorBlock>
          <ColorBlock colorValue="&o">&o - <i>斜体</i></ColorBlock>
          <ColorBlock colorValue="&n">&n - <u>下划线</u></ColorBlock>
          <ColorBlock colorValue="&m">&m - <s>删除线</s></ColorBlock>
          <ColorBlock colorValue="&k">&k - 会乱跳的魔术字</ColorBlock>
          <ColorBlock colorValue="&r">&r - 清除颜色与格式</ColorBlock>
        </v-row>
      </div>
      <div class="page-section-color">
        <h1 class="text-primary float-right">标准十六进制颜色代码格式</h1>
        <p class="my-4 float-right">十六进制颜色代码在 Calibur Pixel 中，可以用于聊天、物品命名、木牌修改等。以下列出为常用颜色代码，当然也可以使用自己的十六进制颜色~</p>
        <v-row class="mb-4 float-left">
          <ColorBlock colorBg="#fb7299" colorText="white" colorValue="&amp;#fb7299">&amp;#fb7299</ColorBlock>
          <ColorBlock colorBg="#1ebafc" colorText="white" colorValue="&amp;#1ebafc">&amp;#1ebafc</ColorBlock>
          <ColorBlock colorBg="#ff95a7" colorText="black" colorValue="&amp;#ff95a7">&amp;#ff95a7</ColorBlock>
          <ColorBlock colorBg="#bfd7fd" colorText="black" colorValue="&amp;#bfd7fd">&amp;#bfd7fd</ColorBlock>
        </v-row>
      </div>
      <div class="page-section-color">
        <h1 class="text-primary float-right">后缀 (头衔) 十六进制颜色代码格式</h1>
        <p class="my-4 float-right">为后缀插件专用的十六进制颜色代码格式。不过当然，后缀也能用最上面的通用颜色代码。以下列出为常用颜色代码，当然也可以使用自己的十六进制颜色~</p>
        <v-row class="mb-4 float-left">
          <ColorBlock colorBg="#fb7299" colorText="white" colorValue="&amp;(#fb7299)">&amp;(#fb7299)</ColorBlock>
          <ColorBlock colorBg="#1ebafc" colorText="white" colorValue="&amp;(#1ebafc)">&amp;(#1ebafc)</ColorBlock>
          <ColorBlock colorBg="#ff95a7" colorText="black" colorValue="&amp;(#ff95a7)">&amp;(#ff95a7)</ColorBlock>
          <ColorBlock colorBg="#bfd7fd" colorText="black" colorValue="&amp;(#bfd7fd)">&amp;(#bfd7fd)</ColorBlock>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import ColorBlock from "@/components/ColorBlock.vue"
</script>


<style lang="scss">
h1,
p,
th {
  user-select: text;
}

.page-container-color {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.page-section-color {
  display: flex;
  flex-direction: column;
}
</style>
