import React from "react";
import { GifExpertApp } from "../GifExpertApp";
import { shallow } from "enzyme";

describe("Pruebas en  <GifExpertApp/>", () => {
  let wrapper = shallow(<GifExpertApp />);

  test("Debe mostrar el componente correctamente.", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de categorias", () => {
    let categories = ["Goku", "Seiya"];
    let wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
