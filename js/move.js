/* Write your Move class here! */
class Move {
    constructor(name, power, acc, type){
        this.name = name;
        this.power = power;
        this.acc = acc;
        this.type = type;
    }
    didHit() {
        return Math.random() < this.acc;
    }
}
///////////////////////////////////////

/* Write your Move subclasses here! */

const tackle = new Move('tackle', 50, .9, 'physical');
const earthquake = new Move('earthquake', 175, .6, 'earth');
const rockSlide = new Move('rock slide', 150, .65, 'earth');
const fireBall = new Move('fire ball', 145, .75, 'fire');
const plagueBreath = new Move('plague breath', 115, .8, 'poison');
const bite = new Move('bite', 65, .9, 'physical');
const slash = new Move('slash', 70, .85, 'physical');
const frostPunch = new Move('frost punch',130, .7, 'ice');
const taunt = new Move('taunt', 0, 1, 'rude')
const iceWind = new Move('ice wind', 135, .85, 'ice');


// console.log('tackle', tackle.didHit());

// module.exports = {
//     tackle,
//     fireBall,
//     iceWind
// }