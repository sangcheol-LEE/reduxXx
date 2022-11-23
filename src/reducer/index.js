import {ADD, DELETE} from "../action/index"

export const initialState = {
  todo: []
}

const reducer = (state = initialState , action) => {
  switch(action.type) {
    case ADD :
      return {
        ...state,
        todo: [...state.todo, {type : action.data, id: Date.now()}]
      }

    case DELETE :
      return {
        ...state,
        todo: state.todo.filter(item => item.id !== action.id )
      }

    default :
      return state
  }
}

export default reducer