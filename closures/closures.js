`use strict`
console.log('Задача № 1');
const TAX = 73;
let sum = 0;
function taxes(price) {
  sum += price / 100 * TAX;
  return sum; 
};
taxes(100);
taxes(100);
taxes(100);
console.log(`Налог с продаж (${TAX} %), к оплате: ${taxes(0)} Q`);

console.log('Задача № 2');
let paper = 30;
function packaging(width,height,length) {
  let square = 2 * (width * height + width * length + height * length);
  if (square > paper) {
    console.log(`Заказ (${width}/${height}/${length} м) не упакован, осталось упаковочной бумаги ${paper} м2`); 
    return false;
  } else {
    paper -= square;
    console.log(`Заказ (${width}/${height}/${length} м) упакован, осталось упаковочной бумаги ${paper} м2`); 
    return true;
  };
};

packaging(1,0.2,0.7);
packaging(100,30,7);
packaging(1,1,1);
packaging(1,1,1);
packaging(1,1,1);

console.log('Задача № 3');
let charges = [ 7, 2, 1, 4, 8 ];
let functionsCounter = [];
for (let i = 0; i < charges.length; i++) {
  function counter() {
    if (charges[i] > 1) {
      charges[i]--;
      console.log(`Телепорт ${i+ 1} использован, заряд — ${charges[i]} единиц`);
    } else if (charges[i] === 1) {
      charges[i]--;
      console.log(`Телепорт ${i+ 1} использован, заряд — 0 единиц, требуется перезарядка!`);
    } else {
      console.log(`Телепорт ${i+ 1} недоступен, перезаряжается`);      
    };
  };
  functionsCounter.push(counter);
};

functionsCounter[1]();
functionsCounter[0]();
functionsCounter[2]();
functionsCounter[4]();
functionsCounter[3]();
functionsCounter[4]();
functionsCounter[1]();
functionsCounter[1]();