import { retornaArreglo } from "../../bases/07-deses-arr";

describe("pruebas en desestructuracion", () => {
  test("debe de retornar un string y un boolean.", () => {
    const [letras, numeros] = retornaArreglo(); //[ABC, 123]

    // expect(arr).toEqual(["ABC", 123]);

    // console.log(typeof letras, typeof numeros);

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
