<template>
  <!--
    TODO
    POST /spaces
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Add New Space</h3>
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-text-field
          color="teal"
          label="Name"
          hide-details="auto"
          v-model="spaceName"
          :error-messages="nameRules"
          @input="$v.spaceName.$touch()"
          @blur="$v.spaceName.$touch()"
        ></v-text-field>
        <h4 class="mt-3 mb-0">Description</h4>
        <v-text-field
          color="teal"
          label="Description"
          hide-details="auto"
          v-model="spaceDesc"
          :error-messages="descRules"
          @input="$v.spaceDesc.$touch()"
          @blur="$v.spaceDesc.$touch()"
        ></v-text-field>
        <h4 class="mt-4 mb-2">Image</h4>
        <span v-if="image.length <= 0" class="red--text mr-5"><b>Image not selected yet</b></span>
        <v-btn small dark class="teal darken-2" type="file" @click="upload">Select</v-btn>
        <input ref="upload" class="d-none" type="file" accept=".jpg,.png" @change="picked" />
        <br />
        <v-btn
          dark
          class="mt-5 teal darken-2"
          type="submit"
          @click="
            addSpace();
            submit;
          "
          >Create</v-btn
        >
      </v-form>
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
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
export default {
  mixins: [validationMixin],
  validations: {
    spaceName: { required },
    spaceDesc: { required },
  },
  data() {
    return {
      serverURL: process.env.VUE_APP_SERVER,
      userID: JSON.parse(localStorage.getItem('user')),

      spaceName: 'Test Space',
      spaceDesc: 'Test Description',

      select: false,
      file: null,
      image: '',

      snackbar: false,
      text: '',
      timeout: 5000,

      valid: false,
    };
  },
  computed: {
    nameRules() {
      const errors = [];
      if (!this.$v.spaceName.$dirty) return errors;
      !this.$v.spaceName.required && errors.push('Name is required');
      return errors;
    },
    descRules() {
      const errors = [];
      if (!this.$v.spaceDesc.$dirty) return errors;
      !this.$v.spaceDesc.required && errors.push('Description is required');
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
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

    async addSpace() {
      if (this.valid == true && this.image.length > 0) {
        const { data } = await axios({
          url: `${this.serverURL}/spaces`,
          method: 'POST',
          data: {
            name: this.spaceName,
            description: this.spaceDesc,
            image: this.image,
            userid: this.userID.id,
            admin: true,
          },
        });

        this.$router.push('/spaces');

        console.log(data);
        this.snackbar = true;
        this.text = `The Space ${this.spaceName} has been added`;
        this.$refs.form.reset();
        this.$v.$reset();
      } else {
        this.snackbar = true;
        this.text = `Please check the fields`;
      }
      
    },
  },
};
</script>

<style lang="scss" scoped></style>
