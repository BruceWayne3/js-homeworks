`use strict`
class Calendar {
  constructor(now = new Date()) {
    this.now = now;
  }

  setDate(now) {
    this.now = now;
  }

  get today() {
    return this.now.toLocaleString('ru-Ru');
  }
}

class PaymentTerminal {
  constructor(title, calendar) {
    this.title = title;
    this.calendar = calendar;
  }

  get status() {
    return this.isActive ? 'работает' : 'недоступен';
  }

  get isActive() {
    return this.checkActive();
  }

  checkActive() {
    return false;
  }
}

class RegistrationError extends Error {
  constructor(field = null) {
    super(`Ошибка в поле ${field}`);
    this.field = field;
  }
}

class NotValidEmailRegistrationError extends RegistrationError {
  constructor(field, email) {
    super(field);
    this.email = email;
  }
}

class NotUniqueRegistrationError extends RegistrationError {
  constructor(field, value) {
    super(field);
    this.value = value;
  }
}

class NotSameRegistrationError extends RegistrationError {}

function isValidEmail(email) {
  return /^\w+(\.\w+)*@\w+(\.\w+)+$/i.test(email);
}

function isUniqueLogin(login) {
  return !['admin', 'boss'].includes(login);
}

function checkPassword(original, copy) {
  return original === copy;
}

function registerNewUser(data) {
  if (!isValidEmail(data.email)) {
    throw new NotValidEmailRegistrationError('Адрес электронной почты', data.email);
  }
  if (!isUniqueLogin(data.login)) {
    throw new NotUniqueRegistrationError('Логин', data.login);
  }
  if (!checkPassword(data.password, data.passwordCopy)) {
    throw new NotSameRegistrationError('Пароль');
  }
}

console.log('Задача № 1. Работа с датой');
class SpaceDate extends Date {};
SpaceDate.prototype.copy = function() {
  return new SpaceDate(this);
};

let dateOriginal = new SpaceDate(2017, 1, 22);
let dateCopy = dateOriginal.copy();
dateCopy.setYear(2022);
console.log(`Оригинальная дата: ${dateOriginal.toLocaleDateString('ru-Ru')}`);
console.log(`Измененная копия: ${dateCopy.toLocaleDateString('ru-Ru')}`);

SpaceDate.prototype.getNextDate = function() {
  return new SpaceDate(new SpaceDate(this).getTime() + 24 * 60 * 60 * 1000);
};
SpaceDate.prototype.getPrevDate = function() {
  return new SpaceDate(new SpaceDate(this).getTime() - 24 * 60 * 60 * 1000);
};

let orderDate = new SpaceDate(2017, 2, 10);
let deliveryDate = orderDate.getNextDate();
console.log(`Дата заказа: ${orderDate.toLocaleDateString('ru-Ru')}`);
console.log(`Дата доставки: ${deliveryDate.toLocaleDateString('ru-Ru')}`);

let supplyDate = new SpaceDate(2017, 3, 3);
let requestDate = supplyDate.getPrevDate();
console.log(`Дата поставки: ${supplyDate.toLocaleDateString('ru-Ru')}`);
console.log(`Дата заявки поставщику: ${requestDate.toLocaleDateString('ru-Ru')}`);

SpaceDate.prototype.getDayBeginning = function() {
  let getDayBeginning = new SpaceDate(this);
  getDayBeginning = new SpaceDate(getDayBeginning.setHours(0));
  getDayBeginning = new SpaceDate(getDayBeginning.setMinutes(0));
  getDayBeginning = new SpaceDate(getDayBeginning.setSeconds(0));
  getDayBeginning = new SpaceDate(getDayBeginning.setMilliseconds(0));
  return getDayBeginning;
};
SpaceDate.prototype.getDayEnd = function() {
  let getDayEnd = new SpaceDate(this);
  getDayEnd = new SpaceDate(getDayEnd.setHours(23));
  getDayEnd = new SpaceDate(getDayEnd.setMinutes(59));
  getDayEnd = new SpaceDate(getDayEnd.setSeconds(59));
  getDayEnd = new SpaceDate(getDayEnd.setMilliseconds(999));
  return getDayEnd;
};

let someDate = new SpaceDate(2017, 2, 10, 12, 44);
let from = someDate.getDayBeginning();
let to = someDate.getDayEnd();
console.log(`В любое время с ${from.toLocaleString('ru-Ru')} по ${to.toLocaleString('ru-Ru')}`);

console.log('---------------');
console.log('Задача № 2. Терминалы оплаты');
class AllDayPaymentTerminal extends PaymentTerminal{};
AllDayPaymentTerminal.prototype.checkActive = function() {
  return true;
};

class AllDayExceptHolidaysPaymentTerminal extends PaymentTerminal{
  constructor(title, calendar, holidays) {
    super(title,calendar);
    this.holidays = holidays;
  }

  get status() {
    return this.isActive ? 'работает' : 'недоступен';
  }

  get isActive() {
    return this.checkActive();
  }

  checkActive() {
    return false;
  };
};

AllDayExceptHolidaysPaymentTerminal.prototype.checkActive = function() {
  for(holiday of holidays) {
      let result = new Date();
      result = new Date(result.setDate(holiday.date));
      result = new Date(result.setMonth(holiday.month));
      if(calendar.now.getMonth() === result.getMonth() && calendar.now.getDate() === result.getDate()) {
        return false;
      };
    };
    return true;
};

class WorkspacePaymentTerminal extends PaymentTerminal{};
WorkspacePaymentTerminal.prototype.checkActive = function() {
  return true;
};

WorkspacePaymentTerminal.prototype.checkActive = function() {
      if(calendar.now.getDay() === 0 || calendar.now.getDay() === 6) {
        return false;
      } else if(0 <= calendar.now.getHours() && calendar.now.getHours() < 8 || 18 <= calendar.now.getHours() && calendar.now.getHours() < 23) {
        return false;
      } else {
        return true;
      };
};

const holidays = [
  { date: 11, month: 3 - 1 },
  { date: 23, month: 2 - 1 }
];

const calendar = new Calendar();
const terminals = [
  new WorkspacePaymentTerminal('Терминал в офисе Убербанка', calendar),
  new AllDayPaymentTerminal('Терминал в аэропорту', calendar),
  new AllDayExceptHolidaysPaymentTerminal('Терминал в торговом центре',
    calendar, holidays)
];

function showTerminals(date) {
  if (date !== undefined) {
    calendar.setDate(date);
  }
  console.log(calendar.today);
  terminals
    .filter(terminal => terminal instanceof PaymentTerminal)
    .forEach(terminal => console.log(`${terminal.title} ${terminal.status}`));
}

showTerminals(new Date(2017, 2 - 1, 23));
showTerminals(new Date(2017, 3 - 1, 11));
showTerminals(new Date(2017, 3 - 1, 14, 18, 1));
showTerminals(new Date(2017, 3 - 1, 14, 8, 3));

console.log('---------------');
console.log('Задача № 3. Ошибки в форме регистрации');

function handleRegistration(data) {
  try {
    registerNewUser(data);
    console.log('Пользователь успешно зарегистрирован');
  } catch(err) {
    if (err instanceof NotValidEmailRegistrationError) {
      console.log('«test» не является адресом электронной почты');
    } else if(err instanceof NotUniqueRegistrationError) {
      console.log('Пользователь с логином «boss» уже зарегистрирован');
    } else if(err instanceof NotSameRegistrationError) {
      console.log('Введенные пароли не совпадают');
    };
  };
};

const notValidEmailUser = { email: 'test' };
handleRegistration(notValidEmailUser);

const notUniqueLoginUser = { email: 'test@test.co', login: 'boss' };
handleRegistration(notUniqueLoginUser);

const differentPwUser = { email: 'test@test.co', login: 'ivan',
  password: '123', passwordCopy: '456' };
handleRegistration(differentPwUser);

const normalUser = { email: 'test@test.co', login: 'ivan', password: '123', passwordCopy: '123' };
handleRegistration(normalUser);