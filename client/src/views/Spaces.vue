<template>
  <v-container fluid style="margin-top: 60px;">
    <v-row dense>
      <v-col>
        <v-card>
          <v-img
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            src=""
          >
            <v-card-title>Space name</v-card-title>
          </v-img>

          <v-card-actions>
            <p class="ms-2 mb-0">[...] Items</p>

            <v-spacer></v-spacer>

            <v-btn dark to="/space/product">Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Spaces',

  data: () => ({}),
};
</script>
