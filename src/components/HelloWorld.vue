<template>
  <div class="hello">
    <h1>Home</h1>
    <a @click="goTodo">Todo</a>
    <br/>
    <a @click="goTodoByName">할일</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  async created() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      if (response.data) {
        const detail = await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(detail);
      }
    } catch (e) {
      console.error("Fail request", e);
    }
  },
  methods: {
    goTodo() {
      this.$router.push({path: "todos"})
    },
    goTodoByName() {
      this.$router.push({name: "Todos"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
