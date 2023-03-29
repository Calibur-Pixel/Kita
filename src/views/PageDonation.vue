<template>
  <v-container>
    <div class="page-container">
      <h1 class="text-primary">捐赠列表</h1>
      <p class="subheading my-4">以下为捐赠了 Calibur Pixel 的玩家，非常感谢！ (*￣3￣)╭</p>
      <v-table class="mt-8">
        <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              金额
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in donators" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script setup>
  //
</script>

<style lang="scss">
  h1,
  p,
  th {
    user-select: text;
  }
</style>
