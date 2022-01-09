<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text" :value="todoText" @input="handleInput" />
    <button @click="addTodo">add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['todoText'],
  methods: {
    handleInput(e: Event) {
      this.$emit('updateTodoText', (e.target as HTMLInputElement).value);
    },
    addTodo() {
      console.log('add');
    },
  },
});
</script>

<style scoped></style>
