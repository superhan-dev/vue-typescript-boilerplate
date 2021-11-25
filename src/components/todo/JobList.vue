<template>
  <div>
    <p>Sort By {{order}}</p>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <h2>{{job.title}}</h2>
        <div class="salary">
          <p>{{job.salary}} rupees</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ducimus sequi voluptate aut architecto amet, nemo quo provident nulla. Obcaecati sequi natus quos qui? Voluptate, eligendi! Provident eos illum inventore.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Job,OrderTerm } from '@/types'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    jobs:{
      required:true,
      type: Array as PropType<Job[]>
    },
    order:{
      required:true,
      type: String as PropType<OrderTerm> 
    }
  },
  setup (props) {
    // const sortedJobs = computed(() => {
    //   // props.jobs을 직접 사용하면 jobs배열에 직접 변경을 주기 때문에 
    //   // spread 문법으로 복사하여 정의한다.
    //   return [...props.jobs].sort((a:Job,b:Job) => {
    //     return a[props.order] > b[props.order] ? 1 : -1;
    //   })
    // })

    return {
      // sortedJobs
    }
  }
})
</script>

<style scoped>

</style>