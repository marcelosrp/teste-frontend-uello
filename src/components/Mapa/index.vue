<template>
  <div id="mapContainer" class="mapa"></div>
</template>

<script>
  import mapboxgl from "mapbox-gl";
  import data from "../../data.json";

  export default {
    name: "mapa",
    props: {
      lon: Number,
      lat: Number
    },
    data () {
      return {
        accessToken: "pk.eyJ1IjoibWFyY2Vsb3NycCIsImEiOiJja2tyM3EwNWcwMWE3MndwbG96aXI5OHQwIn0.EvAdKRr-7stL8vtqBejMzw",
        data: data[0],
      };
    },
    mounted () {
      this.buildMap();
    },
    methods: {
      buildMap () {
        mapboxgl.accessToken = this.accessToken;

        const map = new mapboxgl.Map({
          container: "mapContainer",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [this.lon, this.lat],
          zoom: 14,
        });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, "top-right");

        const canvas = map.getCanvasContainer();
        const destination = [this.data.endereco.lon, this.data.endereco.lat];

        const getRoute = async () => {
          const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${this.lon},${this.lat};${destination[0]},${destination[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

          const response = await fetch(url);
          const data = await response.json();
          const route = data.routes[0].geometry.coordinates;

          const geojson = {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: route,
            },
          };

          map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: geojson,
                },
              },
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#3887be",
              "line-width": 5,
              "line-opacity": 0.75,
            },
          });

          if (map.getSource("route")) {
            map.getSource("route").setData(geojson);
          }
        }

        const setPoints = () => {
          canvas.style.cursor = "";

          map.addLayer({
            id: "point",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: [this.lon, this.lat],
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#3887be",
            },
          });

          map.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: destination,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30",
            },
          });
        }

        map.on('load', () => {
          setPoints();
          getRoute();
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .mapa {
    box-shadow: 5px 1px 9px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
  }
</style>