<template>
  <div id="app">
    <!--hello></hello-->
    <my-map></my-map>
    <img :class="{'defaultClass': defaultClass}" src="./img/logo.png">
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import MyMap from './components/MyMap.vue'

export default {
  components: {
    Hello,
    MyMap
  },

  data: function(){
  	return {
  		defaultClass: true
  	}
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.defaultClass {
	position: absolute;
	height: 200px;
	bottom:0;
	right:0;
}
</style>
