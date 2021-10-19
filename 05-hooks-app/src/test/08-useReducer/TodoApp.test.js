import React from "react";
import TodoApp from "../../components/08-useReducer/TodoApp";
import { mount, shallow } from "enzyme";
//import { demoTodos } from "../fixtures/demoTodos";
//import { act } from "@testing-library/react";

describe("Pruebas en <TodoApp/>", () => {
  test("Debe mostrarse correctamente", () => {
    const wrapper = shallow(<TodoApp />);
  });

  /* 
  // El siguiente test marca un error de memoria ram insuficiente

  test("Debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);

    console.log(wrapper);
  }); */
});
