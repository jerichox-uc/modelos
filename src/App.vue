<template>
  <div id="app">
    <navbar :brand="'Classicmodels'"  />
   <div></div>
    <router-view />
    <div id="foot">
<Footer />
</div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>


<style lang="scss">

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}
#foot {
   position: absolute;
 bottom: 0;
 width: 100%;
}
</style>
