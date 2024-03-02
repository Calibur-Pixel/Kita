<template>
  <VFooter color="primary" id="white-pantyhose-footer">
    <div class="left">
      <NuxtImg :width="125" src="images/fontlogo-white.webp"></NuxtImg>
      <p class="year">© 2018 - {{ new Date().getFullYear() }}</p>
      <div class="links">
        <VBtn variant="plain" size="small" target="_blank" href="https://github.com/Calibur-Pixel/">我们的开源项目</VBtn>
        <VBtn variant="plain" size="small" target="_blank"
          href="https://play.mcmod.cn/sv20182489.html">MCMOD宣传贴</VBtn>
      </div>
    </div>
    <div class="right">
      <h3>友情链接</h3>
      <div class="links">
        <VBtn variant="plain" size="small" target="_blank" href="https://heryin.net/">和瑛</VBtn>
        <VBtn variant="plain" size="small" target="_blank" href="https://mc.artform.cn/">艺式</VBtn>
        <VBtn variant="plain" size="small" target="_blank" href="https://www.yingluo.world/">璎珞</VBtn>
      </div>
    </div>
  </VFooter>
</template>

<style scoped lang="scss">
#white-pantyhose-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 5vw;
}

.year {
  font-size: 14px;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  
  .links {
    margin-left: -12px;
    margin-top: 20px;
    margin-bottom: -10px;
    display: flex;
    align-items: flex-start;
  }
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 13px;
  
  .links {
    margin-right: -12px;
    margin-bottom: -10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

@media screen and (max-width: 600px) {
  #white-pantyhose-footer {
    align-items: flex-end;
  }

  .left .links {
    flex-direction: column;
  }

  .right {
    gap: 34px;
  }
}
</style>
