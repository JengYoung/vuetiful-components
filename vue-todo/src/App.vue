<template>
  <div>
    <h1>TodoList + TypeScript</h1>
    <TodoInput v-model="todoText" @add="addTodoItem" @input="todoText = $event"></TodoInput>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = '';
    },
  },
});
</script>

<style scoped></style>
