<template>
   <v-app-bar 
    density="compact"
    elevation="1"
    app
  >
      <v-app-bar-nav-icon @click="handleToggleDrawer"></v-app-bar-nav-icon>
      
      <v-app-bar-title>Vuetify</v-app-bar-title>
  

      <v-spacer></v-spacer>
  
      <v-btn text>Developer</v-btn>
  
      <v-btn class="mr-3" text>Help</v-btn>
  
      <v-divider inset vertical></v-divider>
  
      <v-btn
        v-for="menu in menus"
        :key="menu.path"
        class="mr-4 ml-5"
        color="primary"
        @click="handleRouter(menu.path)"
      >
        <v-icon left :icon="menu.icon" />
        <span>{{menu.text}}</span>
      </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import router from '@/router';
import { LayoutActionTypes } from '@/store/modules/layout/actions';
import { Menu } from '@/types';
import { computed, ComputedRef, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore();
    const menus: ComputedRef<Menu[]> = computed(() => store.state.layout.menus);

    const handleToggleDrawer = () => {
      store.dispatch(`layout/${LayoutActionTypes.TOGGLE_DTAWER}`)
    }

    const handleRouter = (path:string) => {
      console.log("path",path);
      
      router.push({ path:path })
    }

    return {
      menus,
      handleToggleDrawer,
      handleRouter,
    }
  }
})
</script>

<style scoped>

</style>