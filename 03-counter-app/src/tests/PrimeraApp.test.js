import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  // test('Debe mostrar el mensaje "Hola, soy Goku"', () => {
  //   const saludo = "Hola, soy Goku";
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test("Debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";
    const subtitulo = "Soy un subtitulo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoSubtitulo = wrapper.find("h2").text();
    // console.log(textoSubtitulo);

    expect(textoSubtitulo).toBe(subtitulo);
  });
});
