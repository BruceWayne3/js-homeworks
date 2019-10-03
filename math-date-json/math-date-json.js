`use strict`
let positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

console.log('Задача № 1. Учет по партиям.');
function lotCalculator(positions,number) {
  let lots = Math.ceil(number / positions.producer.lot);
  let total = lots * positions.producer.lot * positions.price;
  let object = {
    'lots': lots,
    'total': total
  };
  console.log(`${positions.title} ${number} штук: заказать партий ${lots}, стоимость ${total} Q`);
};

lotCalculator(positions[1],15);
lotCalculator(positions[0],16);
lotCalculator(positions[2],5);

console.log('Задача № 2. Отсрочка платежа.');
const deferedPayments = [];
function deferPay(producer,amount,shippingDate) {
  let paymentDate = new Date(shippingDate.getTime() + producer.deferPeriod * 24 * 60 * 60 * 1000);
  let object = {
    'producer': producer.name,
    'amount': amount,
    'paymentDate': paymentDate
  };
  deferedPayments.push(object);
  console.log(`${object.paymentDate.toLocaleDateString('ru-Ru')}: ${object.producer}, сумма ${object.amount} Q`);
};

deferPay(positions[0].producer, 7200, new Date(2030, 3, 10));
deferPay(positions[1].producer, 14600, new Date(2030, 3, 24));

console.log('Задача № 3. Пересчет по курсу валют.');
function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amount,from,to) {
  let currencyJSON = loadCurrencyJSON();
  try {
    let currency = JSON.parse(currencyJSON);
    let result = Number((amount * currency[from] / currency[to]).toFixed(2));
    return result;
  } catch(e) {
    console.error(e.name,e.message);
  };
};

let price1 = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${price1} USD`);
let price2 = convertCurrency(790, 'EUR', 'ZZZ');
console.log(`Сумма ${price2} ZZZ`);