<template>
  <v-container>
    <v-btn  @click="handleSort('title')">order by title</v-btn>
    <v-btn class="mx-3" @click="handleSort('location')">order by location</v-btn>
    <v-btn @click="handleSort('salary')">order by salary</v-btn>
    <job-list :jobs="jobs" :order="order" />
  </v-container>
</template>

<script lang="ts">
import JobList from '@/components/todo/JobList.vue'
import { defineComponent, reactive, ref, toRefs } from 'vue'
import {Job, OrderTerm} from '@/types'

export default defineComponent({
  components: { JobList },
  setup () {
    const state = reactive({
      name: 'Link' as string,
      age: 0 as number ,
      jobs: [
        {title:'farm worker',service:"test", location:'lon lon ranch', salary:30000, id:'1'},
        {title:'hospital worker', location:'lon lon ranch', salary:40000, id:'2'},
        {title:'nurse', location:'lon lon ranch', salary:80000, id:'3'},
        {title:'doctor', location:'lon lon ranch', salary:1000000, id:'4'},
        {title:'patiant', location:'lon lon ranch', salary:200000, id:'5'},
      ] as Job[]
    })

    let order = ref<OrderTerm>('title')

    const handleSort = (orderBy:OrderTerm) => {
      order.value = orderBy;
    }

    return {
      ...toRefs(state),
      handleSort,
      order
    }
  }
})
</script>

<style scoped>

</style>