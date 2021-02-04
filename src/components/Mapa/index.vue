<template>
  <div id="mapContainer" class="mapa"></div>
</template>

<script>
  import mapboxgl from "mapbox-gl";

  export default {
    name: "mapa",
    data() {
      return {
        accessToken: "pk.eyJ1IjoibWFyY2Vsb3NycCIsImEiOiJja2tyM3EwNWcwMWE3MndwbG96aXI5OHQwIn0.EvAdKRr-7stL8vtqBejMzw",
      };
    },
    mounted() {
      mapboxgl.accessToken = this.accessToken;

      const map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [103.811279, 1.345399],
        zoom: 12,
        maxBounds: [
          [103.6, 1.1704753],
          [104.1, 1.4754753],
        ],
      });

      new mapboxgl.Marker()
        .setLngLat([103.811279, 1.345399])
        .addTo(map);

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-right");
      
    },
  };
</script>

<style lang="scss" scoped>
  .mapa {
    width: 100%;
    height: 100%;
  }
</style>