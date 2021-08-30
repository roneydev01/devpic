<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for= "foto in fotos" >
    
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" alt="foto.titulo">
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue'

export default {
  components: {
    'meu-painel' : Painel
  },

  data () {
    return {
      titulo: 'DevPic',
      fotos: [] 
    }
  },

  //hook Created é capas de acessar os dados e eventos reativos que estão ativos. Os modelos e o DOM viryual ainda não foram montados nem renderizados. Ex. Consumir dados da API.  
  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(foto => this.fotos = foto, err => console.log(err));
  }
}
</script>
<style>
    /* estilo do painel */ 
  .centralizado {
    text-align: center;
    color: #3cb371;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
  .imagem-responsiva {
    width: 100%;
  }

</style>
