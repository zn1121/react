import React, { Component } from 'react';
import store from './store';

export default class counter extends Component {
    constructor() {
        super();
        this.state = {
            num: store.getState().sum

        }
        store.subscribe(() => {
            this.setState({
                num: store.getState().sum
            })
        })
    }
    handleAdd = () => {
        store.dispatch({ type: 'add' })
    }
    handleJian = () => {
        store.dispatch({ type: 'jian' })
    }

    render() {
        return (
            <div>

                <span>{this.state.num}</span>
                <button onClick={this.handleAdd} className="but">+</button>
                <button onClick={this.handleJian} className="but">-</button>
                {/* <button onClick={this.handleOdd}>Increment if odd</button>
                <button onClick={this.handleAsync}>Increment async</button> */}

            </div>
        );
    }
}


