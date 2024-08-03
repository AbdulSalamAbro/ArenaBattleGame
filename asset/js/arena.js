
import heroes from './data/heroes.js'; 


const goodCount = document.getElementById ('good-count');
const badCount = document.getElementById ('bad-count');



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