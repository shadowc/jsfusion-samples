import { Runtime } from 'jsfusion/dist/runtime';
import Counter from './test-components/counter';
import TodoList from './test-components/todoList';

const JsFusion = new Runtime();
JsFusion.registerComponent('counter', Counter);
JsFusion.registerComponent('todoList', TodoList);
JsFusion.start();

console.log(JsFusion);
