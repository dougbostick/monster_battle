//const mon = require('./js/monster')
// const move = require('./js/move')
// const battle = require('./js/battle')
// const { ao, frostGiant } = require('./js/monster')

//const ao = new mon.Monster("Ao", 500, 220, 190, move.fireBall);
//const frostGiant = new mon.Monster("Frost Giant", 600, 195, 220, move.iceWind);

// const battle1 = new battle.Battle(ao, frostGiant, false);


// const battle1 = new Battle(ao, frostGolem, false);
// const battle2 = new Battle(aegon, mountainGolem, false);
// console.log(battle1)

// battle1.render();
// battle1.render();

let player1;
let player2;
let battle;

const fight = document.querySelector('.fight');
const statusElm = document.querySelector('.status');

fight.addEventListener('click', () => {
    let battle = new Battle(player1, player2, false)
    battle.fight();
    console.log(battle.fight())
    battle.render();
    console.log('battle', battle)
    if(battle.player.hp <= 0 || battle.oppo.hp <=0){
        fight.disabled = true;
       }
})

function renderMonsterList(list){
    const monsterList = document.createElement('ul');
    monsterList.style.display = 'flex';
    monsterList.style.flexWrap = 'wrap';

    for(const monster of list){
        const monsterRend = monster.render();
        const monsterLi = document.createElement('li');
        monsterLi.style.width = '33.3%'
        monsterLi.style.height = '280px'
        monsterLi.style.listStyle = 'none'

        const liContent = document.createElement('div');
        liContent.style.display = 'flex';
        liContent.style.flexDirection = 'column';
        liContent.appendChild(monsterRend);

        const player1btn = document.createElement('button');
        player1btn.addEventListener('click', () =>{
            const playerElm = document.querySelector('.player');
            playerElm.replaceChildren(monster.render())
            player1 = monster;

        })
        player1btn.innerHTML = '+ Player 1'
        const player2btn = document.createElement('button');
        player2btn.addEventListener('click', () =>{
            const oppoElm = document.querySelector('.opponent');
            oppoElm.replaceChildren(monster.render());
            player2 = monster;
        })
        player2btn.innerHTML = '+ Player 2'
        const btnDiv = document.createElement('div');
        btnDiv.style.display = 'flex';
        btnDiv.appendChild(player1btn);
        btnDiv.appendChild(player2btn);
        liContent.appendChild(btnDiv);
        monsterLi.appendChild(liContent);
        monsterList.appendChild(monsterLi);
    }
    document.querySelector('.monsters').appendChild(monsterList);
}

let monsterArr = [ao, frostGolem, aegon, mountainGolem, blackDragon, aegon, mountainGolem, blackDragon]

renderMonsterList(monsterArr);


// function _fight(){
//     console.log(player1, player2)
//     let cur = new Battle(player1, player2, false)
//     console.log('cur', cur)
//     cur.fight();
//     cur.render();
//     if(cur.player.hp <= 0 || cur.oppo.hp <=0){
//         fight.disabled = true;
//        }
// }
