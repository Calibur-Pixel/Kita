<template>
  <div class="home-container">
    <v-parallax class="first-block" :height="600"
      src="https://i0.hdslb.com/bfs/album/a340523de38f5cf7b393cb62b15c3dd0d1960d71.png">
      <div class="d-flex flex-column fill-height justify-center align-center text-white float-up">
        <div class="home-logo d-flex flex-column">
          <img width="200" height="200" class="home-logo-image" src="@/assets/logo.svg" />
          <img width="200" class="home-logo-text" src="@/assets/fontlogo-white.png" />
        </div>
        <div class="d-flex flex-column justify-center align-center py-8 text-shadow">
          <h4 class="subheading">Minecraft 公益服务器</h4>
          <p>QQ群: 222611224</p>
        </div>
        <v-btn prepend-icon="mdi-content-copy" color="primary" @click="updateClipboard(); snackbar = true">复制连接地址</v-btn>
        <p class="text-shadow mt-1">{{ mcLink }}</p>
      </div>
    </v-parallax>

    <div class="second-block d-flex flex-shrink-0 flex-column flex-wrap justify-center align-center pa-8">
      <div class="second-block-line d-flex flex-shrink-0 flex-wrap justify-center align-center">
        <HomeFeature icon="mdi-memory" title="性能">9900K级的高性能Xeon服务器CPU<br>由Paper服务端驱动</HomeFeature>
        <HomeFeature icon="mdi-pinwheel" title="可爱">倡导萌与可爱<br>Kawaii的MC社区</HomeFeature>
        <HomeFeature icon="mdi-cog" title="热忱">由热爱驱动<br>勤奋的更新与修复</HomeFeature>
      </div>
      <div class="second-block-line d-flex flex-shrink-0 flex-wrap justify-center align-center">
        <HomeFeature icon="mdi-heart" title="樱花区">经典插件生存服<br>完善的菜单、商店、社区系统</HomeFeature>
        <HomeFeature icon="mdi-music-note" title="音乐区">超平坦创造世界<br>音MADer的天堂</HomeFeature>
      </div>
    </div>

    <v-parallax class="third-block" :height="300"
      src="https://i0.hdslb.com/bfs/album/a340523de38f5cf7b393cb62b15c3dd0d1960d71.png">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h2 class="subheading">和谐友爱还很可爱的公益插件服</h2>
      </div>
    </v-parallax>
  </div>
  <v-snackbar v-model="snackbar">
    已复制「{{ mcLink }}」
    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar = false">
        关闭
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import HomeFeature from "@/components/HomeFeature.vue"
const mcLink = "mc.calibur.tv";
function updateClipboard() {
  navigator.clipboard.writeText(mcLink).then(() => {
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

<style lang="scss">
.first-block {
  &.v-parallax--active>.v-img__img {
    filter: brightness(0.8) blur(2px);
  }

  p,
  h4 {
    user-select: text;
  }
}

.second-block,
.second-block-line {
  max-width: 100%;
  gap: 2em;
}

.third-block {
  &.v-parallax--active>.v-img__img {
    filter: blur(32px);
  }

  h2 {
    user-select: text;
  }
}

.home-logo {
  gap: 8px;
  filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3));
}

.text-shadow {
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}
</style>
