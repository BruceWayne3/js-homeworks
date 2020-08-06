`use strict`;
console.log(`Домашнее задание к лекции 4.1 «Символы и итераторы»`);

class BarcodeGenerator {
  constructor(size = 1) {
    this.size = size;
  }

  create() {
    let result = [];
    for(let i = 0; i < this.size; i++) {
      result.push(Math.floor(Math.random() * 10));
    }
    result = result.join('');
    if(this[BarcodeGenerator.prefix]) {
      this[Symbol()] = this[BarcodeGenerator.prefix];
      return `${this[BarcodeGenerator.prefix]}-${result}`;
    } else {
      return result;
    }
  }
}

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());
console.log('');

class HexRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: (current++).toString(16)
            };
            } else {
              return {
                done: true
          };
        }
      }
    }
  }
}
let queue = new HexRange(247, 253);
console.log(...queue);
console.log('');

class DateRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let from = this.from;
    let last = this.to;
    let current;

    return {
      next() {
        if(current === undefined) {
          current = from;
          return {
            done: false,
            value: from
          }
        }
        if(current.getDate() === last.getDate() && current.getMonth() === last.getMonth()) {
          return {
            done: true
          }
        } else if (current.getDay() === 5) {
          return {
            done: false,
            value: current = new Date(Date.parse(current) + 3 * 24 * 60 * 60 * 1000)
          }
        } else if(current.getDay() === 6) {
          return {
            done: false,
            value: current = new Date(Date.parse(current) + 2 * 24 * 60 * 60 * 1000)
          }
        } else {
          return {
            done: false,
            value: current = new Date(Date.parse(current) + 24 * 60 * 60 * 1000)
          }
        }
      }
    }
  }
}

const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}
