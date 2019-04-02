import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import TodoList from './TodoList';
import Counter from './counter';
// import App from './App';
// import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
// import AuthExample from './auth/AuthExample';
ReactDOM.render(<div>
    <Counter/>
    <TodoList/>
</div>,document.getElementById('root'));


/*
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)
*/
