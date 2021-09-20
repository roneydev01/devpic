<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtro">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for= "foto in fotosComFiltro" >
    
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url = "foto.url" :titulo = "foto.titulo"  />
          <meu-botao rotulo="remover" tipo='button' @botaoAtivado="remover(foto)"></meu-botao>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva';
import Botao from '../shared/botao/Botao.vue';

export default {
  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao' : Botao
  },

  methods: {
    remover(foto) {
      if (confirm('Confirmar exclusão?')) {
        alert(foto.titulo);        
      }
    }
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

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }

</style>
