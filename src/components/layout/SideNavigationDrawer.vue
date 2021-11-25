<template>
  <v-navigation-drawer 
    v-model="drawer"
    app
  >

  <v-list>
        <v-list-item link class="d-flex justify-space-between pa-0">
          <v-list-item-content >
            <v-list-item-title class="text-h5">
              Vuetify
            </v-list-item-title>
            <v-list-item-subtitle>ben@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <side-navigation-toggle-button />
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

     <v-list
          nav
          dense
        >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="(item, i) in menus"
            :key="i"
          >
            <v-list-item-icon class="mx-3">
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title >{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

     
        </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Menu } from '@/types';
import { computed, ComputedRef, defineComponent, ref } from 'vue'
import { useStore } from 'vuex';
import SideNavigationToggleButton from './SideNavigationToggleButton.vue';

export default defineComponent({
  components: { SideNavigationToggleButton },
  setup () {
    const store = useStore();

    const drawer = computed(() => store.state.layout.drawer);
    
    const menus: ComputedRef<Menu[]> = computed(() => store.state.layout.menus);
    
    const selectedItem = ref(0); 

    

    return {
      drawer,
      menus,
      selectedItem,
    }
  }
})
</script>

<style scoped>

</style>