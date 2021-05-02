<template>
  <div>
    <div class="btn-active">
      Hello?
    </div>
    <div>
      <button @click="debounceClick">{{count}}</button>
    </div>
    <div class="btn-active">
      <button class="btn-active" :disabled="!isActive" @click="onClickButton">This is button</button>
    </div>
    <div>
      {{computedTitle}}
    </div>
    <select v-model="selected" >
      <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
        {{ option.text }}
      </option>
    </select>
    <div>{{selected}}</div>

    <div>
      <ul v-for="post in posts" v-bind:key="post.text">
        <li>{{post.text}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import {mapActions, mapState} from "vuex";
export default {
  name: "Test",
  created() {
    console.info('created!')
    this.debounceClick = _.debounce(this.onClick, 500)
    this.fetchPosts()
  },
  unmounted() {
    this.debounceClick.cancel()
    console.info('unmounted')
  },
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: true
    },
    title: {
      type: String,
      required:true
    }
  },
  data() {
    return {
      count: 0,
      debounceClick: undefined,
      selected: 'A',
      options:[
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  },
  methods: {
    onClick() {
      console.info(this)
      console.info('click')
      this.count++
    },
    fetchPosts() {
      this.FETCH_POSTS().then(() => {

      })
    },
    onClickButton() {

    },
    ...mapActions([
      'FETCH_POSTS'
    ])
  },
  computed: {
    computedTitle() {
      return this.title + '  Bye~~'
    },
    ...mapState({
      posts: 'posts'
    })
  }
}
</script>

<Style scoped>

.btn-active {
  color: red;
  border: none;
  background-color: red
}
</Style>
