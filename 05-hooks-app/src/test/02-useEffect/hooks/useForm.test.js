import { useForm } from "../../../components/02-useEffect/hooks/useForm";
import { act, renderHook } from "@testing-library/react-hooks";

describe("Pruebas en useForm", () => {
  const initialState = {
    name: "Angel",
    email: "correo@dorminio.com",
  };

  test("Debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialState));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialState);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe cambiar el valor del formulario (cambiar nombre) ", () => {
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange] = result.current;

    const value = { target: { name: "name", value: "Jesus" } };

    act(() => {
      handleInputChange(value);
    });

    const [values] = result.current;

    expect(values).toEqual({ ...initialState, name: "Jesus" });
  });

  test("Debe reiniciar el valor a sus valores iniciales.", () => {
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange, reset] = result.current;

    const value = { target: { name: "name", value: "Jesús" } };
    act(() => {
      handleInputChange(value);
      reset();
    });

    const [values] = result.current;
    expect(values).toEqual(initialState);
  });
});
