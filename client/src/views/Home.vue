<template>
  <v-container fluid style="margin-top: 60px;">
    <v-row dense>
      <!-- <v-col class="col-12">
        <v-card>
          <v-img
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="150px"
            src=""
          >
            <v-card-title>Spaces v1.0 released</v-card-title>
          </v-img>
        </v-card>
      </v-col> -->

      <v-col class="col-12">
        <h3 class="my-2">Smart overview</h3>
        <v-card v-for="space of spaces" :key="space.id" class="my-3">
          <v-card-actions>
            <p class="ms-2 mb-0">{{ space.name }}</p>

            <v-spacer></v-spacer>

            <v-btn class="teal darken-2 white--text" :to="`/items/${space.id}`">Open</v-btn>
          </v-card-actions>
        </v-card>

        <!-- <h3 class="my-2 mt-4">Shared spaces</h3>
        <v-card>
          <v-card-actions>
            <p class="ms-2 mb-0">Space name</p>

            <v-spacer></v-spacer>

            <v-btn class="teal darken-2 white--text" to="/items">Open</v-btn>
          </v-card-actions>
        </v-card>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      spaces: [],
    };
  },

  async created() {
    await this.getSpaces();
  },

  methods: {
    async getSpaces() {
      // TODO: Space id nicht USER id

      // console.log(this.user.id);
      try {
        const { data } = await axios({
          url: `http://localhost:3000/spaces/${this.user.id}`,
          method: 'GET',
        });
        this.spaces = data;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
