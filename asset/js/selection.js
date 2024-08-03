
import { heroCards, createHeroCard } from './allheroes.js';
import heroes from './data/heroes.js'; 

const selectionPage = document.getElementById('selection')

//render battle hero list
heroes.forEach(hero => {
    const { card } = createHeroCard(hero);
    heroCards.push(card);
    selectionPage.appendChild(card);
  });