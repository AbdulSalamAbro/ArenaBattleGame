import { createHeroCard, shuffleArray } from './allheroes.js';
import heroes from './data/heroes.js';

const selectionPage = document.getElementById('selection');
const opponentPage = document.getElementById('opponent-cards');
let battleCards = [];

heroes.forEach(hero => {
    const { card, priorityValue, costValue, defenseValue, attackValue } = createHeroCard(hero);

    selectionPage.appendChild(card);

    card.classList.add('selected-cards');
    battleCards.push({ card, priorityValue, costValue, defenseValue, attackValue });
    console.log(battleCards);
});

shuffleArray(battleCards);

opponentPage.innerHTML = '';
const opponentCards = battleCards.slice(0, 5);
opponentCards.forEach(cardObj => {
    opponentPage.appendChild(cardObj.card);
});
