import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../../components/01-useState/hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("Debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Debe de tener el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test("Debe de incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);
  });

  test("Debe de decrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;

    expect(counter).toBe(99);
  });

  test("Debe reiniciar el valor a su initialState", () => {
    const { result } = renderHook(() => useCounter(50));
    const { reset, increment } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(50);
  });
});
