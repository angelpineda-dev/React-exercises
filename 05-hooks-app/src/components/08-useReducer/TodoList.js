import TodoListitem from "./TodoListitem";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => {
        return (
          <TodoListitem
            key={todo.id}
            todo={todo}
            idx={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
