<template>
  <div id="app">
    <busca-encomenda :encomenda.sync='encomendaEncontrada'></busca-encomenda>
    <img :class="{'defaultClass': defaultClass}" src="./img/logo.png">
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import MyMap from './components/MyMap.vue'
import BuscaEncomenda from './components/BuscaEncomenda.vue'

export default {
  components: {
    Hello,
    MyMap,
    BuscaEncomenda
  },

  data: function(){
  	return {
  		encomendaEncontrada: {}
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
