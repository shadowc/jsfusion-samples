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
                    <input id="item-${index}" type="checkbox" ${item.checked ? 'checked' : ''} data-on="click:todoList.checkItem">
                    <label for="item-${index}">${item.label}</label>
                    <a href="#" title="Delte Item" data-on="click:todoList.deleteItem" data-item-index="${index}">X</a>
                </li>
            `;
        });

        this.refs.todos.innerHTML = innerHTML;
    }

    /**
     * @param {MouseEvent} event
     */
    checkItem(event) {
        const index = Number(event.target.id.split('-')[1]);

        this.todoListItems[index].checked = event.target.checked;
    }

    /**
     * @param {MouseEvent} event
     */
    deleteItem(event) {
        const index = Number(event.target.dataset.itemIndex);

        this.todoListItems.splice(index, 1);

        this.renderTodoListItems();
    }
}