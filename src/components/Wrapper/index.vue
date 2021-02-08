<template>
  <main class="main">
    <!-- only desk -->
    <div v-if="!mobile">
      <Login :isMobile="false" name="hirota food express headquarters" />
      <Tracking />
    </div>

    <!-- only mobile -->
    <div class="infos-top-mobile" v-if="mobile">
      <Donut bg="#0b4f6c" colorDonut="#02BAEF" :perc="75" :isMobile="true" />
      <div>
        <Progresso :isMobile="true" />
        <EntregaMobile />
      </div>
    </div>

    <div v-if="mobile">
      <Historico :isMobile="true" />
    </div>

    <!-- Geolocation API error -->
    <div v-if="error" class="wrapper-messages">
      <h1 class="error-title">
        {{ error }}
      </h1>
    </div>
    
    <!-- Geolocation API loading -->
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
  import Donut from "../Tracking/Donut";
  import Progresso from "../Tracking/Progresso";
  import EntregaMobile from "../Tracking/EntregaMobile";
  import Historico from "../Tracking/Historico";
  import Mapa from "../Mapa";

  export default {
    components: {
      Login,
      Tracking,
      Donut,
      EntregaMobile,
      Progresso,
      Historico,
      Mapa
    },
    data () {
      return {
        location: null,
        gettingLocation: false,
        error: null,
        variant: "danger",
        mobile: false
      }
    },
    created() {
      window.addEventListener("resize", this.isMobileFn);
      window.addEventListener("load", this.isMobileFn);

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
    },
    destroyed() {
      window.removeEventListener("resize", this.isMobileFn);
      window.removeEventListener("load", this.isMobileFn);
    },
    methods: {
      isMobileFn () {
        if (matchMedia('(max-width: 768px)').matches) {
          this.mobile = true
        } else {
            this.mobile = false
        }
      }
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

    @media(max-width: 768px) {
      flex-direction: column;
      justify-content: space-between;
      min-height: calc(100vh - 60px);
      padding: 0.625rem;
    }
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

  .infos-top-mobile {
    align-items: center;
    background-color: var(--third-color);
    border-radius: var(--radius-default);
    display: flex;
    justify-content: space-around;
    padding: 0.625rem;
    position: relative;
    width: 100%;
    z-index: 3;
  }
</style>