`use strict`;

console.log(`Домашнее задание к лекции 1.5 «Замыкания и область видимости»`);

const TAX = 73/100;
let summ = 0;

function totalTax(price) {
  return summ += price * TAX;
}

totalTax(10000);
totalTax(100);

console.log(`Налог с продаж (73 %), к оплате: ${totalTax(0)} Q`);
console.log('');

let wrappingPaper = 30;

function packaging(width, height, length) {
  let s = 2 * (width * height + width * length + height * length);

  if(wrappingPaper >= s) {
    wrappingPaper -= s;
    return true;
  } else {
    return false;
  };
};

packaging(1, 0.2, 0.7);
console.log(`Заказ (1/0.2/0.7 м) упакован, осталось упаковочной бумаги ${wrappingPaper} м2`);
packaging(100, 30, 7);
console.log(`Заказ (100/30/7 м) не упакован, осталось упаковочной бумаги ${wrappingPaper} м2`);

let teleports = [ 7, 2, 1, 4, 8 ];
let functionCounters = [];

for(let i = 0; i < teleports.length; i++) {
  functionCounters[i] = function() {
    if(teleports[i] > 0) {
      teleports[i]--;
      if(teleports[i] > 0) {
        console.log(`Телепорт ${i+1} использован, заряд — ${teleports[i]} единиц`);
      } else {
        console.log(`Телепорт ${i+1} использован, заряд — 0 единиц, требуется перезарядка!`);
      }
    } else {
      console.log(`Телепорт ${i+1} недоступен, перезаряжается`);
    }
  };
};

functionCounters[1]();
functionCounters[0]();
functionCounters[2]();
functionCounters[4]();
functionCounters[3]();
functionCounters[4]();
functionCounters[1]();
functionCounters[1]();
