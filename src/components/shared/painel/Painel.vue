<template>
    <div class="painel">
        {{ message }}
        <h2 class="painel-titulo" @dblclick="visivel = !visivel"> {{ titulo }}</h2>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
                <slot>
                </slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['titulo'],

    data() {
        return {
            visivel: true,
        }
    },

    computed: {
        message() {
            return `Faça doble click no título.`
        }
    }
}
</script>
<style scoped>
    /* com o scoped  os estilos aplicados apenas no próprio componente.*/ 
    /* estilo do painel */ 
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

    * {
        box-shadow: 5px 5px 5px;
    }

    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s
    }
</style>
