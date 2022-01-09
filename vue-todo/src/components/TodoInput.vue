<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text" @input="handleInput" />
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  model: {
    prop: 'inputValue',
    event: 'update:inputValue',
  },
  methods: {
    handleInput(e: Event) {
      this.$emit('update:inputValue', (e.target as HTMLInputElement).value);
    },
    addTodo() {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>
