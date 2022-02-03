<template>
  <!--
    TODO
    POST /spaces
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Add Space</h3>
      <v-text-field
        color="teal"
        label="Name"
        hide-details="auto"
        v-model="spaceName"
      ></v-text-field>
      <h4 class="mt-4 mb-2">Image</h4>
      <v-btn small dark class="teal darken-2" type="file" @click="uploadImage"
        >Select</v-btn
      ><br />

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

      spaceName: '',
      spaceImage: null,
    };
  },
  methods: {
    uploadImage() {
      // Upload image...
    },
    async addSpace() {
      try {
        await axios({
          url: `${this.serverURL}/spaces`,
          method: 'POST',
          data: {
            name: this.spaceName,
            image: this.spaceImage,
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
