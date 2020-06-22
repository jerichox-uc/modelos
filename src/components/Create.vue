<template>
  <div class="create">
    <div class="field" @submit.prevent="addNewProduct">
      <div class="control">
        <h2 class="titulo_registro">Registro de Servicios</h2>
        <input
          class="input"
          type="text"
          v-model="name"
          placeholder="Nombre del producto"
        />
        <input
          class="input"
          type="text"
          v-model="picture"
          placeholder="Imagen"
        />
        <input
          class="input"
          type="number"
          v-model="price"
          placeholder="Price"
        />
        <div class="añadir">
          <button class="button is-primary boton-add" @click="addNewProduct">
            Añadir
          </button>
          <button class="button is-link" v-if="edit" @click="actualizar(id)">
            Actualizar
          </button>
        </div>
      </div>
    </div>

    <div>
      <h2>Servicios registrados</h2>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre Producto</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="p in computedProductList" :key="p.id">
            <td class="lista_producto">{{ p.id }}</td>
            <td class="lista_producto">{{ p.data.name }}</td>
            <td class="lista_producto">{{ p.data.price }}</td>
            <td>
              <button class="button is-link is-outlined" @click="editar(p.id)">
                <span class="icon is-small">
                  <i class="fas fa-check"></i>
                </span>
                <span>Editar</span>
              </button>
            </td>
            <td>
              <button
                class="button is-danger is-outlined"
                @click="borrar(p.id)"
              >
                <span>Borrar</span>
                <span class="icon is-small">
                  <i class="fas fa-times"></i>
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "Create",
  data() {
    return {
      name: "",
      picture: "",
      price: "",
    };
  },
  computed: {
    ...mapState(["products", "edit"]),
    computedProductList() {
      console.log(this.products);
      return this.products.filter((p) => {
        return p.data;
      });
    },
  },
  methods: {
    ...mapActions(["updateEdit"]),
    addNewProduct() {
      const prod = {
        name: this.name,
        picture: this.picture,
        price: this.price,
      };
      axios
        .post(
          "https://us-central1-jerichox-16759.cloudfunctions.net/products/product",
          prod,
          { headers: { "Content-type": "application/json" } }
        )
        .then(() => {
          this.$store.dispatch("getProducts");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editar(id) {
      this.updateEdit();
      this.findProduct(id);
    },
    findProduct(id) {
      axios
        .get(
          `https://us-central1-jerichox-16759.cloudfunctions.net/products/product/${id}`,
          { headers: { "Content-type": "application/json" } }
        )
        .then((response) => {
          this.name = response.data.name;
          this.picture = response.data.picture;
          this.price = response.data.price;
          this.id = id;
        });
    },
    actualizar(id) {
      const prod = {
        name: this.name,
        picture: this.picture,
        price: this.price,
      };
      axios
        .put(
          `https://us-central1-jerichox-16759.cloudfunctions.net/products/product/${id}`,
          prod,
          { headers: { "Content-type": "application/json" } }
        )
        .then(() => {
          (this.name = ""),
            (this.picture = ""),
            (this.price = ""),
            this.$store.dispatch("getProducts");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    borrar(id) {
      /* let confirm = confirm("¿Se eliminó?");
      if (confirm) { */
      axios
        .delete(
          `https://us-central1-jerichox-16759.cloudfunctions.net/products/product/${id}`,
          { headers: { "Content-type": "application/json" } }
        )
        .then(() => {
          alert("Producto eliminado.");
          this.$store.dispatch("getProducts");
        });
      /*  } */
    },
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
h2 {
  font-size: 30px;
  text-align: center;
  margin: auto;
}
.titulo_registro {
  color: black;
  padding-bottom: 15px;
}
.input {
  margin: 5px 0;
}
.añadir {
  margin: auto;
  margin-top: 10px;
  display: table;
}
.table {
  margin: 20px auto;
}
.boton-add {
  margin-right: 10px;
}
.control {
  background-color: #F4FA58;
  border-radius: 10px;
  width: 40%;
  padding: 30px;
  margin: 30px auto;
  align-content: center;
}
.lista_producto {
  font-size: 15px;
}
</style>
