import React from "react";
import { AddCategory } from "../../Components/AddCategory";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    let input = wrapper.find("input");
    let value = "Hola Mundo";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("NO debe postear la información con el submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    /* 
      1. simular el inputChange 
      2. simular el submit
      3. setCategories debe de haberse llamado
      4. el valor del input debe de estar ''
    */

    let input = wrapper.find("input");
    let value = "Goku";

    input.simulate("change", { target: { value } });

    // Probando que contenga el valor
    // expect(wrapper.find("p").text().trim()).toBe(value);

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // Comprobando que se haya llamado el evento submit.
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
