<template src="./social.component.html"></template>
<style lang="scss" src="./social.component.scss"></style>

<script lang="js">
  import axios from 'axios'

  export default  {
    name: 'SocialNetworks',
    data() {
      return {
          social: [],
          baseUrl: process.env.VUE_APP_BASE_URL,
      }
    },
    created: function() {
      this.fetchData();
    },
    methods: { 
       fetchData(){
        axios.get('api/info/socialNetwork.json').then(response => {
          this.social = response.data;
        })
      }
    }
}
</script>