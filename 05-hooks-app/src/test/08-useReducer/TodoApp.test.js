import React from "react";
import TodoApp from "../../components/08-useReducer/TodoApp";
import { mount, shallow } from "enzyme";
import { demoTodos } from "../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe("Pruebas en <TodoApp/>", () => {
  Storage.prototype.setItem = jest.fn(() => {});
  const wrapper = shallow(<TodoApp />);

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
    });

    expect(wrapper.find("h2").text().trim()).toBe("Todo App ( 2 )");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("debe eleminar un TODO", () => {
    const wrapper = mount(<TodoApp />);

    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);

    expect(wrapper.find("h2").text().trim()).toBe("Todo App ( 0 )");
  });
});
