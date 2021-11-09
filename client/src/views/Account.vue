<template>
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Manage Account</h3>
      <v-text-field
        color="teal"
        label="First"
        hide-details="auto"
      ></v-text-field>
      <v-text-field
        color="teal"
        label="Last"
        hide-details="auto"
      ></v-text-field>

      <h4 class="mt-6 mb-0">Reset Password</h4>
      <v-row>
        <v-col cols="8">
          <v-text-field
            color="teal"
            label="Name"
            hide-details="auto"
            type="password"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn small class="mt-6 teal darken-2" dark>Change</v-btn>
        </v-col>
      </v-row>

      <v-btn dark class="mt-5 teal darken-2" to="/login">Logout</v-btn>
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  name: 'About',
};
</script>
