<template>
  <!--
  GET /spaces/:id
  DELETE /products/:id
  -->
  <v-container fluid style="margin-top: 60px;">
    <v-row dense>
      <v-col>
        <v-btn
          color="teal darken-2"
          outlined
          small
          dark
          class="mb-2"
          to="/spaces"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-card>
          <v-card-actions>
            <p class="ms-2 mb-0">Item name</p>

            <v-spacer></v-spacer>

            <v-btn plain small to="/edit-product">
              Edit
            </v-btn>
            <v-btn class="teal darken-2 white--text" to="/product">Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div style="position: fixed; bottom: 12px; right: 12px;">
      <div class="d-flex flex-column">
        <v-btn
          color="teal darken-2"
          small
          fab
          dark
          class="mb-2"
          to="/add-product"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn color="teal darken-2" small fab dark>
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Products',

  data: () => ({}),
};
</script>
