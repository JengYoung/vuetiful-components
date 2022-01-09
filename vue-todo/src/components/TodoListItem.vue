<template>
  <li>
    <template v-if="showTitle">
      <span :class="todoItemClass" @click="toggleTodo">{{ title }}</span>
      <button @click="changeShowTitle">수정</button>
      <button @click="removeTodo">삭제</button>
    </template>
    <template v-else>
      <input type="text" v-model="defaultTitle" />
      <button @click="updateTodo">수정 완료</button>
      <button @click="cancelTodo">취소</button>
    </template>
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
  data: function () {
    return {
      defaultTitle: '',
      showTitle: true,
    };
  },
  computed: {
    todoItemClass(): string[] {
      return ['item', ...(this.completed ? ['completed'] : [])];
    },
  },
  methods: {
    changeShowTitle() {
      this.showTitle = !this.showTitle;
    },
    removeTodo() {
      this.$emit('update:deleteTodoItem', this.todoId);
    },
    toggleTodo() {
      this.$emit('update:toggle', this.todoId);
    },
    updateTodo() {
      this.$emit('update:updateTodo', this.todoId, this.defaultTitle);
      this.changeShowTitle();
    },
    cancelTodo() {
      this.defaultTitle = this.title;
      this.changeShowTitle();
    },
  },
  created() {
    this.defaultTitle = this.title;
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
