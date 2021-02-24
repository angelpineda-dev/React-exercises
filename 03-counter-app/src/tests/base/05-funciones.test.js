import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("should return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  //getUserioActivo debe retornar un objeto
  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Juan",
      user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
