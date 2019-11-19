import { ADD_TODO } from '../types'

const INITIAL_STATE = {
  todo: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: action.payload
      }
    default:
      return state
  }
}
