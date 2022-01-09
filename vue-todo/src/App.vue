<template>
  <div>
    <header>
      <h1>TS TodoList!</h1>
    </header>
    <TodoInput v-model="todoText" @add="addTodoItem" @input="todoText = $event"></TodoInput>
    <article>
      <ul>
        <TodoListItem
          v-for="(todoItem, index) in todoItems"
          :key="index"
          :idx="index"
          :todoItem="todoItem"
          @update:deleteTodoItem="deleteTodoItem"
        ></TodoListItem>
      </ul>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

type TodoItems = string[];
const STORAGE_TODO_KEY = 'vue-todo';
const storage = {
  save(todoItems: TodoItems) {
    localStorage.setItem(STORAGE_TODO_KEY, JSON.stringify(todoItems));
  },
  fetch() {
    const todos = localStorage.getItem(STORAGE_TODO_KEY) || '[]';
    const result = JSON.parse(todos);
    return result;
  },
};
export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: '',
      todoItems: [] as TodoItems,
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      this.todoItems.push(value);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    deleteTodoItem(idx: number) {
      this.todoItems = this.todoItems.filter((_, index) => {
        return idx !== index;
      });
      storage.save(this.todoItems);
    },
    initTodoText() {
      this.todoText = '';
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
