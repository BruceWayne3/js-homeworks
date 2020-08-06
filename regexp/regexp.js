`use strict`;
console.log(`Домашнее задание к лекции 2.6 «Регулярные выражения»`);

function checkCoupon(code) {
  code = code.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if(code.length < 10) {
    return false;
  };
  codeReverse = code.split('').reverse().join('');
  if(code === codeReverse) {
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
console.log('');

function stripTags(text) {
  text = text.replace(/[\<\w\>\<\/\w\>]/g, '');
  return text;
};

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!'
];

for (let text of texts) {
  console.log(stripTags(text));
}
console.log('');

function validate(form, fields) {
  for(let field of fields) {
    if(typeof(field.rule) === 'string') {
      if(field.rule === 'email') {
        let emailEx = /\w\@\w/g;
        if(!emailEx.test(form.email)) {
          return false;
        };
      } else {
        let phoneEx = /8|\+7\d+/;
        if(!phoneEx.test(form.phone)) {
          return false;
        };
      };
    } else {
      if(!field.rule.test(form.name)) {
        return false;
      };
    };
  };
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
  { name: 'Bruce Wayne', email: 'brucewayne@gmail.com', phone: '12345678'}
];

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}
