"use strict";

class Game {
    constructor() {
        this.pelmen = 0;
        this.money = 0;

        this.boost_cost = {
            first: 100,
            second: 1000,
            third: 10000,
            fourth: 100000
        };

        this.boost_count = {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0
        };
    }

    click() {
        this.pelmen += 1;

        this.money +=
            1 *
            (5 ** this.boost_count.first) *
            (10 ** this.boost_count.second) +
            (100 * this.boost_count.third) +
            (10000 * this.boost_count.fourth);
    }

    buyBoost(boost_name) {
        let isBuy = false;
        if (this.money >= this.boost_cost[boost_name]) {
            this.money -= this.boost_cost[boost_name];

            this.boost_count[boost_name] += 1;
            isBuy = true;
        }
        return isBuy;
    }
}

// Модальные окна
const shop = document.querySelector('.shop'); // магазин

// Область клика
const shlepa = document.querySelector("#shlepa"); // Получение области клика

// Отображаемые значения
const pelmen = document.getElementById('pelmen'); // Получение места для отображения количества пельменей
const money = document.getElementById('money'); // Получение места для отображения количества денег

// Кнопки магазина
const boost_first = document.querySelector("#boost-first");
const boost_second = document.querySelector("#boost-second");
const boost_third = document.querySelector("#boost-third");
const boost_fourth = document.querySelector("#boost-fourth");

// Игровая логика
const game = new Game(); // создание переменной игры



function gRender() {
    pelmen.innerHTML = game.pelmen;
    money.innerHTML = game.money;
}

function gClickShlepa() {
    game.click();
    WTF();

    gRender();
}

function gClickBoostFirst(e) {
    const isBuy = game.buyBoost('first');
    if (isBuy) {
        e.target.classList.toggle('none');
        gRender();
    } else {
        alert('Недостаточно благословений!');
    }
}

function gClickBoostSecond(e) {
    const isBuy = game.buyBoost('second');
    if (isBuy) {
        e.target.classList.toggle('none');
        gRender();
    } else {
        alert('Недостаточно благословений!');
    }
}

function gClickBoostThird(e) {
    const isBuy = game.buyBoost('third');
    if (isBuy) {
        gRender();
    } else {
        alert('Недостаточно благословений!');
    }
}

function gClickBoostFourth(e) {
    const isBuy = game.buyBoost('fourth');
    if (isBuy) {
        gRender();
    } else {
        alert('Недостаточно благословений!');
    }
}

function WTF() {
    let path = '/assets/images/'
    switch(game.pelmen) {
        case 5:
            path += 'WTF/WTF-1.png';
        break;

        case 25:
            path += 'WTF/WTF-2.png';
        break;
        
        case 50:
            path += 'WTF/WTF-3.png';
        break;
        
        case 75:
            path += 'WTF/WTF-4.png';
        break;
        
        case 100:
            path += 'WTF/WTF-5.png';
        break;

        default:
            path += 'shlepa.png';
    }

    if(game.money >= 9999999) {
        path = '/assets/images/WTF/WTF-6.png';
    }
    shlepa.src = path;
}

// Привяжка слика по шлёпе к событию клика
shlepa.onclick = gClickShlepa;

// Привязка кнопок для покупки улучшений
boost_first.onclick = gClickBoostFirst;
boost_second.onclick = gClickBoostSecond;
boost_third.onclick = gClickBoostThird;
boost_fourth.onclick = gClickBoostFourth;

// Привязка кнопок для открытия и закрытия магазина
document.querySelector("#shop-open").onclick = () => shop.classList.toggle('none');
document.querySelector("#shop-close").onclick = () => shop.classList.toggle('none');
