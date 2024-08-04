import { selectedCards, opponentCards } from "./selection.js";

const fightButton = document.getElementById('fight-button');

fightButton.addEventListener('click', () => {
    fight();
});

function fight() {
    if (selectedCards.length !== opponentCards.length) {
        console.error('Arrays must have the same length');
        return;
    }

    for (let i = 0; i < selectedCards.length; i++) {
        const selectedHero = selectedCards[i];
        const opponentHero = opponentCards[i];

        const selectedAttack = selectedHero.attackValue;
        const opponentAttack = opponentHero.attackValue;

        console.log(`Comparison between selected hero ${i + 1} (Attack: ${selectedAttack}) and opponent hero ${i + 1} (Attack: ${opponentAttack}):`);

        if (selectedAttack > opponentAttack) {
            console.log(`Selected hero ${i + 1} wins!`);
        } else if (selectedAttack < opponentAttack) {
            console.log(`Opponent hero ${i + 1} wins!`);
        } else {
            console.log(`It's a tie between hero ${i + 1} and opponent hero ${i + 1}.`);
        }
    }
}

