const ADD_TODO = 'TODO/TODO/ADD_TODO'
const UPDATE_TODO = 'TODO/TODO/UPDATE_TODO'
const DELETE_TODO = 'TODO/TODO/DELETE_TODO'

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
      //eslint-disable-next-line
      let todos = [...state.todos]
      //eslint-disable-next-line
      let indexOfUpdate = todos.findIndex(todo => todo.title === action.todo.title)
      todos[indexOfUpdate] = action.todo
      return {
        ...state,
        todos
      }
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => {
          return todo.title !== action.todo.title
        })
      }
    default:
      return state
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo
  }
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    todo
  }
}
