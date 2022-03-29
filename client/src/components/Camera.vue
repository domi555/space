<template>
  <v-container ref="container" fluid class="pa-0" style="margin-top: 60px;">
    <div class="">
      <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader']"></v-quagga>
    </div>
    <div class="d-flex justify-center align-center" style="position: fixed; bottom: 0; width: 100%;">
      <v-btn class="teal darken-2 white--text mb-4" @click="$emit('skip')">Skip</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      readerSize: {
        width: 414,
        height: 896,
      },
      detecteds: [],
      code: '',
      readerTypes: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader'],
    };
  },
  methods: {
    logIt(data) {
      this.code = data.codeResult.code;
      this.$emit('barcode', this.code);
      console.log('detected', data);
    },
  },
};
</script>
