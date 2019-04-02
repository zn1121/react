
import React, { Component } from 'react'
import store from './store';
// import { add_todo } from './actions/index';
// import { connect } from 'react-redux';

export default class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            list:store.getState().todolist.list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todolist.list
            })
        })
    }
    handleAdd = (e)=>{
        if(e.keyCode===13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            });
            e.target.value="";
        }
    }
    handledel = (e)=>{
        
            store.dispatch({
                type:'del_item',
                value:e
            });
        
    }
    render(){
        return(
            <div>
                <input onKeyDown={this.handleAdd} type="text"/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item}
                                <button className="but" onClick={(e)=>{this.handledel({index})}}>删除</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}