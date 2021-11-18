<template>
  <div id="app">
    <div>
      <p>Code: {{ code }}</p>
      <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader']"></v-quagga>
    </div>
  </div>
</template>

<script>
//  IN main.js ist VueQuagga definiert
export default {
  name: 'App',
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480,
      },
      detecteds: [],
      code: '',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
