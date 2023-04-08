<template>
  <v-container>
    <div class="page-container">
      <div class="page-section-donation">
        <h1 class="text-primary float-in-right">捐赠列表</h1>
        <p class="subheading my-4 float-in-right">以下为捐赠了 Calibur Pixel 的玩家，非常感谢！ (*￣3￣)╭</p>
        <div class="rounded mt-8 elevation-2 float-in-left">
          <v-table>
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
                <td>¥ {{ item.amount }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      donators: [
        {
          "name": "mumsimat",
          "amount": 566
        },
        {
          "name": "匿名用户1",
          "amount": 400
        },
        {
          "name": "Lingfeng_Endless",
          "amount": 342.93
        },
        {
          "name": "ShadsT_",
          "amount": 340
        },
        {
          "name": "Margele",
          "amount": 300
        },
        {
          "name": "LiaoJC",
          "amount": 200
        },
        {
          "name": "ITIING",
          "amount": 200
        },
        {
          "name": "ZEALOT9527",
          "amount": 180
        },
        {
          "name": "Munuo_scen",
          "amount": 160
        },
        {
          "name": "can_tian",
          "amount": 152
        },
        {
          "name": "adssy",
          "amount": 150
        },
        {
          "name": "Lorie_Candy",
          "amount": 123.33
        },
        {
          "name": "MODE_XD",
          "amount": 122.38
        },
        {
          "name": "Sakushin_HY",
          "amount": 116
        },
        {
          "name": "热心市民海德拉",
          "amount": 101
        },
        {
          "name": "demoshxw",
          "amount": 100
        },
        {
          "name": "VA_Mpire",
          "amount": 100
        },
        {
          "name": "RainbowCIash",
          "amount": 90
        },
        {
          "name": "smileslime83",
          "amount": 83
        },
        {
          "name": "WizLStype",
          "amount": 77.7
        },
        {
          "name": "KeKaoJun",
          "amount": 75
        },
        {
          "name": "GeometryK 的爸爸",
          "amount": 67
        },
        {
          "name": "SalmonNOC",
          "amount": 60
        },
        {
          "name": "MetroCrt",
          "amount": 60
        },
        {
          "name": "C8H18",
          "amount": 60
        },
        {
          "name": "Charles_Fb",
          "amount": 50.9
        },
        {
          "name": "NightSkY_TD",
          "amount": 50
        },
        {
          "name": "Smash_Egg",
          "amount": 50
        },
        {
          "name": "Super_Onigiri",
          "amount": 50
        },
        {
          "name": "AlpacaSir",
          "amount": 50
        },
        {
          "name": "yangxq",
          "amount": 50
        },
        {
          "name": "ItsZTChun",
          "amount": 50
        },
        {
          "name": "HG_SB",
          "amount": 50
        },
        {
          "name": "nao_zhong_jiang",
          "amount": 46
        },
        {
          "name": "Oldpig_DD",
          "amount": 45
        },
        {
          "name": "Mathias_Blade",
          "amount": 40
        },
        {
          "name": "tfc1306",
          "amount": 30
        },
        {
          "name": "AmySmith797",
          "amount": 30
        },
        {
          "name": "WUYUE10124",
          "amount": 30
        },
        {
          "name": "Wuqibor",
          "amount": 29.29
        },
        {
          "name": "shenbi_spiderman",
          "amount": 25
        },
        {
          "name": "shenbi_spiderman",
          "amount": 23.33
        },
        {
          "name": "bzd4576",
          "amount": 20
        },
        {
          "name": "BadBlackerBai",
          "amount": 20
        },
        {
          "name": "Dong_Z",
          "amount": 15
        },
        {
          "name": "PBH_",
          "amount": 13.14
        },
        {
          "name": "dsjfiajsid",
          "amount": 12.34
        },
        {
          "name": "Sophine·Chocovanilazuki",
          "amount": 12.04
        },
        {
          "name": "LBzzZ",
          "amount": 10
        },
        {
          "name": "Loong2333",
          "amount": 10
        },
        {
          "name": "ZhenYeAcacia",
          "amount": 10
        },
        {
          "name": "asdv342",
          "amount": 10
        },
        {
          "name": "Sans3151",
          "amount": 10
        },
        {
          "name": "Lao_Shudada",
          "amount": 7.5
        },
        {
          "name": "__Kabuto",
          "amount": 7
        },
        {
          "name": "Miao_Baoao",
          "amount": 5.2
        },
        {
          "name": "squirrelflight",
          "amount": 5
        },
        {
          "name": "Du_Xiao_Fu",
          "amount": 3.94
        },
        {
          "name": "根号希希希",
          "amount": 2.33
        },
        {
          "name": "0Q8QO",
          "amount": 1.5
        },
        {
          "name": "MeuCh_",
          "amount": 1.23
        },
        {
          "name": 666606,
          "amount": 1.11
        },
        {
          "name": "Fairy_YaYa_OVO",
          "amount": 1
        },
        {
          "name": "thwy11",
          "amount": 0.01
        }
      ]
    }
  }
}
</script>

<style lang="scss">
h1,
p,
th,
tr {
  user-select: text;
}

.page-section-donation {
  display: flex;
  flex-direction: column;
}
</style>
