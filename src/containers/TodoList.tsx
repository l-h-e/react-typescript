import React from 'react'
import styled from 'styled-components'

interface Props{
  todos:string[]
}

const TodoList = (props:any) => {
  //let id:number = 1
  return (
      <Wrapper>
      {props.todos.map((todo:string,id:number) => (
        <Card key={id}>{id=id+1}:{todo}</Card>
      ))}</Wrapper>
      )
}

TodoList.defaultProps = {
  todos: []
}

export default TodoList

const Wrapper = styled.div`
  margin-top 30px;
  height: 500px;
`
const Card = styled.div`
  margin-left: 3px;
  padding: 8px;
  background-color:#d590bc;
`