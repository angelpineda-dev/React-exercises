describe("Pruebas en el archivo demo.test.js", () => {
  test("Los strings deben ser iguales", () => {
    // 1. Inicializacion
    const mensaje = "Hola mundo";

    //2. estimulo
    const mensaje2 = `Hola mundo`;

    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
