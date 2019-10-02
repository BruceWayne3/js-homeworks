`use strict`
var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

console.log('Задача № 1');
let hit = {};
hit.name = hitName;
hit.price = hitPrice;
console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

console.log('Задача № 2');
let items = [];
for(let i = 0; i < positions.length; i++) {
  let obj = {};
  obj.name = positions[i];
  obj.price = prices[i];
  items.push(obj);
};
console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);

console.log('Задача № 3');
function showDiscount(object,quantity) {
  if (quantity < 10) {
    let discount = 5;
  } else if (quantity < 50 && quantity >= 10) {
    discount = 7;
  } else if (quantity >= 50 && quantity < 100) {
    discount = 10;
  } else {
    discount = 15;
  };
  let price = object.price * quantity - object.price * quantity / 100 * discount;
  let benefit = object.price * quantity / 100 * discount;
  console.log(`${object.name} — стоимость партии из ${quantity} штук ${price} Q (скидка ${discount} %), ваша выгода ${benefit} Q!`);
};

showDiscount(items[0],12);
showDiscount(items[3],97);

console.log('Задача № 4');
items[3].amount = 4;

function updateAmount(object,consumption = 1) {
  if (!('amount' in object)) {
    return;
  } else if (object.amount === 0 || consumption > object.amount) {
    console.log(`${object.name} закончился на складе.`);
  } else if (object.amount > consumption) {
    object.amount -= consumption;
    console.log(`${object.name} — остаток ${object.amount} шт.`);
  } else if (object.amount === consumption) {
    object.amount -= consumption;
    console.log(`Это был последний ${object.name}, вам повезло!.`);
  };
};

updateAmount(items[1],17);
updateAmount(items[3],3);
updateAmount(items[3]);