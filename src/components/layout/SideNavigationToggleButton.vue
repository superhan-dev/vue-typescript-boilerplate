<template>
   <v-btn
      class="mx-2"
      icon="mdi-chevron-left"
      small
      flat
      @click="handleToggleDrawer"
    />
</template>

<script lang="ts">
import { LayoutActionTypes } from '@/store/modules/layout/actions';
import { defineComponent } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({

  setup () {
    const store = useStore();

    const handleToggleDrawer = () => {
      store.dispatch(`layout/${LayoutActionTypes.TOGGLE_DTAWER}`)
    }


    return {
      handleToggleDrawer
    }
  }
})
</script>

<style scoped>

</style>