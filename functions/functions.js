`use strict`
console.log('Задача № 1');
function guarantee(years) {
  if (years === 1) {
    return 1250;
  } else if (years === 2) {
    return 2300;
  } else {
    return 0;
  };
};
console.log(`Дополнительное гарантийное обслуживание: ${guarantee(1)} Q`);

console.log('Задача № 2');
var string = 'Это строка из нескольких слов';
function engraving(string) {
  if (string === null || string === undefined) {
    return 0;
  } else {
    var words = string.split(' ');
  return 11 * words.length;
  };
};
console.log(`Подарочная упаковка и гравировка: ${engraving(string)} Q`);

console.log('Задача № 3');
function delivery(need,place) {
  if (need === 'yes') {
    switch (place) {
      case 'Луна': return 150;
      break;

      case 'Крабовидная туманность': return 250;
      break;

      case 'Галактика Туманность Андромеды': return 550;
      break;

      case 'Туманность Ориона': return 600;
      break;

      case 'Звезда смерти': return 'договорная цена';
      break;

      default: return 'NaN';
    };
  } else if (need === 'no') {
    return 0;
  };
  return 'NaN';
};

var result = delivery('yes','Галактика Туманность Андромеды');
if (result === 0) {
  console.log('Доставка не требуется');
} else if (result === 'NaN') {
  console.log('Ошибка при расчете стоимости доставки');
} else {
  console.log(`Стоимость доставки: ${result} Q`);
};

console.log('Задача № 4. Дополнительная (необязательная)');
function globalFunction(price,years,string,need,place) {
  var sum = price + guarantee(years) + engraving(string) + delivery(need,place);
  console.log(`Общая стоимость заказа: ${sum} Q.`);
  console.log(`Из них ${guarantee(years)} Q за гарантийное обслуживание на ${years} год/года.`);
  console.log(`Гравировка на сумму ${engraving(string)} Q.`);
  console.log(`Доставка в область ${place}: ${delivery(need,place)} Q.`);
};

globalFunction(4000,1,'Это строка из нескольких слов','yes','Галактика Туманность Андромеды');