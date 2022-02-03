<template>
  <!--
    POST /users
    GET /users/:id
   -->
  <v-app>
    <v-app-bar dark absolute class="teal darken-2">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="ps-0">Spaces</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Menu
            </v-list-item-title>
            <v-list-item-subtitle>
              Navigation
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-btn class="teal darken-2" @click="drawer = false" dark>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item>

        <v-list-item-group
          v-model="group"
          class="black--text text--accent-4"
          active-class="teal--text darken-2"
        >
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/spaces">
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Spaces</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/account">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view :serverURL="serverURL" @loggedIn="loggedIn" />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,

    serverURL: process.env.VUE_APP_SERVER,
  }),

  methods: {
    async loggedIn(id) {
      try {
        const { data } = await axios({
          url: this.serverURL + '/users/' + id,
          method: 'GET',
        });

        localStorage.setItem('user', JSON.stringify({ id, data }));
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
