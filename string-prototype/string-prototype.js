`use strict`
function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

console.log('Задача № 1. Пользовательский ввод.');
function fixAmount(amount) {
  if (typeof(amount) === 'number') {
    return amount;
  } else if (amount.match(/\d+/g) === null) {
    return -1;
  } else {
    amount = amount.match(/\d+/g);
    if (amount.length > 1) {
      amount = amount.join('.');
      return amount;
    }
    return amount;
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

console.log('Задача № 2. Секретный код.');
const chars = [];
function handleKey(char) {
  chars.push(char);
  let result = chars.join('').toLowerCase();
  if (result.slice(-4) === 'r2d2') {
    showSpecialPrice();
  } else {
    return;
  };
};

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
};

console.log('Задача №3. Импорт CSV файла');
function parseData(cells,data,separator = ',') {
  const result = [];
  for (item of data) {
    item = item.split(separator);
    let object = {};
    for (let i = 0; i < item.length; i++ ) {
      object[cells[i]] = item[i];
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