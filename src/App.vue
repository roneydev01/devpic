<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto in fotos">
        <img :src="foto.url" alt="foto.titulo">
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
