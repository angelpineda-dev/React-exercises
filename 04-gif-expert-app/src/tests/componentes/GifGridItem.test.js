import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGridItem } from "../../Components/GifGridItem";

describe("Pruebes en <GifGridItem />", () => {
  const title = "Un título";
  const url = "https://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el componente GifGridItem correctamente.", () => {
    /* ¿Cómo generar una snapshot?
      - Las snapshot (capturas) son utiles para grabar el contenido de un componente y 
      buscar que este contenido coincida con el contenido actual.
    */
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el titulo dentro del parrafo", () => {
    /* find()  funciona con cualquier selector de CSS, como document.querySelector() */
    let p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("La imagen debe contener las propiedades src y alt", () => {
    let img = wrapper.find("img");

    /* Existen 2 formas para evaluar las propiedades con ayuda de Enzyme
      - Acceder a la propiedad especifica con "prop".
      - Mostrar todas las propiedades "props" y acceder mediante la notación de punto.
    */

    expect(img.prop("src")).toContain("https://");
    expect(img.props().alt).toBe(title);
  });

  test("El elemento 'div' debe contener la clase 'animate__fadeIn' ", () => {
    /* Revisar que un elemento contenga una clase  */

    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
