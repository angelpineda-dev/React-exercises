import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import PrivateRoute from "../../routers/PrivateRoute";

describe('Pruebas en <PrivateRoute/>', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
    const wrapper = mount(
    <MemoryRouter>
      <PrivateRoute isAuth={true} component={ () => <span>Estoy Listo!</span> } {...props} />
    </MemoryRouter>
    
    );

    expect(wrapper.find('span').exists()).toBe(true)
  });

  
  
});