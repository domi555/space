<template>
  <!--
    TODO
    POST /products
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Add Product</h3>
      <v-text-field color="teal" label="Name" hide-details="auto" v-model="productName"></v-text-field>
      <h4 class="mt-3 mb-0">Description</h4>
      <v-text-field color="teal" label="Name" hide-details="auto" v-model="productDesc"></v-text-field>
      <h4 class="mt-4 mb-2">Image</h4>
      <v-btn small dark class="teal darken-2" type="file" @click="upload">Select</v-btn>
      <input ref="upload" class="d-none" type="file" accept=".jpg,.png" @change="picked" />

      <h4 class="mt-6 mb-0">Bar code/QR code</h4>
      <v-row>
        <v-col cols="8">
          <v-text-field color="teal" label="Name" hide-details="auto" v-model="productBarcode"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn small class="mt-6 teal darken-2" dark @click="scanBarcode">Scan</v-btn>
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
      userID: JSON.parse(localStorage.getItem('user')),

      productName: '',
      productDesc: '',

      productBarcode: '',

      select: false,
      file: null,
      image: 'nuller',
    };
  },
  props: {
    id: {
      type: Number,
    },
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
            name: this.productName,
            description: this.productDesc,
            image: this.image,
            count: 1,
            barcode: this.productBarcode,
            spaceid: this.id
          },
        });
      } catch (e) {
        console.error(e);
      }
    },

    upload() {
      this.select = true;
      window.addEventListener(
        'focus',
        () => {
          this.select = false;
        },
        { once: true },
      );
      this.$refs.upload.click();
    },
    async picked(e) {
      const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      this.file = e.target.files[0];
      this.image = await fileToBase64(this.file);
      console.log(this.image);
    },
  },
};
</script>

<style lang="scss" scoped></style>
