<template>
  <div class="hello">
    <h1>Busque sua encomenda</h1>

    <input type="text" v-model="busca"><br>
    <button class="input_marker" @click="buscar">Buscar</button>
    <br><br><br>
    <img src="http://www.arabianbusiness.com/skins/ab.main/gfx/loading_spinner.gif" v-show="isLoading" alt="" />
    <table class="table">
      <tr>
        <td>Data - hora</td>
        <td>Descrição</td>
        <td>Cidade - Estado</td>
      </tr>
      <tr v-for="event in encomenda.events">
        <td>
          {{event.date}} - {{event.hour}}
        </td>
        <td>
          {{event.description}}
        </td>
        <td>
          {{event.city}} - {{event.state}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: [
    'encomenda'
  ],
  data () {
    return {
      // Note: modifying `msg` below will not cause changes to occur with
      // hot-reload. As reloaded components preserve their initial state,
      // modifying these values will have no effect.
      busca: '',
      isLoading: false
    }
  },
  methods: {
    buscar: function() {
      this.isLoading = true;
      this.$http({url: 'https://correiosapi.herokuapp.com/package/' + this.busca , method: 'GET'}).then(function (response) {
          this.encomenda = response.data;
          this.isLoading = false;
      }, function (response) {
          console.log(response);
          this.isLoading = false;
      });
    }
  }
}
</script>
