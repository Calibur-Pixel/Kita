<template>
  <v-list>
    <v-list-item prepend-icon="mdi-home" title="首页" to="/" active-color="primary"></v-list-item>
    <v-list-item prepend-icon="mdi-palette" title="颜色" to="color" active-color="primary"></v-list-item>
    <v-list-item prepend-icon="mdi-hand-coin" title="捐赠" to="donation" active-color="primary"></v-list-item>
  </v-list>
  <v-divider />
  <v-list>
    <v-list-subheader>论坛</v-list-subheader>
    <v-list-item prepend-icon="mdi-forum" title="论坛" href="https://sakuranomiya.moe/t/calibur-pixel"></v-list-item>
    <v-list-item prepend-icon="mdi-format-list-numbered" title="管理条例" href="https://sakuranomiya.moe/d/57"></v-list-item>
    <v-list-item prepend-icon="mdi-directions" title="游玩指南" href="https://sakuranomiya.moe/d/65"></v-list-item>
  </v-list>
  <v-divider />
  <v-list>
    <v-list-subheader>封禁</v-list-subheader>
    <v-list-item prepend-icon="mdi-cancel" title="旧版封禁列表"
      href="https://docs.qq.com/sheet/Bnr7N31xwOuZ38eCPg4WQ6DQ4cqzJz0AIrMh0BAjcE02IR2M2Z9BHe4A5kfk2KKqCR3cydNd1?c=B29A0F0"></v-list-item>
    <v-list-item prepend-icon="mdi-gavel" title="Anubis联合封禁" href="https://ban.qwq.team/"></v-list-item>
  </v-list>
</template>
