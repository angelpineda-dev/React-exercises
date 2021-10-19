import RealExampleRef from "../../components/04-useRef/RealExampleRef";
import { shallow } from "enzyme";

describe("Pruebas en <RealExampleRef/>", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("Debe mostrarse correctamente. ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el componente <MultipleCustomHooks/>", () => {
    const btn = wrapper.find("button");

    btn.simulate("click");

    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
