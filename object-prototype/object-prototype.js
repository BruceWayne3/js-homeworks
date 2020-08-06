`use strict`;
console.log(`Домашнее задание к лекции 2.2 «Прототип и конструктор объекта»`);

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    price: 10000,
    discount: 7,
    available: 3
  },
  {
    title: 'Ховерборд Mattel 2016',
    price: 9200,
    discount: 4,
    available: 14
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    price: 57000,
    discount: 0,
    available: 1
  }
];

const itemPrototype = {
  hold(amount = 1) {
    if (this.available < amount) {
      return false;
    }
    this.available -= amount;
    this.holded += amount;
    return true;
  },
  toString() {
    return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
  }
};

function createItem(title, amount) {
  const item = Object.create(itemPrototype);
  item.title = title;
  item.available = amount;
  item.holded = 0;
  return item;
}

const items = [];
for (let item of positions) {
  items.push(createItem(item.title, item.available));
}

items[0].hold(2);
items[1].hold(8);
items[1].hold(12);
items[2].hold(1);

for (let item of items) {
  console.log(`Товар ${item}`);
}
console.log('');

itemPrototype.unhold = function(amount = this.holded) {
  if (this.holded < amount) {
      return false;
    }
    this.available += amount;
    this.holded -= amount;
    return true;
};


items[0].unhold(1);
console.log(`Товар ${items[0]}`);
items[1].unhold();
console.log(`Товар ${items[1]}`);
items[2].unhold(2);
console.log(`Товар ${items[2]}`);
console.log('');

for(let position of positions) {
  const config = {
    get() {
      return this.price - (this.price * this.discount / 100);
    },
    set(newFinalPrice) {
      try {
        if(newFinalPrice > this.price) {
          throw 'Цена со скидкой больше базовой цены.';
        }
      this.discount = 100 - (newFinalPrice * 100 / this.price);
      } catch(err) {
        console.log(`Ошибка при расчете скидки: ${err}`);
      }
    }
  }

  Object.defineProperty(position, 'finalPrice', config);
};

console.log(positions[0].finalPrice); 
positions[2].finalPrice = 28500;
positions[2].finalPrice = 68500;
console.log(positions[2].discount);
console.log(positions[1].finalPrice); 
positions[0].finalPrice = 500;
console.log(positions[0].discount);
console.log('');

function isValidPosition(item, requiredFields) {
  let keys = Object.keys(item);
  if (keys.length !== requiredFields.length) {
    return false;
  };
  for(let requiredField of requiredFields) {
    if(!keys.includes(requiredField)) {
      return false;
    };
  };
  return true;
};

const requiredFields = [ 'title', 'price', 'discount' ];
let form1 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 0
};
let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
};
let form3 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800
};
if ( isValidPosition(form1, requiredFields) ) {
  console.log('Форма №1 заполнена верно');
} else {
  console.log('В форме №1 не заполнены необходимые поля');
}
if ( isValidPosition(form2, requiredFields) ) {
  console.log('Форма №2 заполнена верно');
} else {
  console.log('В форме №2 не заполнены необходимые поля');
}
if ( isValidPosition(form3, requiredFields) ) {
  console.log('Форма №3 заполнена верно');
} else {
  console.log('В форме №3 не заполнены необходимые поля');
}
