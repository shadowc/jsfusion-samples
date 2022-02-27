import { Component } from 'jsfusion/dist/runtime';

export default class Counter extends Component {
    setPropTypes() {
        this.propTypes = {
            count: {
                type: Number,
                defaultValue: 0,
                required: true,
            }
        };
    }
};
