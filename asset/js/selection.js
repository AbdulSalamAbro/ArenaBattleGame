import { createHeroCard, shuffleArray } from './allheroes.js';
import heroes from './data/heroes.js';
import _configSettings from './config.js';

const selectionPage = document.getElementById('selection');
const opponentPage = document.getElementById('opponent-cards');
const heroesDiv = document.getElementById('heroes');
const progressBar = document.getElementById('progress-bar');
const costProgress = document.getElementById('cost-progress');
const priorityProgress = document.getElementById('priority-progress');
const costProgressCount = document.getElementById('cost-progress-count');
const priorityProgressCount = document.getElementById('priority-progress-count');
const selectedCardsCount = document.getElementById('total-amount');
const selectedCardsContainer = document.getElementById('heroes');
const startBattleButton = document.getElementById('start-battle');


let battleCards = [];
export let selectedCards = [];
let totalCost = 0;
let totalPriority = 0;

heroes.forEach(hero => {
    const { card, priorityValue, costValue, defenseValue, attackValue } = createHeroCard(hero);

    card.classList.add('battle-card');
    battleCards.push({ card, priorityValue, costValue, defenseValue, attackValue });
});

shuffleArray(battleCards);

battleCards.forEach(cardData => {
    selectionPage.appendChild(cardData.card);
});

shuffleArray(battleCards);

opponentPage.innerHTML = '';
export const opponentCards = battleCards.slice(0, 5);
opponentCards.forEach(cardObj => {
    opponentPage.appendChild(cardObj.card);
});

function selection() {
    const battleCardsDivs = document.querySelectorAll('.battle-card');
    battleCardsDivs.forEach(battleCardDiv => {
        const { costValue, priorityValue, attackValue, defenseValue } = battleCards.find(cardData => cardData.card === battleCardDiv);

        battleCardDiv.addEventListener('click', () => {
            handleCardSelection(battleCardDiv, costValue, priorityValue, attackValue, defenseValue);
        });
    });
}

function handleCardSelection(card, costValue, priorityValue, attackValue, defenseValue) {
    if (!card.classList.contains('selected')) {
        if (selectedCards.length < _configSettings.amount &&
            (totalCost + costValue <= _configSettings.totalCost) &&
            (totalPriority + priorityValue <= _configSettings.totalPriority)) {
            selectedCards.push({ card, costValue, priorityValue, attackValue, defenseValue });
            totalCost += costValue;
            totalPriority += priorityValue;
            card.classList.add('selected');
        } else {
            alert(`You can choose only ${_configSettings.amount} cards, and the total cost must not exceed ${_configSettings.totalCost} and total priority must not exceed ${_configSettings.totalPriority}.`);
        }
    } else {
        selectedCards = selectedCards.filter(selectedCard => selectedCard.card !== card);
        totalCost -= costValue;
        totalPriority -= priorityValue;
        card.classList.remove('selected');
    }

    statistics();
}

function statistics() {
    progressBar.style.width = (selectedCards.length / _configSettings.amount * 100) + '%';
    costProgress.style.width = (totalCost / _configSettings.totalCost * 100) + '%';
    priorityProgress.style.width = (totalPriority / _configSettings.totalPriority * 100) + '%';

    costProgressCount.innerText = `${totalCost}/${_configSettings.totalCost}`;
    priorityProgressCount.innerText = `${totalPriority}/${_configSettings.totalPriority}`;
    selectedCardsCount.innerText = `${selectedCards.length}/${_configSettings.amount}`;

    displaySelectedCards(selectedCards.map(item => item.card));
}

function displaySelectedCards(selectedCards) {
    selectedCardsContainer.innerHTML = '';

    selectedCards.forEach(card => {
        const selectedCardClone = card.cloneNode(true);
        selectedCardClone.classList.remove('selected-card');
        heroesDiv.appendChild(selectedCardClone);
    });
}

selection();


