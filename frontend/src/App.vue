<template>
  <div id="app">
    <MainPage @test="uploadData"/>
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
