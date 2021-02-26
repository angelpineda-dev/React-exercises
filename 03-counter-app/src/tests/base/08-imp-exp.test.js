import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", () => {
  test("debe de retornar un heroe con id", () => {
    const id = 1;

    const heroe = getHeroeById(id);

    // console.log(heroe);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe de retornar undefine si el id no existe.", () => {
    const id = 10;

    const heroe = getHeroeById(id);

    // console.log(heroe);

    expect(heroe).toEqual(undefined);
  });

  test("debe de retornar un arreglo con los heroes de DC.", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("debe de retornar el largo de los heroes de Marvel.", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);

    // console.log(heroe);

    expect(heroes.length).toBe(2);
  });
});
