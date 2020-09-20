<template src="./about.component.html"></template>
<style lang="scss" src="./about.component.scss"></style>

<script lang="js">

import axios from 'axios'

  export default  {
    name: 'AboutMe',
    data() {
      return {
          about: [],
          baseUrl: process.env.VUE_APP_BASE_URL
      }
    },
    created: function(){ // on ready send ajax call
      this.fetchData();
    },
    methods: {
       fetchData(){
        axios.get('api/info/aboutMe.json').then(response => {
          this.about = response.data;
        })
      }
    }
}
</script>