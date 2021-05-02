<template>
  <div>
    id: {{currentTodo.id}}
    <h3>{{currentTodo.title}}</h3>


  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default{
  name: 'todoDetail',
  props:['id'],
  methods: mapActions(['fetchTodoDetail']),
  computed: mapGetters(["currentTodo"]),
  watch: {
    id: {
      handler: 'fetchTodoDetail',
      immediate: true
    }
  }

}
</script>
