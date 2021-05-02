<template>
  <div class="hello">
    <h1>Home</h1>
    <a @click="goTodo">Todo</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    let b = {a: '1'}
    let a = {...b};
    console.log(a);
  },
  methods: {
    goTodo() {
      this.$router.push({path: "todos"})
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
