import React from 'react';
import './App.css';
import './component/heroes.css';
import Heroes from './component/heroes';
import { superHeroesJSON } from './component/superHeroesJSON.js';

const superHeroes = JSON.parse(superHeroesJSON);

function App() {
  return (
    <div className="App">
      <h1>Супергерои</h1>
      {
        superHeroes.map((hero) => 
        <Heroes url={hero.image} name={hero.name} university={hero.university} alterEgo={hero.alterEgo} work={hero.work} friends={hero.friends} superPowers={hero.superPowers} description={hero.description} />
        )
      }
    </div>
  );
}

export default App;
