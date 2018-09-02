import React from "react";

const Todos = ({todos, deleteTodo}) => {
  
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-item" key={todo.id}>
          <button onClick={() => {
            deleteTodo(todo.id)}
          } > 🗑  </button>{todo.content}

        </div>
      )
    })
  ) : (
    <p>You have no todo's left.</p>
  )

  return (
    <div className="todos">
      {todoList}
    </div>
  )
};
export default Todos;