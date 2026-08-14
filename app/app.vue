<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Calibur Pixel` : 'Calibur Pixel'
  },
  meta: [
    { name: 'referrer', content: 'no-referrer' },
  ],
})

const drawer = ref()
</script>

<template>
  <VApp>
    <VAppBar height="56" color="primary">
      <template #prepend>
        <VAppBarNavIcon @click.stop="drawer = !drawer" />
      </template>
      <VAppBarTitle>
        <NuxtImg preload :width="125" src="fontlogo-white.webp" />
      </VAppBarTitle>
    </VAppBar>

    <VNavigationDrawer v-model="drawer">
      <VList>
        <VListItem prepend-icon="mdi-home" title="首页" to="/" color="primary" />
        <VListItem prepend-icon="mdi-palette" title="颜色" to="color" color="primary" />
        <!-- <VListItem prepend-icon="mdi-hand-coin" title="捐赠" to="donation" color="primary"></VListItem> -->
      </VList>
      <VDivider />
      <VList>
        <VListSubheader>论坛</VListSubheader>
        <VListItem prepend-icon="mdi-forum" title="论坛" href="https://bbs.aira.cafe/t/calibur-pixel" />
        <VListItem prepend-icon="mdi-format-list-numbered" title="管理条例" href="https://bbs.aira.cafe/d/57" />
        <VListItem prepend-icon="mdi-directions" title="游玩指南" href="https://bbs.aira.cafe/d/65" />
      </VList>
      <VDivider />
      <VList>
        <VListSubheader>封禁</VListSubheader>
        <VListItem prepend-icon="mdi-cancel" title="旧版封禁列表"
          href="https://docs.qq.com/sheet/Bnr7N31xwOuZ38eCPg4WQ6DQ4cqzJz0AIrMh0BAjcE02IR2M2Z9BHe4A5kfk2KKqCR3cydNd1?c=B29A0F0" />
        <VListItem prepend-icon="mdi-gavel" title="Anubis联合封禁" href="https://mc.artform.cn/ban/" />
      </VList>
    </VNavigationDrawer>

    <VMain>
      <NuxtPage />
      <Footer />
    </VMain>
  </VApp>
</template>

<style lang="scss">
:root {
  --ease-out-smooth: cubic-bezier(0.1, 0.9, 0.2, 1);
  --ease-in-out-smooth: cubic-bezier(0.75, 0, 0, 1);
}

*,
*::before,
*::after {
  user-select: none;
}

.a-primary {
  color: rgb(var(--v-theme-primary));
  transition: 200ms;

  &:hover {
    color: rgb(var(--v-theme-primary), 0.5);
  }
}

.float-in-up {
  animation: float-in-up var(--ease-out-smooth) 600ms;
}

.float-in-down {
  animation: float-in-down var(--ease-out-smooth) 600ms;
}

.float-in-left {
  animation: float-in-left var(--ease-out-smooth) 600ms;
}

.float-in-right {
  animation: float-in-right var(--ease-out-smooth) 600ms;
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

<style scoped lang="scss">
// #region Fix SSR

// .v-app-bar {
//   width: 100%;
//   height: 56px;

//   &:deep(.v-toolbar__content, .v-toolbar__extension) {
//     position: relative;

//     display: flex;
//     flex: 0 0 auto;
//     align-items: center;

//     width: 100%;

//     transition: inherit;
//   }

//   &:deep(.v-toolbar__prepend) {
//     margin-inline: 10px auto;
//   }

//   &:deep(.v-toolbar-title) {
//     flex: 1 1;
//   }

//   &:deep(.v-toolbar__content>.v-toolbar-title) {
//     margin-inline-start: 16px;
//   }
// }

// #endregion

.v-app-bar-title {
  height: 100%;

  &:deep(.v-toolbar-title__placeholder) {
    display: flex;
    align-items: center;
    height: 100%;
  }

  img {
    transform: translateY(-1px);
  }
}
</style>
