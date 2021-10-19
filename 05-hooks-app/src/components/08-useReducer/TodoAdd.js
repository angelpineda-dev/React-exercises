import { useForm } from "../02-useEffect/hooks/useForm";
import { PropTypes } from "prop-types";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h4>Agregar TODO</h4>

      <form onSubmit={handleSubmit}>
        <div className="d-grid">
          <input
            type="text"
            name="description"
            placeholder="Aprender..."
            autoComplete="off"
            className="form-control"
            value={description}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="btn btn-primary mt-1"
            onClick={handleSubmit}
          >
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoAdd;

TodoAdd.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};
