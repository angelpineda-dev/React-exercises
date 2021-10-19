import React from "react";
import TodoListitem from "../../components/08-useReducer/TodoListitem";
import { shallow } from "enzyme";
import { demoTodos } from "../fixtures/demoTodos";

describe("Pruebas en <TodoListItem/>", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  let wrapper = shallow(
    <TodoListitem
      todo={demoTodos[1]}
      idx={1}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe llamar la función handleDelete", () => {
    wrapper.find("button").simulate("click");

    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id);
  });

  test("Debe llamar la función handleToggle", () => {
    wrapper.find("p").simulate("click");

    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
  });

  test("Debe mostrar el parrafo correctmente.", () => {
    const $p = wrapper.find("p").text().trim();

    expect($p).toBe(`2. ${demoTodos[1].desc}`);
  });

  test("Debe tener la clase complete si el TODO.done = true", () => {
    const todo = demoTodos[0];
    todo.done = true;

    let wrapper = shallow(
      <TodoListitem
        todo={todo}
        idx={1}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
