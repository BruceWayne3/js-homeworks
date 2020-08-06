`use strict`;
console.log(`Домашнее задание к лекции 2.3 «Обертки для примитивов»`);

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
};

function fixAmount(amount) {
  if(typeof(amount) === 'number') {
    return amount;
  } else if(isNaN(parseFloat(amount)) === true) {
    return -1;
  } else {
    if(amount.indexOf(',') === -1) {
      return amount = parseFloat(amount);
    } else {
      return amount = parseFloat(amount.replace(',','.'));
    };
  };
};

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра ' },
  { price: 1, amount: 'семь единиц' }
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
};
console.log('');

const chars = []
function handleKey(char) {
  chars.push(char);
  let result = chars.join('');
  if(result.substr(-4).toLowerCase() === 'r2d2') {
    showSpecialPrice();
  };
};

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
};
console.log('');

const result = [];
function parseData(cells, strings, delimiter = ',') {
  for(let string of strings) {
    string = string.split(delimiter);
    let object = {};
    for(let i = 0; i < cells.length; i++) {
      object[cells[i]] = string[i];
    };
    result.push(object);
  };
  return result;
};

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);
