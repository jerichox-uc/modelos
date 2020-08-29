<template>
  <div class="container">
    <h1>HOME</h1>
    <section class="hero is-medium is-info is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
       VITRINA
      </h1>
      <h2 class="subtitle">
        
      </h2>
    </div>
  </div>
</section>

    <products-list/>
  </div>
</template>

<script>
import ProductsList from "../components/Products";


export default {
  name: 'home',
  components: {
    ProductsList,
   
  },
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>

</style>