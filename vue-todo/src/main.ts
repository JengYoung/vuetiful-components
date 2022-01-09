import Vue from 'vue';
import App from './App.vue';
/*
 * TODO: 투두 리스트 만들기
 - 1. 할 일 추가
 - 2. 할 일 조회
 - 3. 할 일 삭제
 - 4. 할 일 수정
 */

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
