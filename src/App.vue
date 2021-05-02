<template>
  <div id="app">
<!--    <Test :isActive="isActive" :title="title"></Test>-->
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>
<script>
import Test from "@/components/Test";
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";
import FilterTodos from "@/components/FilterTodos";

export default {
  name: 'App',
  components: {
     Test,
    Todos,
    AddTodo,
    FilterTodos
  },
  data() {
    return {
      isActive: true,
      title: "Paige"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
