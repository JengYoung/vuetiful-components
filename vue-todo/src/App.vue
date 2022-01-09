<template>
  <div>
    <h1>TodoList + TypeScript</h1>
    <TodoInput :todoText="todoText" @updateTodoText="updateTodoText"></TodoInput>
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
      console.log('value: ', value);
      this.todoText = value;
    },
  },
});
</script>

<style scoped></style>
