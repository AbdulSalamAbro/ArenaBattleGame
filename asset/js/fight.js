import { selectedCards, opponentCards } from "./selection.js";

const fightButton = document.getElementById('fight-button');
export const halloffames = [];

fightButton.addEventListener('click', () => {
    fight();
});

function fight() {
    // Ensure both arrays have the same length
    if (selectedCards.length !== opponentCards.length) {
        console.error('Arrays must have the same length');
        return;
    }

    let selectedWins = 0;
    let opponentWins = 0;

    for (let i = 0; i < selectedCards.length; i++) {
        const selectedHero = selectedCards[i];
        const opponentHero = opponentCards[i];

        const selectedAttack = selectedHero.attackValue;
        const selectedDefense = selectedHero.defenseValue;

        const opponentAttack = opponentHero.attackValue;
        const opponentDefense = opponentHero.defenseValue;

        // Compare attack of selected hero with defense of opponent hero
        if (selectedAttack > opponentDefense) {
            selectedWins++;
            halloffames.push(selectedHero); // Add selected hero to halloffames
        }

        // Compare attack of opponent hero with defense of selected hero
        if (opponentAttack > selectedDefense) {
            opponentWins++;
            halloffames.push(opponentHero); // Add opponent hero to halloffames
        }
    }

    // Determine which team wins overall
    let winner;
    if (selectedWins > opponentWins) {
        winner = 'Heroes';
    } else if (opponentWins > selectedWins) {
        winner = 'Villains';
    } else {
        winner = 'It\'s a tie!';
    }

    // Show alert indicating the winning team
    alert(`The winner is: ${winner}. Selected Team wins: ${selectedWins}, Opponent Team wins: ${opponentWins}`);

    console.log('Hall of Fame:', halloffames);
}
