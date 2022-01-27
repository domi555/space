<template>
  <div class="d-flex justify-center align-center" style="margin-top: 70px;">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="col-12">
          <v-card class="elevation-12">
            <v-toolbar class="teal darken-2" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="email" prepend-icon="mdi-account" name="email" label="Email" type="text"></v-text-field>
                <v-text-field v-model="password" prepend-icon="mdi-lock" name="password" label="Password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn plain to="/register">No account?</v-btn>
              <v-btn class="teal darken-2" dark @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  props: {
    serverURL: {
      type: String,
    },
  },

  methods: {
    async login() {
      try {
        const { data } = await axios({
          url: this.serverURL + '/login',
          method: 'POST',
          data: {
            email: this.email,
            password: this.password,
          },
        });

        const userId = data.id;
        console.log(userId);
        if (userId) {
          // TODO session setup
          console.log(userId);
          localStorage.setItem('id', userId);
          this.$cookies.set('sid', { userId: userId });

          this.$emit('loggedIn', userId);
          this.$router.push('/');
        }
      } catch (e) {
        console.error(e);
      }

      this.$emit('login', { email: this.email, password: this.password });
    },
  },
};
</script>
