import { heroCards, createHeroCard, shuffleArray } from './allheroes.js';
import heroes from './data/heroes.js';

const selectionPage = document.getElementById('selection');
const opponentPage = document.getElementById('opponent-cards');
const selectedCards = [];
let opponentCards = [];

// Render hero cards
heroes.forEach(hero => {
    const { card } = createHeroCard(hero);
    heroCards.push(card);
    selectionPage.appendChild(card);
    card.classList.add('selected-cards');
});

// Function to handle card selection
function selection() {
    const cards = document.querySelectorAll('.hero-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('selected');

            if (card.classList.contains('selected')) {
                selectedCards.push(card);
            } else {
                const index = selectedCards.indexOf(card);
                if (index !== -1) {
                    selectedCards.splice(index, 1);
                }
            }
        });
    });
}
selection();

// Function to create opponent's team
function opponentTeam() {
    shuffleArray(heroCards);
    opponentCards = heroCards.slice(0, 5);
    opponentCards.forEach(card => {
        opponentPage.appendChild(card);
    });
}
opponentTeam();
