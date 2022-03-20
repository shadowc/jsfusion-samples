import { Component } from 'jsfusion/dist/runtime';

export default class Counter extends Component {
    setPropTypes() {
        return {
            count: {
                type: Number,
                defaultValue: 0,
                required: true,
            }
        };
    }

    increment() {
        this.props.count++;
    }
};
