import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import HeroScreen from "../../../components/heroes/HeroScreen";

describe('Pruebas en <HeroScreen/>', () => {

  const history = {
    push: jest.fn(),
    goBack: jest.fn(),
    length: 10
  }


  test('debe mostrar el componente <redirect/> si es que no hay argumentos en el URL', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/hero']} >
      <HeroScreen history={history}/>
    </MemoryRouter>)

    expect(wrapper.find('Redirect').exists()).toBe(true)
  });

  test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/hero/marvel-iron']} >
      <Route path='/hero/:heroId' component={HeroScreen} />
    </MemoryRouter>);

    expect(wrapper.find('.row').exists()).toBe(true)
  });

  test('debe regresar a la pantalla anterior con PUSH', () => {
     const history = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 1
    }

    const wrapper = mount(<MemoryRouter initialEntries={['/hero/marvel-iron']} >
      <Route path='/hero/:heroId' component={(props) => <HeroScreen history={history} /> } />
    </MemoryRouter>);

    wrapper.find('button').prop('onClick')();

    expect(history.push).toHaveBeenCalledWith('/');
    expect(history.goBack).not.toHaveBeenCalled();

  });

  test('debe regresar a la pantalla anterior con goBack', () => {

      const wrapper = mount(<MemoryRouter initialEntries={['/hero/marvel-iron']} >
        <Route path='/hero/:heroId' component={(props) => <HeroScreen history={history} /> } />
      </MemoryRouter>);

      wrapper.find('button').prop('onClick')();

      expect(history.push).not.toHaveBeenCalled()
      expect(history.goBack).toHaveBeenCalled();

  });

  test('debe de hacer Redirect si el heroe no existe.', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/hero/marvel-iron123123']} >
      <Route path='/hero/:heroId' component={(props) => <HeroScreen history={history} /> } />
    </MemoryRouter>);

    expect(wrapper.text()).toBe('');
  })
  
  
});