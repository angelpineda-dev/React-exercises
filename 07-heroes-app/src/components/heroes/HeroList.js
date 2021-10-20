import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHerosByPublisher";
import HeroCard from "./HeroCard";
import "animate.css";

const HeroList = (publisher) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="row justify-content-center">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default HeroList;
