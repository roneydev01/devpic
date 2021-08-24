<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      titulo: 'DevPic',
      fotos: [
          {
            url: 'https://s2.glbimg.com/pxaJidSOUGeEmMJ4odoGC1kTrUI=/0x0:2256x1329/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2020/5/1/7HTwAyRAGrVmdJngszOA/valor-imagem-1-tecnologias-digitais-na-saude.jpg',
            titulo: 'smartphone'
          },
          {
            url: 'https://s2.glbimg.com/pxaJidSOUGeEmMJ4odoGC1kTrUI=/0x0:2256x1329/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2020/5/1/7HTwAyRAGrVmdJngszOA/valor-imagem-1-tecnologias-digitais-na-saude.jpg',
            titulo: 'smartphone'
          }
      ] 
    }
  }
}
</script>
