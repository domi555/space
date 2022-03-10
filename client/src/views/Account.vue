<template>
  <!--
  POST /users
  PATCH /users/:id/password
  PATCH /users/:id
  DELETE /user/:email
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Manage Account</h3>
      <v-text-field v-model="first" color="teal" label="First" type="text" hide-details="auto"></v-text-field>
      <v-text-field v-model="last" color="teal" label="Last" type="text" hide-details="auto"></v-text-field>
      <v-btn small class="mt-6 teal darken-2" dark @click="updateUser">Update</v-btn>

      <h4 class="mt-6 mb-0">Reset Password</h4>
      <v-row>
        <v-col cols="8">
          <v-text-field v-model="password" color="teal" label="Name" hide-details="auto" type="password" :disabled="!password_enabled"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn small class="mt-6 teal darken-2" dark @click="updatePassword">Change</v-btn>
        </v-col>
      </v-row>

      <v-btn dark class="mt-5 teal darken-2" @click="logout()">Logout</v-btn>
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>

<script>
import axios from 'axios';

export default {
  name: 'About',
  data() {
    return {
      first: '',
      last: '',
      password: '',
      password_enabled: true,
      userID: JSON.parse(localStorage.getItem('user')),
    };
  },
  props: {
    serverURL: {
      type: String,
    },
    user: {
      type: Object,
    },
  },

  created() {
    // this.first = this.user.userData.first;
    // this.last = this.user.userData.last;
    // this.password = this.user.userData.password;
  },

  methods: {
    async updateUser() {
      try {
        await axios({
          url: this.serverURL + '/users/' + this.userID.id,
          method: 'PATCH',
          data: {
            first: this.first,
            last: this.last,
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    async updatePassword() {
      try {
        if (this.password.length > 0) {
          await axios({
            url: this.serverURL + '/users/' + this.userID.id,
            method: 'PATCH',
            data: {
              password: this.password,
            },
          });
          this.password_enabled = false;
        }
      } catch (e) {
        console.error(e);
      }
    },
    logout() {
      localStorage.clear();
      this.$cookies.remove('sid');
      this.$router.push('/');
    },
  },
};
</script>
