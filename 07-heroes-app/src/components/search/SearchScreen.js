import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import { useLocation } from "react-router";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from "react";
import "animate.css";

const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [{ searchText }, handleInputChange] = useForm({ searchText: q });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchText"
              value={searchText}
              placeholder="Find your hero"
              className="form-control"
              onChange={handleInputChange}
            />
            <input
              type="submit"
              value="Search..."
              className="btn btn-outline-primary mt-2"
            />
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {!q && <div className="alert alert-info">Search a Hero</div>}

          {q && heroesFiltered.length < 1 && (
            <div className="alert alert-warning">
              There is not a hero with "{q}"
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
