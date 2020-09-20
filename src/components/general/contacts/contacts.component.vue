<template src="./contacts.component.html"></template>
<style lang="scss" src="./contacts.component.scss"></style>

<script lang="js">
  import Title from '../../ui/title/title.component.vue'
  import SocialNetworks from '../../ui/socialNetwork/social.component.vue'

  export default  {
    name: 'Contacts',
    components: {
      Title,
      SocialNetworks
    },
    data() {
      return {
        errors:[],
        name:null,
        email:null,
        message:null
      }
    },
    methods:{
      checkForm:function(e) {
        this.errors = [];
        if(!this.name) this.errors.push("Name required.");
        if(!this.email) {
          this.errors.push("Email required.");
        } else if(!this.validEmail(this.email)) {
          this.errors.push("Valid email required.");        
        }
        if(!this.errors.length) return true;
        e.preventDefault();
      },
      validEmail:function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
      }
    }
  }
</script>