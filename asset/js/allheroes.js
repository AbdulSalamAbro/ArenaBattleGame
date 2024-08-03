import heroes from './data/heroes.js';
import _configSettings from './config.js';

const heroesList = document.querySelector('.heroes-list');
export const heroCards = [];

// Create Hero Card Function
export function createHeroCard(hero) {
  // Create the card element
  const card = document.createElement('div');
  card.className = 'hero-card';

  // Create the first div: Name and Cost
  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';
  const nameDiv = document.createElement('div');
  nameDiv.className = 'hero-name';
  nameDiv.textContent = hero.name;
  const costDiv = document.createElement('div');
  costDiv.className = 'hero-cost';
  const defenseValue = Math.ceil((hero.powerstats.intelligence + hero.powerstats.durability + hero.powerstats.speed) / 30);
  const attackValue = Math.ceil((hero.powerstats.strength + hero.powerstats.combat + hero.powerstats.power) / 30);
  const priorityValue = Math.ceil((hero.appearance.height + hero.appearance.weight) / 50);
  const costValue = Math.ceil(defenseValue + attackValue + priorityValue);
  costDiv.textContent = costValue;

  headerDiv.appendChild(nameDiv);
  headerDiv.appendChild(costDiv);

  // Create the second div: Hero Image
  const imageDiv = document.createElement('div');
  imageDiv.className = 'hero-image';
  const image = document.createElement('img');
  image.src = hero.image.url; // Make sure the path is correct
  image.alt = hero.name;
  imageDiv.appendChild(image);

  // Create the third div: Alignment and Race
  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'hero-details';
  detailsDiv.innerHTML = `
    <div>${hero.biography.alignment} ${hero.appearance.race}</div>
  `;

  // Create the fourth div: Powerstats
  const statsDiv = document.createElement('div');
  statsDiv.className = 'hero-stats';
  statsDiv.innerHTML = `
    <div class="stats-item">
        <div class="stats-label">Intelligence:</div> 
        <div class="stats-value">${hero.powerstats.intelligence}</div>
    </div>
    <div class="stats-item">
        <div class="stats-label">Strength:</div> 
        <div class="stats-value">${hero.powerstats.strength}</div>
    </div>
    <div class="stats-item">
        <div class="stats-label">Speed:</div> 
        <div class="stats-value">${hero.powerstats.speed}</div>
    </div>
    <div class="stats-item">
        <div class="stats-label">Durability:</div> 
        <div class="stats-value">${hero.powerstats.durability}</div>
    </div>
    <div class="stats-item">
        <div class="stats-label">Power:</div> 
        <div class="stats-value">${hero.powerstats.power}</div>
    </div>
    <div class="stats-item">
        <div class="stats-label">Combat:</div> 
        <div class="stats-value">${hero.powerstats.combat}</div>
    </div>
  `;

  // Create the fifth div: Priority and Attack/Defense
  const finalStatsDiv = document.createElement('div');
  finalStatsDiv.className = 'final-stats';
  finalStatsDiv.innerHTML = `
    <div class="priority">${priorityValue}</div>
    <div>${attackValue} / ${defenseValue}</div>
  `;

  // Append all divs to the card
  card.appendChild(headerDiv);
  card.appendChild(imageDiv);
  card.appendChild(detailsDiv);
  card.appendChild(statsDiv);
  card.appendChild(finalStatsDiv);

  // Append the card to the heroesList
  heroesList.appendChild(card);

  return {
    card: card,
    costValue: costValue,
    priorityValue: priorityValue,
    defenseValue: defenseValue,
    attackValue: attackValue,
  };
}

// Function to shuffle array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// Create hero cards and populate heroCards array
heroes.forEach(hero => {
  const { card } = createHeroCard(hero);
  heroCards.push(card);
});

// Shuffle heroCards array
shuffleArray(heroCards);

// Append shuffled hero cards to the heroesList
heroCards.forEach(card => {
  heroesList.appendChild(card);
});
