<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <h1>Добро пожаловать на сайт Anime List</h1>
    <indexComp msg="Test"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import indexComp from '@/components/indexComp.vue'

export default {
  name: 'Index',
  components: {
    // HelloWorld
    indexComp
  }
}
</script>