<template>
  <div id="app">
    <MainPage @upload="uploadData" @download="exportData" @api="testApi"/>
  </div>
</template>

<script>
/* eslint-disable */
import MainPage from './components/HelloWorld.vue';

export default {
  components: { MainPage },
  name: 'App',
  methods: {
    uploadData() {
      this.$parent.uploadData();
    },
    exportData() {
      this.$parent.exportData();
    },
    testApi() {
      this.$parent.testApi();
    }
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
