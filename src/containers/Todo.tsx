import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../modules/action/create'
import TodoList from './TodoList'

interface Props{
  //name:string;
  add(arg0:any):string;
  todos:string[];
} 
interface State {
  name:string;
}
class Todo extends Component<Props , State> {
    constructor(props:any) {
      super(props)
      this.state = {
        name: ''
      };
    }
  
    static defaultProps = {
      todos: []
    }

    register() {
      const { add } = this.props
      add(this.state.name)
      this.setState({ name: '' })
    }
  
    setName(name:string) {
      this.setState({ name: name })
    }
  
    render() {
      const { todos } = this.props
      const { name } = this.state
  
      const Button = () => <button onClick={() => this.register()}>追加</button>
  
      return (
        <Fragment>
          <input
            type="text"
            placeholder="やること"
            value={name}
            onChange={e => this.setName(e.target.value)}
          />
          <Button />
          <TodoList todos={todos} />
        </Fragment>
      )
    }
  }
  
  const mapStateToProps = (state:any) => ({
    todos: state.todoCreate.todos
  })
  
  const mapDispatchToProps = (dispatch:any) => ({
    add: (todo:any) => dispatch(addTodo(todo))
  })

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todo)