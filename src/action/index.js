export const ADD = "ADD"
export const DELETE = "DELETE"

export const addTodo = (data,) => {
  return {
    type: "ADD",
    data,
  }
}

export const deleteTodo = (id) => {
  return {
    type : "DELETE",
    id
  }
}