import { heroCards, createHeroCard } from './allheroes.js';
import heroes from './data/heroes.js'; 

const battleList = document.getElementById('heroes-battle-list');
const goodCount = document.getElementById ('good-count');
const badCount = document.getElementById ('bad-count');

//render battle hero list
heroes.forEach(hero => {
  const { card } = createHeroCard(hero);
  heroCards.push(card);
  battleList.appendChild(card);
});

// set good aand bad counters 

function alignemment(){
    let goodcounter = 0;
    let badcounter = 0;
   heroes.forEach(hero => {
    if(hero.biography.alignment === 'good'){
        goodcounter++
        goodCount.innerText = `(${goodcounter})`

    }
    if(hero.biography.alignment === 'bad'){
        badcounter++
        badCount.innerText = `(${badcounter})`
    }

   });
}
alignemment(goodCount,badCount)