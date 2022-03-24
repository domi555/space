<template>
  <!--
    TODO
    POST /products
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Add Product</h3>
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-text-field
          color="teal"
          label="Name"
          hide-details="auto"
          v-model="productName"
          :error-messages="nameRules"
          @input="$v.productName.$touch()"
          @blur="$v.productName.$touch()"
        ></v-text-field>
        <h4 class="mt-3 mb-0">Description</h4>
        <v-text-field
          color="teal"
          label="Description"
          hide-details="auto"
          v-model="productDesc"
          :error-messages="descRules"
          @input="$v.productDesc.$touch()"
          @blur="$v.productDesc.$touch()"
        ></v-text-field>
        <h4 class="mt-4 mb-2">Image</h4>
        <span v-if="image.length <= 0" class="red--text mr-5"><b>Image not selected yet</b></span>
        <v-btn small dark class="teal darken-2" type="file" @click="upload">Select</v-btn>
        <input ref="upload" class="d-none" type="file" accept=".jpg,.png" @change="picked" />

        <h4 class="mt-6 mb-0">Bar code/QR code</h4>
        <v-row>
          <v-col cols="8">
            <v-text-field
              color="teal"
              label="Barcode"
              hide-details="auto"
              v-model="productBarcode"
              :error-messages="barcodeRules"
              @input="$v.productBarcode.$touch()"
              @blur="$v.productBarcode.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn small class="mt-6 teal darken-2" dark @click="scanBarcode">Scan</v-btn>
          </v-col>
        </v-row>

        <v-btn
          dark
          class="mt-5 teal darken-2"
          type="submit"
          @click="
            addProduct();
            submit;
          "
          >Create</v-btn
        ></v-form
      >
    </div>
    <div class="text-center">
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import axios from 'axios';

export default {
  mixins: [validationMixin],
  validations: {
    productName: { required },
    productDesc: { required },
    productBarcode: { required },
  },
  data() {
    return {
      serverURL: process.env.VUE_APP_SERVER,
      userID: JSON.parse(localStorage.getItem('user')),

      productName: 'Product',
      productDesc: 'P',

      productBarcode: '1234567890',

      select: false,
      file: null,
      image: '',

      snackbar: false,
      text: '',
      timeout: 5000,

      valid: false,

      items: [],
    };
  },
  props: {
    id: {
      type: Number,
    },
  },
  computed: {
    nameRules() {
      const errors = [];
      if (!this.$v.productName.$dirty) return errors;
      !this.$v.productName.required && errors.push('Name is required');
      return errors;
    },
    descRules() {
      const errors = [];
      if (!this.$v.productDesc.$dirty) return errors;
      !this.$v.productDesc.required && errors.push('Description is required');
      return errors;
    },
    barcodeRules() {
      const errors = [];
      if (!this.$v.productBarcode.$dirty) return errors;
      !this.$v.productBarcode.required && errors.push('Barcode is required');
      return errors;
    },
  },
  methods: {
    uploadImage() {
      // Upload image...
    },
    scanBarcode() {
      // Scan overlay...
    },
    submit() {
      this.$v.$touch();
    },
    // Info: Table products => image varchar(100) wurde geändert zu text
    async addProduct() {
      if (this.valid == true && this.productBarcode.length > 0 && this.image.length > 0) {
        const result = await axios({
          url: `http://localhost:3000/products/${this.productBarcode}/code`,
          method: 'GET',
        });
        this.items = result.data;

        if (this.items.length <= 0) {
          const { data } = await axios({
            url: `${this.serverURL}/products`,
            method: 'POST',
            contentType: 'application/json',
            data: {
              name: this.productName,
              description: this.productDesc,
              image: this.image,
              count: 1,
              barcode: this.productBarcode,
              spaceid: this.id,
            },
          });
          console.log(data);
          this.snackbar = true;
          this.text = `The Product with the Barcode ${this.productBarcode} has been added`;
          this.$refs.form.reset();
          this.$v.$reset();
        } else {
          this.snackbar = true;
          this.text = `The Product is already added`;
        }
      } else {
        this.snackbar = true;
        this.text = `Please check the fields`;
      }
      // try {
      //   const { code, data } = await axios({
      //     url: `${this.serverURL}/products`,
      //     method: 'POST',
      //     data: {
      //       name: this.productName,
      //       description: this.productDesc,
      //       image: this.image,
      //       count: 1,
      //       barcode: this.productBarcode,
      //       spaceid: this.id,
      //     },
      //   });
      //   console.log(data);
      //   if (code == 200) {
      //     this.text = 'Product has been added';
      //     this.snackbar = true;
      //   }
      //   if (code == 500) {
      //     this.text = `Error while adding product`;
      //     this.snackbar = true;
      //   }
      // } catch (e) {
      //   console.error(e);
      // }
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

create user inv_manager login password '1234'; grant all on products,spaces,users,users_spaces to inv_manager;
GRANT ALL ON products_id_seq to inv_manager;
