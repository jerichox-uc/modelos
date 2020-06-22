<template>
  <div class="hello">
    <div data-testId="hello-component">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "Hola",
    },
  },
};
</script>

<style scoped></style>
