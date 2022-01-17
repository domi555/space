<template>
  <!--
  PATCH /products/:id
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Edit Product</h3>
      <v-text-field
        color="teal"
        label="Name"
        hide-details="auto"
        value="Product name"
      ></v-text-field>
      <h4 class="mt-4 mb-2">Image</h4>
      <v-btn small dark class="teal darken-2">Select New</v-btn><br />

      <v-btn dark class="mt-5 me-2 teal darken-2">Save</v-btn>
      <v-btn dark class="mt-5 teal darken-2">Delete All</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
