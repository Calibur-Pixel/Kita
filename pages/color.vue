<script setup lang="ts">
useHead({
  title: '颜色'
})
</script>

<template>
  <VContainer class="d-flex flex-column ga-6 pa-4 pa-sm-6 pa-md-8">
    <div>
      <h1 class="text-h4 font-weight-bold text-primary float-in-right">颜色代码</h1>
      <p class="subheading my-4 float-in-right">在 Calibur Pixel 中，你可以使用颜色代码来给文字添加颜色和风格</p>
    </div>
    <div>
      <h2 class="text-h5 font-weight-bold text-primary float-in-right">通用颜色代码</h2>
      <p class="my-4 float-in-right">Calibur Pixel 支持 Minecraft 插件服通用颜色代码，下列颜色在新版旧版中各处皆可用~</p>
      <VRow class="mb-4 float-in-left">
        <ColorBlock bg="#be0000" text="white" value="&4" />
        <ColorBlock bg="#fe3f3f" text="white" value="&c" />
        <ColorBlock bg="#D9A334" text="white" value="&6" />
        <ColorBlock bg="#fefe3f" text="black" value="&e" />
        <ColorBlock bg="#00be00" text="white" value="&2" />
        <ColorBlock bg="#3ffe3f" text="black" value="&a" />
        <ColorBlock bg="#00bebe" text="white" value="&3" />
        <ColorBlock bg="#3ffefe" text="black" value="&b" />
        <ColorBlock bg="#0000be" text="white" value="&1" />
        <ColorBlock bg="#3f3ffe" text="white" value="&9" />
        <ColorBlock bg="#be00be" text="white" value="&5" />
        <ColorBlock bg="#fe3ffe" text="white" value="&d" />
        <ColorBlock bg="#bebebe" text="black" value="&7" />
        <ColorBlock bg="#ffffff" text="black" value="&f" />
        <ColorBlock bg="#3f3f3f" text="white" value="&8" />
        <ColorBlock bg="#000000" text="white" value="&0" />
      </VRow>
    </div>
    <div>
      <h2 class="text-h5 font-weight-bold text-primary float-in-right">通用字体格式代码</h2>
      <p class="my-4 float-in-right">Calibur Pixel 支持 Minecraft 插件服通用字体格式代码，下列格式在新版旧版中各处皆可用~</p>
      <VRow class="mb-4 float-in-left">
        <ColorBlock value="&l">&l - <b>粗体</b></ColorBlock>
        <ColorBlock value="&o">&o - <i>斜体</i></ColorBlock>
        <ColorBlock value="&n">&n - <u>下划线</u></ColorBlock>
        <ColorBlock value="&m">&m - <s>删除线</s></ColorBlock>
        <ColorBlock value="&k">&k - 会乱跳的魔术字</ColorBlock>
        <ColorBlock value="&r">&r - 清除颜色与格式</ColorBlock>
      </VRow>
    </div>
    <div>
      <h2 class="text-h5 font-weight-bold text-primary float-in-right">标准十六进制颜色代码格式</h2>
      <p class="my-4 float-in-right">十六进制颜色代码在 Calibur Pixel 中，可以用于聊天、物品命名、木牌修改等。以下列出为常用颜色代码，当然也可以使用自己的十六进制颜色~</p>
      <VRow class="mb-4 float-in-left">
        <ColorBlock bg="#fb7299" text="white" value="&amp;#fb7299" />
        <ColorBlock bg="#1ebafc" text="white" value="&amp;#1ebafc" />
        <ColorBlock bg="#ff95a7" text="black" value="&amp;#ff95a7" />
        <ColorBlock bg="#bfd7fd" text="black" value="&amp;#bfd7fd" />
      </VRow>
    </div>
    <div>
      <h2 class="text-h5 font-weight-bold text-primary float-in-right">后缀 (头衔) 十六进制颜色代码格式</h2>
      <p class="my-4 float-in-right">为后缀插件专用的十六进制颜色代码格式。不过当然，后缀也能用最上面的通用颜色代码。以下列出为常用颜色代码，当然也可以使用自己的十六进制颜色~</p>
      <VRow class="mb-4 float-in-left">
        <ColorBlock bg="#fb7299" text="white" value="&amp;(#fb7299)" />
        <ColorBlock bg="#1ebafc" text="white" value="&amp;(#1ebafc)" />
        <ColorBlock bg="#ff95a7" text="black" value="&amp;(#ff95a7)" />
        <ColorBlock bg="#bfd7fd" text="black" value="&amp;(#bfd7fd)" />
      </VRow>
    </div>
  </VContainer>
</template>
