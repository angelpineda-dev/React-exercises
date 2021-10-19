import HookApp from "../HookApp";
import { shallow } from "enzyme";

describe("Pruebas en <HookApp/>", () => {
  const wrapper = shallow(<HookApp />);

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
