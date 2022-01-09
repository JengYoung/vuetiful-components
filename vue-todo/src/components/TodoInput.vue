<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" :value="inputValue" type="text" @input="handleInput" />
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      inputValue: '',
    };
  },
  model: {
    prop: 'inputValue',
    event: 'update:inputValue',
  },
  methods: {
    handleInput(e: InputEvent) {
      if (!e.target) return;
      this.inputValue = (e.target as HTMLInputElement).value;
      this.$emit('update:inputValue', (e.target as HTMLInputElement).value);
    },
    addTodo() {
      if (!this.inputValue) return;
      this.$emit('update:addTodo');
      this.inputValue = '';
    },
  },
});
</script>

<style scoped></style>
