`use strict`
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

console.log('Задача № 1. Пункты телепортации заказов.');
function OrdersTeleportationPoint(title,x,y,z) {
  this.title = title;
  this.x = x;
  this.y = y;
  this.z = z;
  this.getDistance = function(x,y,z) {
    return Math.sqrt(Math.pow((x - this.x),2) + Math.pow((y - this.y),2) + Math.pow((z - this.z),2));
  };
};

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц`);

console.log('Задача № 2. Поиск ближайшего пункта телепортации.');
function OrdersTeleportationPointLocator(points) {
  try {
    if(Array.isArray(points) === false) {
      throw `${points} не является массивом!`
    };
    let instances = [];
    for(let point of points) {
      if(point instanceof OrdersTeleportationPoint) {
        instances.push(point);
      };
    };
    let distances = [];
    this.getClosest = function(x,y,z) {
      for(let instance of instances) {
        distances.push(instance.getDistance(x,y,z));
      };
      let distance = Math.min(...distances);
      return instances[distances.indexOf(distance)];
    };
  } catch(err) {
    console.log(`Ошибка: ${err}`);
  };
};

const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords));
const locator = new OrdersTeleportationPointLocator(points);

const closestPoint = locator.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);

console.log('Задача № 3. Карты лояльности.');
function LoyaltyCard(name, sum) {
  this.owner = name;
  this.orderSumSet = [sum];
  Object.defineProperty(this, 'id', {
    value: generateId(),
    writable: false,
    configurable: false
  });
}

Object.defineProperty(LoyaltyCard.prototype, 'balance', {
  get: function() {
    return this.orderSumSet.reduce(function(memo, el) {
      return memo + el;
    }, 0);
  }
});

Object.defineProperty(LoyaltyCard.prototype, 'discount', {
  get: function() {
    if (this.balance <= 3000) {
      return 0;
    } else if (this.balance <= 5000) {
      return 3;
    } else if (this.balance <= 10000) {
      return 5;
    } else {
      return 7;
    }
  }
});

LoyaltyCard.prototype.getFinalSum = function(sum) {
  return sum - (sum * this.discount * 0.01);
};

LoyaltyCard.prototype.append = function(sum) {
  this.orderSumSet.push(sum);
};

LoyaltyCard.prototype.show = function() {
  console.log(`Карта ${this.id}`);
  console.log(`Владелец: ${this.owner}`);
  console.log(`Баланс: ${this.balance}`);
  console.log(`Текущая скидка: ${this.discount}%`);
  console.log(`Заказы:`);
  this.orderSumSet.forEach(function(el, index) {
    console.log(` #${index + 1} на сумму ${el}`);
  });
};

const card = new LoyaltyCard('Иванов Иван', 6300);

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);
console.log(`Итоговая сумма для заказа на ${newOrderSum}Q по карте
  составит ${finalSum}Q. Скидка ${card.discount}%.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance}.`);
card.show();