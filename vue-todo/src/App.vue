<template>
  <div>
    <header>
      <h1>TS TodoList!</h1>
    </header>
    <TodoInput
      v-model="todoText"
      @update:addTodo="addTodoItem"
      @input="todoText = $event"
    ></TodoInput>
    <article>
      <ul>
        <TodoListItem
          v-for="{ id, title, completed } in todoItems"
          :key="id"
          :todoId="id"
          :title="title"
          :completed="completed"
          @update:deleteTodoItem="deleteTodoItem"
          @update:toggle="toggleTodoItemComplete"
        ></TodoListItem>
      </ul>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
type TodoItems = Todo[];
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
      const id = new Date().toString();
      const value = this.todoText;
      this.todoItems.push({ id, title: value, completed: false });
      storage.save(this.todoItems);
      this.initTodoText();
    },
    deleteTodoItem(todoId: string) {
      this.todoItems = this.todoItems.filter(({ id }) => {
        return id !== todoId;
      });
      storage.save(this.todoItems);
    },
    toggleTodoItemComplete(todoId: string) {
      this.todoItems = this.todoItems.map((todoItem) => {
        return {
          ...todoItem,
          completed: todoItem.id === todoId ? !todoItem.completed : todoItem.completed,
        };
      });
    },
    initTodoText() {
      this.todoText = '';
      console.log('result: ', this.todoText);
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
