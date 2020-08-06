`use strict`;
console.log(`Домашнее задание к лекции 1.3 «Циклы»`);

var positions = [
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
];

var arrayLength = positions.length;

console.log(`Список наименований`);

for(var i = 0; i < arrayLength; i++) {
  console.log(`${i+1} '${positions[i]}'`);
};
console.log(` `);
positions.push('Экзоскелет Trooper-111','Нейроинтерфейс игровой SEGUN','Семена дерева Эйва');

console.log(`Окончательный список наименований`);

for(var i = 0; i < positions.length; i++) {
  console.log(`${i+1} '${positions[i]}'`);
};
console.log(` `);
var indexOfFirst = positions.indexOf('Машина времени DeLorean');
var car = positions.splice(indexOfFirst,1).join();
positions.unshift(car);

console.log(`Принять в первую очередь`);
for(var i = 0; i < 3; i++) {
  console.log(`${i+1} '${positions[i]}'`);
};
console.log(` `);
var [first, second, third, fourth, fifth, ...restGoods] = positions;

console.log(`В магазине`);
console.log(`1 '${first}'`);
console.log(`2 '${second}'`);
console.log(`3 '${third}'`);
console.log(`4 '${fourth}'`);
console.log(`5 '${fifth}'`);
console.log(` `);
console.log(`Остальные товары`);
for ( i = 0; i < restGoods.length; i++ ) {
    console.log(`${i+1} '${restGoods[i]}'`);
}
