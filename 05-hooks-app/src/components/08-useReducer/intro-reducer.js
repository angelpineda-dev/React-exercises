/* Estado inicial del reducer */
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];
/* Reducer */
/* Recibe un estado y las acciones. */

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

/* Las acciones son simples objetos que se acostumbra tener como propiedad 'type',  el cual le indica tipo de accion a realizar. */

/* payload, es una propiedad estandar que nos indica el valor que recibe una accion en caso de necesitarlo. */

const action = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
