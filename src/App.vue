<template>
  <div id="page" class="col-lg-8 offset-lg-2">
    <Menu></Menu>
    <AboutMe></AboutMe> 
    <SocialNetworks></SocialNetworks> 
    <Timeline title="work"></Timeline>
    <Timeline title="education"></Timeline>
    <Contacts></Contacts>
  </div>
</template>

<script>
import Menu from './components/general/menu/menu.component.vue'
import AboutMe from './components/general/about-me/about.component.vue'
import Timeline from './components/ui/timeline/timeline.component.vue'
import SocialNetworks from './components/ui/socialNetwork/social.component.vue'
import Contacts from './components/general/contacts/contacts.component.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Menu,
    AboutMe,
    SocialNetworks,
    Timeline,
    Contacts
  }
}
</script>
