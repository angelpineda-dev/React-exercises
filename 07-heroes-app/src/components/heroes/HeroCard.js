import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  fisrt_appearance,
  characters,
}) => {
  return (
    <div className="card col-3 m-3   " style={{ maxWidth: 600 }}>
      <div className="row no-gutters justify-content-center">
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img"
          alt={superhero}
        />

        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && <p>{characters}</p>}
          <p className="card-text">
            <small className="text-muted">{fisrt_appearance}</small>
          </p>

          <Link to={`./hero/${id}`}>Más...</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
