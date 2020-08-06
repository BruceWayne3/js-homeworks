`use strict`;

console.log(`Домашнее задание к лекции 1.4 «Функции»`);

function warrantyService(years) {
  if(years === 1) {
    return 1250;
  } else if(years === 2) {
    return 2300;
  } else {
    return 0;
  }
};

console.log(`Дополнительное гарантийное обслуживание: ${warrantyService(1)} Q`);
console.log('');

var text = 'I will always love you';
function engraving(string) {
  var words = string.split(' ');
  return words.length * 11;
};

console.log(`Подарочная упаковка и гравировка: ${engraving(text)} Q`);
console.log('');

function delivery(necessity, place) {
  if(necessity === 'yes') {
    switch (place) {
    case 'Луна' :
    return 150;
    break;

    case 'Крабовидная туманность' :
    return 250;
    break;

    case 'Галактика Туманность Андромеды' :
    return 550;
    break;

    case 'Туманность Ориона' :
    return 600;
    break;

    case 'Звезда смерти' :
    return `договорная цена`;
    break;

    default :
    return 'NaN';
    };
  } else {
    return 0;
  };
};

var result = delivery('yes', 'Туманность Ориона');

if(result === 'NaN') {
  console.log(`Ошибка при расчете стоимости доставки`);
} else if (result === 0) {
  console.log(`Доставка не требуется`);
} else {
  console.log(`Стоимость доставки: ${delivery('yes', 'Туманность Ориона')} Q`);
};
console.log('');

function globalFunction(price, years, string, necessity, place) {
  return price + warrantyService(years) + engraving(string) + delivery(necessity, place);
};

console.log(`Общая стоимость заказа: ${globalFunction(4000, 1, text, 'yes', 'Галактика Туманность Андромеды')} Q.`);
console.log(`Из них ${warrantyService(1)} Q за гарантийное обслуживание на 1 год/года.`);
console.log(`Гравировка на сумму ${engraving(text)} Q.`);
console.log(`Доставка в область Галактика Туманность Андромеды: ${delivery('yes', 'Галактика Туманность Андромеды')} Q.`);
