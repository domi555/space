<template>
  <!--
  POST /users/new
  -->
  <div class="d-flex justify-center align-center" style="margin-top: 70px;">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="col-12">
          <v-card class="elevation-12">
            <v-toolbar class="teal darken-2" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  prepend-icon="mdi-account"
                  name="email"
                  label="Email"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="first"
                  prepend-icon="mdi-numeric-1-box"
                  name="first"
                  label="First name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="last"
                  prepend-icon="mdi-numeric-2-box"
                  name="last"
                  label="Last name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn plain to="/login">Already have an account?</v-btn>
              <v-btn class="teal darken-2" dark>Register</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      first: '',
      last: '',
      password: '',
    };
  },
};
</script>
