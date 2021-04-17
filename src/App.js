import React, { Component } from 'react';
import Todos from './components/todos/Todos.js'
import Header from './components/layout/Header.js'
import AddTodo from './components/todos/AddTodo.js'
import {v4 as uuid} from "uuid"; 

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
          id: uuid(),
          title: 'Cook dinner',
          completed: false
      },
      {
          id: uuid(),
          title: 'Meet friends for drinks',
          completed: false
      },
      {
          id: uuid(),
          title: 'Clean my room',
          completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
