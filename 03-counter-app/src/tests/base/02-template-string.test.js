import "@testing-library/jest-dom";
import { getSaludo } from "../../bases/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("prueba en el metodo getSaludo", () => {
    const nombre = "Angel";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  //getSaludo debe de retornar Hola Stranger! si no hay argumento
  test(`should getSaludo return "Hola Extraño" if it dosen't have any arguments `, () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Extraño");
  });
});
