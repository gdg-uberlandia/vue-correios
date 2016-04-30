<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Note: modifying `msg` below will not cause changes to occur with
      // hot-reload. As reloaded components preserve their initial state,
      // modifying these values will have no effect.
      msg: 'Teste!'
    }
  }
}
</script>
