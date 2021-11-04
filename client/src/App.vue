<template>
  <v-app>
    <v-app-bar dark absolute>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="ps-0">[...]</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Menu
            </v-list-item-title>
            <v-list-item-subtitle>
              [...]
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-btn @click="drawer = false" dark>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item>

        <v-list-item-group
          v-model="group"
          active-class="black--text text--accent-4"
        >
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Landing</v-list-item-title>
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
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
