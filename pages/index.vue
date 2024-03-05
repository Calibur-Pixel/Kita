<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preload',
      fetchpriority: 'high',
      as: 'image',
      href: "https://i0.hdslb.com/bfs/album/a340523de38f5cf7b393cb62b15c3dd0d1960d71.png@2560w.webp",
      type: 'image/webp',
      crossorigin: 'anonymous'
    }
  ]
})

const mcLink = "mc.calibur.tv"
const snackbar = ref(false)

function updateClipboard() {
  navigator.clipboard.writeText(mcLink).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
    alert('复制失败QWQ 是不是禁止了剪贴板权限呀');
  })
}
</script>

<template>
  <div class="home-container">
    <VParallax class="first-block"
      src="https://i0.hdslb.com/bfs/album/a340523de38f5cf7b393cb62b15c3dd0d1960d71.png@2560w.webp">
      <div class="d-flex ga-4 fill-height flex-column justify-center align-center text-white float-in-up">
        <div class="logo-container px-8 d-flex flex-column flex-md-row ga-4 justify-center align-center">
          <Logo class="logo logo-shadow" width="200px" />
          <NuxtImg preload class="logo-shadow" src="fontlogo-white.webp" />
          <!-- 这里留一个display: none的h1是为了页面上有h1作为标题，用于SEO优化 -->
          <h1 class="d-none">Calibur Pixel</h1>
        </div>
        <h4 class="text-h5 subheading text-shadow">Minecraft 公益服务器</h4>
      </div>
    </VParallax>

    <div class="second-block d-flex flex-shrink-0 flex-column flex-wrap justify-center align-center pa-8">
      <div class="line d-flex flex-shrink-0 flex-wrap justify-center align-center">
        <HomeFeature icon="mdi-memory" title="性能">高性能的独立服务器<br>由Paper服务端驱动</HomeFeature>
        <HomeFeature icon="mdi-pinwheel" title="可爱">倡导萌与可爱<br>Kawaii的MC社区</HomeFeature>
        <HomeFeature icon="mdi-cog" title="热忱">由热爱驱动<br>勤奋的更新与修复</HomeFeature>
      </div>
      <div class="line d-flex flex-shrink-0 flex-wrap justify-center align-center">
        <HomeFeature icon="mdi-heart" title="樱花区">经典插件生存服<br>完善的菜单、商店、社区系统</HomeFeature>
      </div>
    </div>

    <VParallax class="third-block" :height="320"
      src="https://i0.hdslb.com/bfs/album/a340523de38f5cf7b393cb62b15c3dd0d1960d71.png@2560w.webp">
      <div class="pa-8 d-flex fill-height justify-space-between text-white flex-column flex-sm-row">
        <div class="d-flex ga-2 flex-column justify-space-between">
          <h4 class="text-h4 mb-4">加入服务器</h4>
          <div class="d-flex ga-4 flex-column">
            <p class="d-flex ga-1 align-center">
              <VIcon icon="mdi-qqchat" /><b class="mr-2">QQ群</b>222611224
            </p>
            <p class="d-flex ga-1 align-center">
              <VIcon icon="mdi-minecraft" /><b class="mr-2">可游玩版本</b>1.16 - 最新
            </p>
            <p class="d-flex ga-1 align-center">
              <VIcon icon="mdi-lightbulb" /><b class="mr-2">推荐的版本</b>1.20.2
            </p>
          </div>
        </div>
        <div class="d-flex flex-column align-start align-sm-end">
          <VBtn prepend-icon="mdi-content-copy" color="primary" @click="updateClipboard(); snackbar = true">复制连接地址
          </VBtn>
          <p class="text-shadow mt-1">{{ mcLink }}</p>
        </div>
      </div>
    </VParallax>
  </div>
  <VSnackbar v-model="snackbar">
    已复制 {{ mcLink }}
    <template v-slot:actions>
      <VBtn color="pink" variant="text" @click="snackbar = false">
        关闭
      </VBtn>
    </template>
  </VSnackbar>
</template>

<style scoped lang="scss">
.first-block {
  height: calc(100dvh - 56px);

  &:deep(.v-img__img) {
    filter: brightness(0.8) blur(2px);
  }

  p,
  h4 {
    user-select: text;
  }

  .logo-container {
    max-width: 100%;

    img:nth-child(2) {
      width: 100%;
    }
  }
}

.second-block,
.line {
  gap: 2em;
  max-width: 100%;
}

.third-block {
  &:deep(.v-img__img) {
    filter: blur(32px);
  }

  h2,
  p {
    user-select: text;
  }
}

.v-parallax {
  background-color: #50424d;
}

.logo {
  aspect-ratio: 1 / 1;
}

.logo-shadow {
  filter: drop-shadow(0 6px 8px rgb(0 0 0 / 30%));
}

.text-shadow {
  text-shadow: 0 3px 6px rgb(0 0 0 / 30%);
}
</style>