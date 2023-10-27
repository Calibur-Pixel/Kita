<template>
  <v-app>
  <div id="follow"></div>
    <DefaultLayout>
      <router-view/>
      <!--router-view v-slot="{ Component }">
        <transition name="page">
          <component :is="Component" />
        </transition>
      </router-view-->
    </DefaultLayout>
  </v-app>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"


document.addEventListener('DOMContentLoaded', function () {
  var followDiv = document.getElementById('follow');

  if(followDiv){
    document.addEventListener('mousemove',function(event){
      var mouseX = event.pageX;
      var mouseY = event.pageY;

      followDiv.style.left = mouseX - '50' + 'px';
      followDiv.style.top = mouseY - '50' + 'px';

    })
  }

});
</script>

<!--style scoped lang="scss">
.page-enter-active {
  transition: all $ease-out-smooth 500ms;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(10rem);
}
</style-->

<style>
  
#follow {
  width: 100px;
  height: 100px;
  background-color: #fb7299;
  position: absolute;
  border-radius: 100px;
  filter: blur(50px);
  /* z-index: -100; */
}
</style>
