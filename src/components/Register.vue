<template>
  <div>
    <input type="checkbox" v-model="isAccepted" />
    <button
      type="submit"
      :class="{ isDisabled: !isAccepted }"
      @click="submitForm"
    >
      Registrar
    </button>

    <input type="text" />
    <input type="email" />
    <input type="password" />
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      isAccepted: false,
    };
  },
  methods: {
    submitForm() {
      // Función para el formulario
    },
  },
};
</script>

<style scoped></style>