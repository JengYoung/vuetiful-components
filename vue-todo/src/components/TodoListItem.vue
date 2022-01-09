<template>
  <li @click="toggleTodo">
    <span :class="todoItemClass">{{ title }}</span>
    <button @click="removeTodo">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    todoId: String,
    title: String,
    completed: Boolean,
  },
  computed: {
    todoItemClass(): string[] {
      return ['item', ...(this.completed ? ['completed'] : [])];
    },
  },
  methods: {
    removeTodo() {
      this.$emit('update:deleteTodoItem', this.todoId);
    },
    toggleTodo() {
      console.log(this.todoId);
      this.$emit('update:toggle', this.todoId);
    },
  },
});
</script>

<style scoped>
.todo-item {
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
}
</style>
