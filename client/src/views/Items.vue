<template>
  <v-container fluid style="margin-top: 60px;">
    <v-row dense>
      <v-col>
        <v-card>
          <v-card-actions>
            <p class="ms-2 mb-0">Item name</p>

            <v-spacer></v-spacer>

            <span class="me-3">1 Products</span>
            <v-btn class="teal darken-2 white--text">Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Products',

  data: () => ({}),
};
</script>
