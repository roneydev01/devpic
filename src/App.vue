<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtro">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for= "foto in fotosComFiltro" >
    
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
      fotos: [],
      filtro:'' 
    }
  },

  computed: {

    fotosComFiltro() {
      if (this.filtro) {
        //Expressão regular para remover case sensitive
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto =>exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
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

  .filtro {
    display: block;
    width: 100%;
  }

</style>
