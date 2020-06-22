<template>
  <div id="app">
    <navbar :brand="'TE ASISTO'"  />
    <router-view />
    <div></div>
<Footer />
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
</style>
