<template>
  <v-container fluid class="pa-0" style="margin-top: 60px;">
    <div class="">
      <div class="a">
        <br />
        <p>Code: {{ code }}</p>
        <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader']"></v-quagga>
      </div>
    </div>
    <div class="d-flex justify-center align-center" style="position: fixed; bottom: 0; width: 100%;">
      <v-btn class="teal darken-2 white--text mb-4">Skip</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480,
      },
      detecteds: [],
      code: '',
      readerTypes: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader'],
    };
  },
  methods: {
    logIt(data) {
      this.code = data.codeResult.code;
      console.log('detected', data);
    },
  },
};
</script>

<style lang="scss" scoped>
.a {
  padding-left: 620px;
}
</style>
