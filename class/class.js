`use strict`;
console.log(`Домашнее задание к лекции 3.1 «Создание конструктора и прототипа»`);

function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
  return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
  { title: 'Темная сторона Луны', coords: [500, 200, 97] },
  { title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712] },
  { title: 'Саратов', coords: [30, 91, 77] }
];

class OrdersTeleportationPoint {
  constructor(title, x, y, z) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getDistance(x, y, z) {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2) + Math.pow(this.z - z, 2));
  }
}

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц`);
console.log('');

class OrdersTeleportationPointLocator {
  constructor(points) {
    try {
      if(Array.isArray(points) === false) {
        throw 'Not an array';
      }
      this.array = [];
      for (let point of points) {
        if(OrdersTeleportationPoint.prototype.isPrototypeOf(point) === true) {
          this.array.push(point);
        } else {
          continue;
        }
      }
    } catch(e) {
      console.log(e);
    }
  }

  getClosest(x, y, z) {
    const results = this.array.map(function(el) {
      return el.getDistance(x, y, z);
    });
    let result = Math.min(...results);
    return this.array[results.indexOf(result)];
  }
}

const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords));
const locator = new OrdersTeleportationPointLocator(points);

const closestPoint = locator.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);
console.log('');

class LoyaltyCard {
  constructor(name, sum) {
    this.owner = name;
    this.sum = [sum];
    Object.defineProperty(this, 'id', {
      value: generateId(),
      writable: false,
      configurable: false
      });
  }

  get balance() {
    return this.sum.reduce(function(memo,el) {
      memo += el;
      return memo;
    });
  }

  get discount() {
    if(this.balance <= 3000) {
      return 0;
    } else if(this.balance > 3000 && this.balance <= 5000) {
      return 3;
    } else if(this.balance > 5000 && this.balance <= 10000) {
      return 5;
    } else {
      return 7;
    }
  }

  getFinalSum(newOrderSum) {
    return newOrderSum - (newOrderSum / 100 * this.discount);
  }
  
  append(newOrderSum) {
    this.sum.push(newOrderSum);
  }

  show() {
    console.log(`Карта ${this.id}:
  Владелец: ${this.owner}
  Баланс: ${this.balance} Q
  Текущая скидка: ${this.discount} %
  Заказы:`);
    for(let order of this.sum) {
      console.log(`#${this.sum.indexOf(order) + 1} на сумму ${order} Q`);
    }
  };
}

const card = new LoyaltyCard('Иванов Иван', 6300);

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);
console.log(`Итоговая сумма для заказа на ${newOrderSum} Q по карте
  составит ${finalSum} Q. Скидка ${card.discount} %.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance} Q.`);
card.show();
