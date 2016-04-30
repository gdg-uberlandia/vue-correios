<template>
  <div class="MyMap__Wrapper">
  	<map :center.sync="center" :zoom.sync="zoom" style="width: 100%; height: 80%; position: absolute; left:0; top:0">
	    <marker 
	      v-for="m in markers"
	      :position.sync="m.position"
	      :clickable.sync="true"
	      :draggable.sync="true"
	      @g-click="center=m.position"
	    ></marker>
  	</map>

  	<input type="number" class="input_marker" v-model="markerTemp.lat">
  	<input type="number" class="input_marker" v-model="markerTemp.lng">
  	<button class="input_marker" @click="addMarker">ADD</button>
  </div>
</template>

<script>
import {load, Map, Marker} from 'vue-google-maps';
//-18.9184533,-48.2611378
//-18.9212238,-48.2508941
load('AIzaSyBLHfwH4gZNSELX-CyL0SqeM-QWX0QggRY','OPTIONAL VERSION NUMBER');

export default {
  components: {
  	Map,Marker
  },

  data () {
    return {
    	zoom: 15,
    	markerTemp: {
    		lat: null,
    		lng: null
    	},
      	center: {lat: -18.9184533, lng: -48.2611378 },
        markers: [{
          position: {lat:-18.9184533, lng: -48.2611378 }
        }]
    }
  },

  methods: {
  	addMarker: function(){

  		var temp = {position: 
  						{
  							lat : parseFloat(this.markerTemp.lat), 
  						 	lng:  parseFloat(this.markerTemp.lng)
  						}
  					};
  		this.markers.push(temp);

  		this.markerTemp = { lat: null,lng: null};
  	}

  }
}
</script>


<style>
.input_marker {
	position:relative;
	z-index:9999;
	top:30px;
}
</style>