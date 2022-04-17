import { Component } from 'jsfusion/dist/runtime';

export default class extends Component {
    /**
     * @param {MouseEvent} event
     */
    addCounter(event) {
        event.preventDefault();

        const li = document.createElement('li');
        li.setAttribute('data-component', 'counter');
        li.setAttribute('data-props', 'count: 0');
        li.className = 'list-group-item';

        li.innerHTML = `Count: <span class="fw-bold" data-bind="text:counter.count"></span>
            <a href="#" class="btn btn-sm btn-primary" data-on="click:counter.increment">Increment</a>
            <a href="#" class="btn btn-sm btn-danger" title="Delete Counter" data-on="click:counterList.deleteCounter">X</a>`;

        this.refs.counters.appendChild(li);
    }

    /**
     * @param {MouseEvent} event
     */
    deleteCounter(event) {
        event.preventDefault();
        this.refs.counters.removeChild(event.target.parentNode);
    }
}
