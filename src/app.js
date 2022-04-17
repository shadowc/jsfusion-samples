import { Runtime } from 'jsfusion/dist/runtime';
import Counter from './test-components/counter';
import TodoList from './test-components/todoList';
import CounterList from './test-components/counterList';

const JsFusion = new Runtime();
JsFusion.registerComponent('counter', Counter);
JsFusion.registerComponent('counterList', CounterList);
JsFusion.registerComponent('todoList', TodoList);
JsFusion.start();
