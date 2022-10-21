/* Write your Monster class here! */
// const move = require('./move.js');


class Monster {
    constructor(name, hp, atk, def, move, imgSrc){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.move = move;
        this.imgSrc = imgSrc;
        this.startHp = hp;
    }
    attack(other){ 
        if(!this.move.didHit()){
            return `${this.name} missed!`  
        } 
        let dmg = Math.floor(this.move.power * (this.atk / other.def));
        other.hp -= dmg;
        return `${this.name} used ${this.move.name} to deal ${dmg} damage to ${other.name}!
        \n ${other.name} has ${other.hp} remaining`;
    } 

    render(){
        let monsterDiv = document.createElement("div");
        let monsterInfo = document.createElement("div");

        let monsterName = document.createElement("h1");
        monsterName.innerHTML = this.name;
        monsterName.style.fontSize = '2.5rem'
        monsterName.style.color = 'white'
        monsterName.style.marginBottom = '4px'
        monsterName.style.textShadow = '1px 1px 5px black'

        let hpNum = document.createElement("h1");
        hpNum.innerHTML = `HP ${this.hp}`;
        hpNum.style.fontSize = '2rem'
        hpNum.style.color = 'white'
        hpNum.style.textShadow = '1px 1px 5px black';
        hpNum.style.marginTop = '4px';
        hpNum.style.marginBottom = '18px';

        let monsterHp = document.createElement("div");
        monsterHp.style.display = 'flex';
        monsterHp.style.height = '35px';

        let posPercent = Math.floor((this.hp / this.startHp) * 100);
        let positive = document.createElement("div");
        let negative = document.createElement("div");
       
        positive.style.background = 'green';
        positive.style.width = `${posPercent}%`;

        negative.style.background = 'red';
        negative.style.width = `${100 - posPercent}%`;

            while(monsterHp.lastElementChild){
                monsterHp.removeChild(monsterHp.lastElementChild);
            }
        
        monsterHp.appendChild(positive);
        monsterHp.appendChild(negative);

        monsterInfo.appendChild(monsterName);
        monsterInfo.appendChild(hpNum);
        monsterInfo.appendChild(monsterHp);

        monsterInfo.style.width = '80%';
        monsterInfo.style.marginLeft = '8px';
        monsterInfo.style.display = 'flex';
        monsterInfo.style.flexDirection = 'column';
        monsterDiv.appendChild(monsterInfo);

        monsterDiv.style.display = 'flex';
        monsterDiv.style.alignItems = 'flex-end';     
        monsterDiv.style.backgroundImage = `url(${this.imgSrc})`;
        monsterDiv.style.backgroundSize = 'cover';
        monsterDiv.style.height = '100%';
        return monsterDiv;
    }
}

/* Write your Monster subclasses here! */

class Dragon extends Monster {
    constructor(name, hp, atk, def, move, imgSrc, favRestaurant){
      super(name, hp, atk, def, move, imgSrc);
      this.favRestaurant = favRestaurant;
    }
    render () {
       return super.render()
    }
}

class Golem extends Monster {
    constructor(name, hp, atk, def, move, imgSrc, favMusical){
      super(name, hp, atk, def, move, imgSrc);
      this.favMusical = favMusical;
    }
    render () {
       return super.render()
    }
}


const aegon = new Dragon('Aegon', 1000, 500, 600, fireBall, '../public/dragon1.jpeg', 'Dennys');
const mountainGolem = new Golem('Mountain Golem', 1500, 350, 800, tackle, '../public/golem.jpeg', 'Rogers and Hammerstein\'s: Oklahoma')

// console.log(aegon)
// console.log(mountainGolem)

const ao = new Dragon("Ao", 600, 420, 290, fireBall, '../public/ao.jpeg', 'Red Lobster');
const blackDragon = new Dragon("Ao", 600, 420, 290, fireBall, '../public/ao.jpeg', 'Red Lobster');

const frostGolem = new Golem("Frost Golem", 900, 435, 760, iceWind, '../public/frostGiant.jpeg', 'Steven Sondheim\'s: Into the Woods, feat. Sarah Bareilles');

// console.log(ao)
// console.log(frostGolem)




// module.exports = {
//     ao,
//     frostGiant
// }
