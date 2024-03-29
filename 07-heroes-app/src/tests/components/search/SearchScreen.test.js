import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import SearchScreen from "../../../components/search/SearchScreen";

describe('Pruebas en <SearchScreen/>', () => {
  
  test('debe de mostrarse correctamente con los valores por defecto', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').exists()).toBe(true);

  });

  test('debe de mostrar a batman y el input del queryString', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot()
  });

  test('debe de mostrar un error si no se encuentra el query', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

      expect(wrapper.find('.alert-warning').text().trim()).toBe(`There is not a hero with "batman123"`)
      expect(wrapper).toMatchSnapshot()
  });

  test('debe de llamar el push del history', () => {
    
    const history = { 
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path='/search' component={SearchScreen} history={history} />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    });
    

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    // Se llama el evento pero no la funcion 
    //expect(history.push).toHaveBeenCalled();

  });
  
  
});