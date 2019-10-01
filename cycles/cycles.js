`use strict`
var positions = [
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
]

console.log('Задача № 1');
var positionsLength = positions.length;
console.log('Список наименований');
for(var i = 0; i < positionsLength; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
};

console.log('Задача № 2');
positions.push('Экзоскелет Trooper-111','Нейроинтерфейс игровой SEGUN','Семена дерева Эйва');
console.log('Окончательный список наименований');
for(var i = 0; i < positions.length; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
};

console.log('Задача № 3');
var timeMachineIndex = positions.indexOf('Машина времени DeLorean');
var timeMachine = positions.splice(timeMachineIndex,1);
positions.unshift(timeMachine[0]);
console.log('Принять в первую очередь');
for(var i = 0; i < 3; i++) {
  console.log(`${i + 1} '${positions[i]}'`);
};

console.log('Задача № 4. Дополнительная (необязательная)');
var [firstElement,secondElement,thirdElement,fourthElement,fifthElement, ...restElements] = positions;
console.log('В магазине');
console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
console.log(fourthElement);

console.log(fifthElement);
console.log('Остальные товары');
for(var i = 0; i < restElements.length; i++) {
  console.log(`${i + 1} '${restElements[i]}'`);
};