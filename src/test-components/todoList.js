import { Component } from 'jsfusion/dist/runtime';

export default class Counter extends Component {
    todoListItems = [];

    onCreated() {
        this.renderTodoListItems();
    }

    /**
     * @param {MouseEvent} event
     */
    addTodo(event) {
        event.preventDefault();

        if (this.refs.newTodo.value.trim() !== '') {
            this.todoListItems.push({
                checked: false,
                label: this.refs.newTodo.value.trim(),
            });
        }

        this.refs.newTodo.value = '';
        this.renderTodoListItems();
    }

    renderTodoListItems() {
        let innerHTML = '';

        this.todoListItems.forEach((item, index) => {
            innerHTML += `
                <li class="list-group-item">
                    <input id="item-${index}" type="checkbox" ${item.checked ? 'checked' : ''}>
                    <label for="item-${index}">${item.label}</label>
                </li>
            `;
        });

        this.refs.todos.innerHTML = innerHTML;
    }
}