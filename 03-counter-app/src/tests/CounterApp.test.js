import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";

describe("Pruebas para <CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar titulos y botones del <CounterApp/>", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial en 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const valueContainer = wrapper.find("h2").text().trim();
    // console.log(valueContainer);
    expect(valueContainer).toBe("100");
  });

  test("Debe de decrementar con el boton -1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("9");
  });

  test("Debe de incrementar con el boton +1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("11");
  });

  test("Debe de colocar el valor por defecto con el valor btn reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    console.log(counterText);

    expect(counterText).toBe("105");
  });
});
