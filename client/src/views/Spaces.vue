<template>
  <!--
  GET /spaces/:id
  PATCH /spaces/:id/share
  DELETE /spaces/:id
  -->
  <v-container fluid style="margin-top: 60px;">
    <v-row dense>
      <v-col>
        <v-card v-for="space of spaces" :key="space.id" class="my-3">
          <v-img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" :src="`${space.image}`">
            <v-card-title>{{ space.name }}</v-card-title>
          </v-img>
          <v-card-actions>
            <p class="ms-2 mb-0">{{ space.count }} Item(s)</p>

            <v-spacer></v-spacer>
            <v-btn class="red darken-2 white--text" @click="deleteSpace(space.id, space.name)">Delete</v-btn>
            <v-btn class="teal darken-2 white--text" :to="`/items/${space.id}`">Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div style="position: fixed; bottom: 12px; right: 12px;">
      <v-btn color="teal darken-2" small fab dark to="/add-space">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Spaces',
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      spaces: [],

      snackbar: false,
      text: '',
      timeout: 4000,
    };
  },

  async created() {
    await this.getSpaces();
  },

  methods: {
    async getSpaces() {
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
    async deleteSpace(id, name) {
      this.snackbar = false;
      this.text = `Space ${name} has been deleted`;
      try {
        await axios({
          url: `http://localhost:3000/spaces/${id}`,
          method: 'delete',
        });
        this.snackbar = true;
        this.spaces = this.spaces.filter((el) => el.id != id);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
