<template>
  <!--
    GET /products/:id
  -->
  <v-container fluid style="margin-top: 60px;">
    <v-card>
      <v-img
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="180px"
      >
        <v-card-title>Product name</v-card-title>
      </v-img></v-card
    >

    <div class="mt-2 mx-1">
      <v-list-item class="ps-0">
        <v-list-item-content>
          <v-list-item-title>Product code</v-list-item-title>
          <v-list-item-subtitle>xxxxxxxx-xxx-xxxx</v-list-item-subtitle>
          <v-list-item-title class="mt-2">Description</v-list-item-title>
          <v-list-item-subtitle class="text-wrap">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </v-list-item-subtitle>
          <v-list-item-title class="mt-2">Stock count</v-list-item-title>
          <v-list-item-subtitle>
            1
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>

    <div
      class="d-flex justify-center align-center"
      style="position: fixed; bottom: 15px; width: 100%;"
    >
      <v-btn color="teal darken-2" dark class="me-2">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn color="teal darken-2" dark>
        Take
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      productId: null
    }
  },
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
