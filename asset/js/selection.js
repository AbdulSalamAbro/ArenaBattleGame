import { heroCards, createHeroCard } from './allheroes.js';
import heroes from './data/heroes.js'; 

const selectionPage = document.getElementById('selection');

// Render hero cards
heroes.forEach(hero => {
    const { card } = createHeroCard(hero);
    heroCards.push(card);
    selectionPage.appendChild(card);
});

const selectedCards = [];

// Selection function
function selection() {
    const cards = document.querySelectorAll('.hero-card'); // Assuming there are multiple .hero-card elements
    cards.forEach(card => {
        card.addEventListener('click', () => {
          
            card.classList.toggle('selected'); // Toggle the 'selected' class on click
            if (card.classList.contains('selected')) {
                selectedCards.push(card); // Push the selected card into selectedCards array
            } else {
                const index = selectedCards.indexOf(card);
                if (index !== -1) {
                    selectedCards.splice(index, 1); // Remove the card if deselected
                }
            }
        });
    });
}

// Call selection function after rendering hero cards
selection();
