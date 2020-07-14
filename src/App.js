import React,{Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  addTodo = () => {
    if(!this.state.newTodo) return;
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({
      todos: todos
    })
    this.setState({
      newTodo: ""
    })
  }

  deleteTodo = (i) => {
    const todos = this.state.todos;
    todos.splice(i, 1);
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
      <h2>My Todo</h2>
      <input value={this.state.newTodo} onChange={this.handleChange} placeholder="Input here..." />
      <button onClick={this.addTodo}>ADD</button>
      <h2>Todo List</h2>
      <ul>
        {this.state.todos.map((todo, i) => (
          <li key={i}>{todo} <button onClick={this.deleteTodo}>DELETE</button></li>
        ))}
      </ul>
    </div>
    );
  }
}

export default App;
