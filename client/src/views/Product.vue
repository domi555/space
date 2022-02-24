<template>
  <!--
    GET /products/:id
  -->
  <v-container fluid style="margin-top: 60px;">
    <v-card>
      <v-img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="180px">
        <v-card-title> {{ this.data.name }} </v-card-title>
      </v-img></v-card
    >

    <div class="mt-2 mx-1">
      <v-list-item class="ps-0">
        <v-list-item-content>
          <v-list-item-title>Product code</v-list-item-title>
          <v-list-item-subtitle> {{ this.data.barcode }}</v-list-item-subtitle>
          <v-list-item-title class="mt-2">Description</v-list-item-title>
          <v-list-item-subtitle class="text-wrap">
            {{ this.data.description }}
          </v-list-item-subtitle>
          <v-list-item-title class="mt-2">Stock count</v-list-item-title>
          <v-list-item-subtitle>
            {{ this.data.count }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>

    <div class="d-flex justify-center align-center" style="position: fixed; bottom: 15px; width: 100%;">
      <v-btn color="teal darken-2" dark class="me-2" @click="updateStock(1)">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn color="teal darken-2" dark @click="updateStock(-1)">
        Take
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      productId: null,
      data: {},
    };
  },
  methods: {
    async getItems() {
      try {
        const result = await axios({
          url: `http://localhost:3000/products/item/${this.id}`,
          method: 'GET',
        });
        this.data = result.data;
      } catch (e) {
        console.error(e);
      }
    },
    async updateStock(updateStock) {
      let newStock = 0;
      if (this.data.count > 0) {
        newStock = this.data.count + updateStock;
      } else {
        if (updateStock == 1) newStock += updateStock;
        else console.log('Stock kann nicht kleiner als 0 sein.');
      }

      try {
        const result = await axios({
          url: `http://localhost:3000/products/${this.data.id}`,
          method: 'patch',
          contentType: 'application/json',
          data: {
            count: newStock,
          },
        });
        this.data = result.data;
        console.log(this.data);
        this.getItems();
      } catch (e) {
        console.error(e);
      }
    },
  },

  async created() {
    await this.getItems();
  },

  props: {
    user: {
      type: Object,
    },
    id: { type: String },
  },
};
</script>

<style lang="scss" scoped></style>
