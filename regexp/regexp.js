`use strict`
console.log('Задача № 1. Купон-палиндром.');
function checkCoupon(code) {
  let result = code.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
  if(result.length < 10) {
    return false;
  };
  let reverseResult = result.split('').reverse().join('');
  if (result === reverseResult) {
    return true;
  };
  return false;
};

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}

console.log('Задача № 2. Вырезаем теги.');
function stripTags(text) {
  let result = text.replace(/[\<\w\>\<\/\w\>]/g,'');
  return result;
};

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!'
];

for (let text of texts) {
  console.log(stripTags(text));
}

console.log('Задача № 3. Валидатор форм.');
function validate(formsData, dataRequirement) {
  let regExpression;
  for (let item of dataRequirement) {
    if (typeof item.rule === 'string') {
      switch (item.name) {
        case 'email' :
          regExpression = /^[a-zA-Z0-9][a-zA-Z0-9-_\.]*@/;
        break;
        case 'phone' :
          regExpression = /^\+7[\d]{10}/;
        break;
      }
      if (regExpression.test(formsData[item.name]) === false) {
        return false;
      }
    } else if (typeof item.rule !== 'string') {
      regExpression = item.rule;
      if (regExpression.test(formsData[item.name]) === false) {
        return false;
      }
    }
  }
  return true;
};

const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: 'email' },
  { name: 'phone', rule: 'phone' },
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' },
  { name: 'Bruce Wayne', email: 'Batman', phone: '8999666' },
];

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}