/* Write your Battle class here! */
class Battle {
    constructor(player, oppo, battleOver){
        this.player = player;
        this.oppo = oppo;
        this.battleOver = battleOver;
    }
    checkWin(){
        let winner = null;
        if(this.player.hp <= 0 && this.oppo.hp <= 0){
            winner = `${this.player.name} and ${this.oppo.name} have both been defeated!`;
        } else if(this.oppo.hp <= 0 && this.player.hp > 0){
            winner = `${this.player.name} has won!`;
        } else if(this.player.hp <= 0 && this.oppo.hp > 0){
            winner =  `${this.oppo.name} has won!`;
        }
        return winner;
    }

    fight(){
        let playerMsg = this.player.attack(this.oppo);
        let oppoMsg = this.oppo.attack(this.player);
        let message = `${playerMsg} \n ${oppoMsg}\n`
        this.player.render();
        this.oppo.render();

        const winner = this.checkWin();
        if(winner){
          this.battleOver = true;
            message += winner;
        }
        return message;

         // while(this.player.hp && this.oppo.hp < 0){
        //    console.log(this.player.attack(this.oppo)); 
        //     console.log(this.oppo.attack(this.player));
        // }

        // if(this.player.hp || this.oppo.hp <= 0){
        //     this.checkWin();
        // } else {
        //     this.player.attack(this.oppo);
        //     this.oppo.attack(this.player);
        //     this.checkWin();
        // }
    }

    render(){ //final step in render, not returning an html element, but appending to index.html
        const playerSection = document.querySelector('.player');
        const oppoSection = document.querySelector('.opponent');
        //updates monsters
        const playerRend = this.player.render();
        const oppoRend = this.oppo.render();
        //updates html page with updated monsters
        playerSection.replaceChildren(playerRend);
        oppoSection.replaceChildren(oppoRend);
    }
}

// module.exports = {
//     Battle
// }