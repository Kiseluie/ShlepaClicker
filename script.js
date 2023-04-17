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
        this.a = 0;
        this.b = 0;
        this.c = 0;

        this.pelmen = 0;
        this.money = 0;
    }

    click() {
        this.addPelmen();
        this.addMoney();

        this.render();

    }

    addPelmen() {
        this.pelmen += 1;
    }

    addMoney() {
        this.money += 1 + 2 * this.b + 4 * this.c;
        console.log(this.money);
    }


    render() {
        document.getElementById('count').innerHTML = this.pelmen;
        document.getElementById('money').innerHTML = this.money;
    }

}

let booster = new Booster();

document.querySelector("#Shlepa").onclick = () => {
    booster.click();
}