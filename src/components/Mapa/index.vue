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
        center: [-46.73976, -23.52874],
        zoom: 14,
        
      });

      new mapboxgl.Marker()
        .setLngLat([-46.73976, -23.52874])
        .addTo(map);

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-right");
      
    },
  };
</script>

<style lang="scss" scoped>
  .mapa {
    box-shadow: 5px 1px 9px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
  }
</style>