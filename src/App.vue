<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotos">
    
        <div class="painel">
          <h2 class="painel-titulo"> {{ foto.titulo }} </h2>
          <div class="painel-conteudo">
            <img class="imagem-responsiva" :src="foto.url" alt="foto.titulo">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }
  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: #8bebc6;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

</style>
