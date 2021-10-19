import HomeScreen from "../../components/09-useContext/HomeScreen";
import { UserContext } from "../../components/09-useContext/UserContext";
import { mount } from "enzyme";

describe("Pruebas en <HomeScreen/>", () => {
  const user = {
    name: "Angel",
    email: "email@domain.com",
  };

  test("Debe de mostrar el componente correctamente", () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user }}>
        <HomeScreen />
      </UserContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
