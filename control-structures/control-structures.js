`use strict`
console.log('Задача № 1');
var goodsInStock = 2;
var goodsInOrder = 2;
if (goodsInOrder > goodsInStock) {
 console.log('На складе нет такого количества товаров');
} else if (goodsInOrder === goodsInStock) {
  console.log('Вы забираете весь товар c нашего склада!');
} else {
  console.log('Заказ оформлен');
};
console.log('Задача № 2');
var place = 'Галактика Туманность Андромеды';
switch (place) {
  case 'Луна': console.log(`Стоимость доставки для области ${place}: 150 Q`);
  break;

  case 'Крабовидная туманность': console.log(`Стоимость доставки для области ${place}: 250 Q`);
  break;

  case 'Галактика Туманность Андромеды': console.log(`Стоимость доставки для области ${place}: 550 Q`);
  break;

  case 'Туманность Ориона': console.log(`Стоимость доставки для области ${place}: 600 Q`);
  break;

  case 'Звезда смерти': console.log(`Стоимость доставки для области ${place}: договорная цена`);
  break;
};
console.log('Задача № 3');
var price = 'one';
try {
  if (typeof(price) !== 'number') {
    throw `'${price}' не является числом`;
  };
  console.log('Цена товара введена корректно');
} catch(err) {
  console.log(`Вы допустили ошибку: ${err}`);
};
console.log('Задача № 4. Дополнительная (необязательная)');
var planet = 'Земля';
var age = 24;
if (planet === 'Земля' && age < 18) {
  console.log('Вы не достигли совершеннолетия');
} else if (planet === 'Земля' && age >= 18) {
  console.log('Приятных покупок');
} else if (planet === 'Юпитер' && age < 120) {
  console.log('Сожалеем. Вернитесь на 120-й день рождения!');
} else if (planet === 'Юпитер' && age >= 120) {
  console.log('Чистого неба и удачных покупок!');
} else {
  console.log('Спасибо, что пользуетесь услугами нашего магазина!');
};