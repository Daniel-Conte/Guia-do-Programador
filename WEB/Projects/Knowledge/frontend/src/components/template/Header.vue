<template>
  <header class="header">
    <a class="toggle" @click="toggleMainMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title">
      {{ title }}
    </h1>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'MainHeader',
  props: {
    title: String,
    hideToggle: Boolean,
  },
  computed: {
    // "mapState(<state[]>)" mapeia o state da store e retorna somente os states passados no array
    // Deve ser usado no computed
    ...mapState(['isMenuVisible']),
    icon() {
      // Outro metodo de acessar o state da store
      //this.$store.state.isMenuVisible

      return this.isMenuVisible ? 'fa-angle-left' : 'fa-angle-down';
    },
  },
  methods: {
    // "mapMutations(<mutations[]>)" Mapeia as mutations da store e retorna somente as passadas no array
    ...mapMutations(['toggleMenu']),
    toggleMainMenu() {
      // acessando a mutation mapeada
      this.toggleMenu();

      // Outro método para acessar as mutations da store
      // Como a store do vuex tá dentro da instância do vue, basta chamá-la com "this.$store"
      // "commit(<mutation>, <payload>)" dispara a mutation da store
      //this.$store.commit('toggleMenu');
    },
  },
};
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #1e469a, #49a7c1);

  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}

.title a {
  color: #fff;
  text-decoration: none;
}

header.header > a.toggle {
  width: 60px;
  height: 100%;
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

header.header > a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
