<template>
  <!--
    TODO
    POST /products
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Add Product</h3>
      <v-text-field
        color="teal"
        label="Name"
        hide-details="auto"
        v-model="productName"
      ></v-text-field>
      <h4 class="mt-4 mb-2">Image</h4>
      <v-btn small dark class="teal darken-2" type="file" @click="uploadImage"
        >Select</v-btn
      >

      <h4 class="mt-6 mb-0">Bar code/QR code</h4>
      <v-row>
        <v-col cols="8">
          <v-text-field
            color="teal"
            label="Name"
            hide-details="auto"
            v-model="productBarcode"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn small class="mt-6 teal darken-2" dark @click="scanBarcode"
            >Scan</v-btn
          >
        </v-col>
      </v-row>

      <v-btn dark class="mt-5 teal darken-2" @click="addProduct">Create</v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      serverURL: process.env.VUE_APP_SERVER,

      productName: '',
      productImage: null,

      productBarcode: '',
    };
  },
  methods: {
    uploadImage() {
      // Upload image...
    },
    scanBarcode() {
      // Scan overlay...
    },
    async addProduct() {
      try {
        await axios({
          url: `${this.serverURL}/products`,
          method: 'POST',
          data: {
            productName: this.productName,
            productImage: this.productImage,

            productBarcode: this.productBarcode,
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
