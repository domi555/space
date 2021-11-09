<template>
  <div class="d-flex justify-center align-center" style="margin-top: 70px;">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="col-12">
          <v-card class="elevation-12">
            <v-toolbar dark>
              <v-toolbar-title>Login</v-toolbar-title>
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
              <v-btn plain to="/register">No account?</v-btn>
              <v-btn dark to="/">Login</v-btn>
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
      password: '',
    };
  },
};
</script>
