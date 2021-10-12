import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en el helper getGifs con Fetch", () => {
  test("La petición debe retornar 10 objetos", async () => {
    let gifs = await getGifs("goku");

    expect(gifs.length).toBe(10);
  });

  test("La petición debe retornar un arreglo vacio si no recibe parametro.", async () => {
    let gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
