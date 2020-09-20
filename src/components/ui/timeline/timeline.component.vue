<template src="./timeline.component.html"></template>
<style lang="scss" src="./timeline.component.scss"></style>

<script lang="js">

import axios from 'axios'
import Title from '../title/title.component.vue'

  export default  {
    name: 'Timeline',
    props: {
      title: String
    },
    components: {
      Title
    },
    data() {
      return {
          value: [],
          section: this.title, 
          baseUrl: process.env.VUE_APP_BASE_URL,
      }
    },
    created: function(){ // on ready send ajax call
                this.fetchData();
    },
    methods: { 
       fetchData(){
        axios.get('api/timeline/' + this.title + '.json').then(response => {
          this.value = response.data;
        })
      }
    }
}
</script>