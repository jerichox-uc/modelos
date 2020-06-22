<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Register />
  </div>
</template>
<script>
import Register from "../components/Register";

export default {
  name: "About",
  components: {
    Register,
  },
};
</script>