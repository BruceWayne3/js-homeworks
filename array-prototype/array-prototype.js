`use strict`;
console.log(`Домашнее задание к лекции 2.5 «Прототип и конструктор массива»`);

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

clients.findByName = function(name) {
  return clients.find(function(object) {
    return object.name === name;
  })
};

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un
const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined
console.log('');

function compareByTotalSumm(left, right) {
  const leftSum = left.orders.reduce(function (memo, el) {
    return memo += el;
  }, 0);

  const rightSum = right.orders.reduce(function (memo, el) {
    return memo += el;
  }, 0);

  if(leftSum < rightSum) {
    return 1;
  } else if(leftSum === rightSum) {
    return 0;
  } else {
    return -1;
  };
};

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));
console.log('');

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
};

function getSubscribedEmails(list) {
  const subscribers = list.filter(function(el) {
    return el.isSubscribed === true;
  });
  return subscribers.map(function(el) {
    return el.email;
  });
};

getSubscribedEmails(clients).forEach(sendMail);
