import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe retornar el estado inicial", async () => {
    let { result, waitForNextUpdate } = renderHook(() => useFetchGifs("goku"));
    let { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe de retornar un arreglo de imagenes y el loading en false", async () => {
    let { result, waitForNextUpdate } = renderHook(() => useFetchGifs("goku"));

    await waitForNextUpdate();

    let { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});
