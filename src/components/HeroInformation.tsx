import { HeroType } from './heroes';

export const HeroInformation = ({ hero }: { hero: HeroType }) => {
  return (
    <div>
      <h1>{hero.name}</h1>
      <ul>
        <li>{hero.intelligence}</li>
        <li>{hero.alignment}</li>
        <li>{hero.strength}</li>
        <li>{hero.speed}</li>
        <li>{hero.durability}</li>
        <li>{hero.power}</li>
        <li>{hero.combat}</li>
        <li>{hero.total}</li>
      </ul>
    </div>
  );
};
