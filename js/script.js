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
                cost: 100,
                value: 2
            },
            b: {
                cost: 1000,
                value: 5
            },
            c: {
                cost: 10000,
                value: 10
            },
        };

        this.pelmen = 0;
        this.money = 0;
        this.multiplyer = 1;
    }

    // buy(boost) {
    //     if ( this.boosters.hasOwnProperty(boost) ) {
    //         this.boosters[bust].value += 1;
    //         this.boosters[bust].cost *= 2;
    //     } else {
    //         console.log('Error. Unknown bust: ' + boost);
    //     }
    // }
    
    click() {
        this.pelmen += 1;

        this.money +=
            1 * this.multiplyer;
            // this.boosters.a.value * 1 +
            // this.boosters.b.value * 2 +
            // this.boosters.c.value * 4;
    }

    selectBoost(){
        document.querySelector("#first-boost").onclick = () => {
            if (this.money >= 100){
                this.money -= 100;
            
                this.multiplyer = 5;
                const add_btn = document.querySelector('#first-boost');
                add_btn.classList.add('none');
            }
            else{
                alert('Недостаточно благословений!');
            }
        }

        document.querySelector("#second-boost").onclick = () => {
            if (this.money >= 1000){
                this.money -= 1000;
           
                this.multiplyer = 10;
                const add_btn = document.querySelector('#second-boost');
                add_btn.classList.add('none');   
            }
            else{
                alert('Недостаточно благословений!');
            }
        }

        document.querySelector("#third-boost").onclick = () => {
            if (this.money >= 10000){
                this.money -= 10000;
            
                this.multiplyer += 100;
            }
            else{
                alert('Недостаточно благословений!');
            }
        }
    }
    // getBoost(boost) {
    //     if ( this.boosters.hasOwnProperty(boost) ) {

    //     } else {
    //         console.log('Error. Unknown bust: ' + boost);
    //     }
    // }
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
        
        this.buttons.a.innerHTML = this.booster.boosters.a.cost;
        this.buttons.b.innerHTML = this.booster.boosters.b.cost;
        this.buttons.c.innerHTML = this.booster.boosters.c.cost;

    }
}

let game = new Game(); 


document.querySelector("#Shlepa").onclick = () => {
    game.booster.click();
    game.booster.selectBoost();
}

document.querySelector("#Shop").onclick = () => {
    const shop = document.querySelector('.shop');
    shop.classList.remove('none');
}

document.querySelector("#close").onclick = () => {
    const shop = document.querySelector('.shop');
    shop.classList.add('none');
}




// Отображение счёта независимо от основной игры
setInterval(() => {
    game.render();
}, 100);
