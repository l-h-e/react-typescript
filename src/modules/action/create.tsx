export const ADD_TODO = 'ADD_TODO'

interface state{}

const initialState:any = {
  todos: []
}

export default function create(state = initialState, action:any) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state
  }
}

export const addTodo = (todo:any) => ({ type: ADD_TODO, payload:todo })