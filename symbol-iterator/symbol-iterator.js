`use strict`
console.log('Задача № 1. Генератор штрих-кодов');
class BarcodeGenerator {
  constructor(size = 1) {
    this.size = size;
  }
  create() {
    let code = [];
    for(let i = 0; i < this.size; i++) {
      code[i] = Math.floor(Math.random() * 10);
    };
    code = code.join('');
    let prefix = this[BarcodeGenerator.prefix];
    if(prefix === undefined) {
      return code;
    };
    return `${prefix}-${code}`;
  };
};

BarcodeGenerator.prefix = Symbol();

const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());

console.log(`Задача № 2. Электронная очередь`);
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
          let currentHex = current.toString(16);
          current++;
          return {
            done: false,
            value: currentHex
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  }
}

let queue = new HexRange(247, 253);
console.log(...queue);



console.log(`Задача № 3. Рабочие дни`);
class DateRange {
	constructor(from, to) {
    this.from = new Date(from.getTime());
    this.to = new Date(to.getTime());
  }
  [Symbol.iterator]() {
  	let from = new Date(this.from.getTime());
  	let to = new Date(this.to.getTime());
    return {
      current: new Date(from.getTime()),
      next() {
        let day = this.current.getDay();
        let date = this.current.getDate();
        if (day === 6) {
          this.current.setDate(date + 2);
        } else if (day === 0) {
          this.current.setDate(date + 1);
        }
        if (this.current > to) {
          return {
            done: true
          };
        }           
        let curDate = new Date(this.current.getTime());
        this.current.setDate(this.current.getDate() + 1);
        return {
          value: curDate,
          done: false
        }; 
      }
    };  
  }
}

const from = new Date(2017, 2, 13, 23, 59);
const to = new Date(2017, 2, 21, 0, 1);
let range = new DateRange(from, to);

for (let day of range) {
  console.log(day.toLocaleDateString('ru-Ru'));
}