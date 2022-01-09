<template>
  <li>
    <span>{{ todoItem }}</span>
    <button @click="removeTodo">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    todoItem: String,
    idx: Number,
  },
  methods: {
    removeTodo() {
      console.log('props: this.idx', this.idx);
      this.$emit('update:deleteTodoItem', this.idx);
    },
  },
});
</script>

<style scoped></style>
