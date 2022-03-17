<template>
  <!--
    TODO
    POST /spaces
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Add New Space</h3>
      <v-text-field color="teal" label="Name" hide-details="auto" v-model="spaceName"></v-text-field>
      <h4 class="mt-3 mb-0">Description</h4>
      <v-text-field color="teal" label="Name" hide-details="auto" v-model="spaceDesc"></v-text-field>
      <h4 class="mt-4 mb-2">Image</h4>
      <v-btn small dark class="teal darken-2" type="file" @click="upload">Select</v-btn>
      <input ref="upload" class="d-none" type="file" accept=".jpg,.png" @change="picked" />
      <br />

      <v-btn dark class="mt-5 teal darken-2" @click="addSpace">Create</v-btn>
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

      spaceName: '',
      spaceDesc: '',

      select: false,
      file: null,
      image: null,
    };
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
      console.log(this.image);
    },

    async addSpace() {
      try {
        await axios({
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
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
