<template>
  <!--
    TODO
    GET /products/:id
  -->
  <v-container fluid style="margin-top: 60px;">
    <v-row dense>
      <v-col>
        <!-- <v-btn
          color="teal darken-2"
          outlined
          small
          dark
          class="mb-2"
          to="/spaces"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
        <v-card v-for="(item, i) of items" :key="i" class="mb-3">
          <v-card-actions>
            <p class="ms-2 mb-0">{{ item.name }}</p>

            <v-spacer></v-spacer>

            <v-btn plain small :to="`/edit-product/${item.id}`">
              Edit
            </v-btn>
            <v-btn class="teal darken-2 white--text" :to="`/product/${item.id}`">Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div style="position: fixed; bottom: 12px; right: 12px;">
      <div class="d-flex flex-column">
        <v-btn color="teal darken-2" small fab dark class="mb-2" :to="'/add-product/' + id">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <!-- <v-btn color="teal darken-2" small fab dark>
          <v-icon>mdi-minus</v-icon>
        </v-btn> -->
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Products',
  data() {
    return {
      items: [],
    };
  },
  props: {
    serverURL: { type: String },
    user: {
      type: Object,
    },
    spaceId: { type: Number },
    id: { type: String },
  },
  async created() {
    await this.getItems();
    console.log(this.spaceId);
  },
  methods: {
    async getItems() {
      try {
        const result = await axios({
          url: `http://localhost:3000/products/${this.id}`,
          method: 'GET',
        });
        this.items = result.data;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
