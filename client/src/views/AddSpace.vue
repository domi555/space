<template>
  <!--
  POST /spaces
  PATCH /spaces/:id
  -->
  <v-container fluid style="margin-top: 70px;">
    <div class="px-2">
      <h3>Add Space</h3>
      <v-text-field
        color="teal"
        label="Name"
        hide-details="auto"
      ></v-text-field>
      <h4 class="mt-4 mb-2">Image</h4>
      <v-btn small dark class="teal darken-2">Select</v-btn><br />

      <v-btn dark class="mt-5 teal darken-2">Create</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
