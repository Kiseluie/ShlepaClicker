// var pelmen = 0;
// var money = 0;
// var coef = 1; 
/* При покупке улучшений коэффицент повысится */

/*Подсчёт */
// function addPelmen(){
//     pelmen += 1;
//     document.getElementById('count').innerHTML = pelmen;
//     addMoney();
// }

// function addMoney(){
//     money += 1 * coef;
//     document.getElementById('money').innerHTML = money;
// }

/*Магазин */
// function gotoShop(){
//     document.getElementById('shop').onclick = function(){
//        var el = document.getElementsByTagName('body');
//        el.style.opacity = 0;
//        el.style.transition = 20;
//     }
// }



class Game {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.c = 0;

        this.pelmen = 0;
        this.money = 0;
    }

    click(booster) {
        this.addPelmen();
        this.addMoney();

        this.render();

    }

    addPelmen() {
        this.pelmen += 1;
    }

    addMoney() {
        this.money +=
            1 +
            this.a * 1 +
            this.b * 2 +
            this.c * 4;
    }

    render() {
        document.getElementById('count').innerHTML = this.pelmen;
        document.getElementById('money').innerHTML = this.money;
    }

}

class Booster {
    constructor() {
        this.booster = {
            'a': {
                cost: 10,
                value: 0
            },
            'b': {
                cost: 25,
                value: 0
            },
            'c': {
                cost: 100,
                value: 0
            },
        };
    }

    getBuster() {
        return this.booster;
    }

    buy(boost) {
        if ( this.booster.hasOwnProperty(bust) ) {
            this.booster[bust].value += 1;
            this.booster[bust].cost *= 2;
        } else {
            console.log('Error. Unknown bust: ' + boost);
        }
    }
}

class Shop {
    constructor(booster) {
        
    }

    

}

let shop = new Shop();
let booster = new Booster();
let game = new Game();


document.querySelector("#Shlepa").onclick = () => {
    game.click(booster);
}
