import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { shallow } from "enzyme";
import { useFetch } from "../../../components/03-examples/hooks/useFetch";
import { useCounter } from "../../../components/01-useState/hooks/useCounter";

jest.mock("../../../components/03-examples/hooks/useFetch");
jest.mock("../../../components/01-useState/hooks/useCounter");

describe("Pruebas en <MultipleCustomHook/>", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  test("Debe mostar el componente correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loagin: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la información", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Angel",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-3").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Angel");
  });
});
