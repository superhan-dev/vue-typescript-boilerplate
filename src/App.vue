<template>
  <v-app>
    <side-navigation-drawer/>

    <header-app-bar />

    <v-main class="main-container">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from './components/layout/Footer.vue'
import HeaderAppBar from './components/layout/HeaderAppBar.vue'
import SideNavigationDrawer from './components/layout/SideNavigationDrawer.vue'

export default defineComponent({
  components: { SideNavigationDrawer, HeaderAppBar, Footer },
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>

<style scoped>
  .main-container {
    height:100%
  }
</style>