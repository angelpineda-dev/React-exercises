import { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroesById } from "../../selectors/getHeroesById";

const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroesById(heroId), [heroId]);

  if (hero.length < 1) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero[0];

  return (
    <div className="row mt-5">
      <div className="col-6">
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-6">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: </b> {alter_ego}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: </b> {publisher}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First appearance: </b> {first_appearance}{" "}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          {" "}
          Return{" "}
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
