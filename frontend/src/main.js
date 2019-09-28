// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
/* eslint-disable */
Vue.config.productionTip = false;

const Tabulator = require('tabulator-tables');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    uploadData(){
      this.tabulator.setDataFromLocalFile()
    },
  },
  mounted(){
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator('#table-test', {
      reactiveData:true, //enable data reactivity
      columns:[ //Define Table Columns
        {title:"Name", field:"name", width:150},
        {title:"Age", field:"age", align:"left", formatter:"progress"},
        {title:"Favourite Color", field:"col"},
        {title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},
      ],
    });
  },
});
