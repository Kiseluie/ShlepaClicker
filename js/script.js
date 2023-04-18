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


class Booster {

    constructor() {
        this.boosters = {
            a: {
                cost: 10,
                value: 0
            },
            b: {
                cost: 25,
                value: 0
            },
            c: {
                cost: 100,
                value: 0
            },
        };

        this.pelmen = 0;
        this.money = 0;
    }

    buy(boost) {
        if ( this.boosters.hasOwnProperty(boost) ) {
            this.boosters[bust].value += 1;
            this.boosters[bust].cost *= 2;
        } else {
            console.log('Error. Unknown bust: ' + boost);
        }
    }
    
    click() {
        this.pelmen += 1;

        this.money +=
            1 +
            this.boosters.a.value * 1 +
            this.boosters.b.value * 2 +
            this.boosters.c.value * 4;
    }

    getBoost(boost) {
        if ( this.boosters.hasOwnProperty(boost) ) {

        } else {
            console.log('Error. Unknown bust: ' + boost);
        }
    }
}

class Shop {
    constructor() {

    }
}

class Game {
    constructor() {
        this.booster = new Booster();
        this.shop = new Shop();

        this.buttons = {
            count: document.getElementById('count'),
            money: document.getElementById('money'),

            a: document.getElementById('a'),
            b: document.getElementById('b'),
            c: document.getElementById('c')
        };
    }



    render() {
        this.buttons.count.innerHTML = this.booster.pelmen;
        this.buttons.money.innerHTML = this.booster.money;
        
        this.buttons.a.innerHTML = this.booster.boosters.a.value;
        this.buttons.b.innerHTML = this.booster.boosters.b.value;
        this.buttons.c.innerHTML = this.booster.boosters.c.value;

    }
}

let game = new Game(); 


document.querySelector("#Shlepa").onclick = () => {
    game.booster.click();
}

document.querySelector("#Shop").onclick = () => {
    const shop = document.querySelector('.shop');
    shop.classList.remove('none');
}


// Отображение счёта независимо от основной игры
setInterval(() => {
    game.render();
}, 100);
