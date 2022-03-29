<template>
  <!--
    TODO
    PATCH /products/:id
    DELETE /products/:id
  -->

  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Edit Product</h3>
      <v-text-field color="teal" label="Name" hide-details="auto" v-model="productName"></v-text-field>
      <input ref="upload" class="d-none" type="file" accept=".jpg,.png" @change="picked" />
      <h4 class="mt-4 mb-2">Image</h4>
      <v-btn small dark class="teal darken-2" type="file" @click="upload">Select New</v-btn><br />

      <v-btn dark class="mt-5 me-2 teal darken-2" @click="patchProduct">Save</v-btn>
      <v-btn dark class="mt-5 teal darken-2" @click="deleteProduct">Delete All</v-btn>
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
      user: JSON.parse(localStorage.getItem('user')),

      select: false,
      file: null,
      image: '',
    };
  },
  props: {
    id: { type: String },
  },
  created() {
    this.getItems();
  },
  methods: {
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
    },
    async patchProduct() {
      try {
        await axios({
          url: `${this.serverURL}/products/${this.id}`,
          method: 'patch',
          data: {
            name: this.productName,
            image: this.image,
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    async deleteProduct() {
      try {
        await axios({
          url: `${this.serverURL}/products/${this.id}`,
          method: 'DELETE',
        });
      } catch (e) {
        console.error(e);
      }
      // this.$router.push(`/items/${this.user.id}`);
      this.$router.back();
    },
    async getItems() {
      try {
        const { data } = await axios({
          url: `${this.serverURL}/products/item/${this.id}`,
          method: 'GET',
        });
        console.log(data);
        this.productName = data.name;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped></style>
