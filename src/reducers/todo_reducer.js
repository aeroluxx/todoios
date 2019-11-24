const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const DELETE_TODO = 'DELETE_TODO'

const initialState = {
  todos: []
}

export default function todo_reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.todo]
      }
    case UPDATE_TODO:
      return {
        todos: state.todos.map(todo => {
          return todo.index === action.todo.index
            ? {
              ...todo,
              done: !todo.done
            }
            : {
              ...todo,
              done: todo.done
            }
        })
      }
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => {
          return todo.index !== action.todo.index
        })
      }
    default:
      return state
  }
}
