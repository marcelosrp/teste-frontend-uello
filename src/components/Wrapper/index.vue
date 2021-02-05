<template>
  <main class="main">
    <!-- only desk login -->
    <div class="d-none d-sm-block">
      <Login :isMobile="false" name="hirota food express headquarters" />
    </div>

    <Tracking />
    
    <div v-if="error" class="wrapper-messages">
      <h1 class="error-title">
        {{ error }}
      </h1>
    </div>
    
    <div class="wrapper-messages" v-if="gettingLocation">
      <b-spinner
        :variant="variant"
        :key="variant"
      ></b-spinner>
    </div>

    <Mapa 
      v-if="location" 
      :lon="location.coords.longitude" 
      :lat="location.coords.latitude"
    />
  </main>
</template>

<script>
  import Login from "../Login";
  import Tracking from "../Tracking";
  import Mapa from "../Mapa";

  export default {
    components: {
      Login,
      Tracking,
      Mapa
    },
    data () {
      return {
        location: null,
        gettingLocation: false,
        error: null,
        variant: "danger"
      }
    },
    created() {
      if(!("geolocation" in navigator)) {
        this.error = 'Geolocation is not available.';
        return;
      }

      this.gettingLocation = true;
      
      navigator.geolocation.getCurrentPosition(pos => {
        this.gettingLocation = false;
        this.location = pos;
      }, err => {
        if(err.code === 1) {
          this.gettingLocation = false;
          this.error = "Você precisa dar permissão para o navegador acessar sua localização atual.";
        } else if(err.code === 3) {
          this.gettingLocation = false;
          this.error = "A rede está fora do ar ou o serviço de posicionamento não pode ser alcançado. Atualize a página para tentar novamente.";
        } else {
          this.gettingLocation = false;
          this.error = "Não foi possível pegar a sua localização atual. Atualize a página para tentar novamente"
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    min-height: 100vh;
    padding: 3.75rem 1.25rem;
    position: relative;
    width: 100%;
  }

  .wrapper-messages {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  .error-title {
    font-size: 1.25rem;
    text-align: center;
    width: 60%;
  }
</style>