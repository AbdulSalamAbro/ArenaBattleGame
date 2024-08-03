import { heroCards, createHeroCard } from './allheroes.js';
import heroes from './data/heroes.js'; 

const battleList = document.getElementById('heroes-battle-list');

battleList.innerHTML = '';

heroes.forEach(hero => {
  const { card } = createHeroCard(hero);
  heroCards.push(card);
  battleList.appendChild(card);
});
