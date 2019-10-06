`use strict`
const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

console.log('Задача № 1. Поиск клиентов.');
clients.findByName = function(name) {
  return clients.find(function(el) {
    return el.name === name;
  })
};

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

console.log('Задача № 2. Сортируем по сумме покупок.');
function compareByTotalSumm(left,right) {
  let firstClient = left.orders.reduce(function(memo,el) {
    memo += el;
    return memo;
  },0);

  let secondClient = right.orders.reduce(function(memo,el) {
    memo += el;
    return memo;
  },0);

  if (secondClient > firstClient) {
    return 1;
  } else if (secondClient === firstClient) {
    return 0;
  } else {
    return -1;
  };
};

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));

console.log('Задача № 3. Рассылка писем.');
function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(list) {
  let result = list.filter(function(el) {
    return el.isSubscribed === true;
  });
  return result.reduce(function(memo,el) {
    memo.push(el.email);
    return memo;
  },[]); 
};

getSubscribedEmails(clients).forEach(sendMail);