<template>
  <div id="app">
    <MainPage
      @upload="uploadData"
      @download="exportData"
      @apiPost="testApiPost"
      @apiGet="testApiGet"
    />
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
    testApiPost() {
      this.$parent.testApiPost();
    },
    testApiGet() {
      this.$parent.testApiGet();
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
