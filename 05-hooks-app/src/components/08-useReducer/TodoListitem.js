import PropTypes from "prop-types";

const TodoListItem = ({ todo, idx, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {idx + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
