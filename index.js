"use strict";

let numberFunction = Number(
  prompt(
    " Обери функцію:\n 1.Повертає найбільшу цифру з числа.\n 2.Визначити ступінь числа\n 3.Перша літера завжди велика.\n 4.Сумма після оплати податку\n 5.Випадкове ціле число в діапазоні\n 6.Рахує скільки разів певна буква повторюється в слові.\n 7.Конвертує долари в гривні та навпаки\n 8.Генерація випадкового паролю\n 9.Видаляє букву з речення\n 10.Перевірити на паліндром\n 11.Видалити букви які зустрічаються більше 1-го разу"
  )
);
debugger;
switch (numberFunction) {
  // -------------------------------------------------------------------
  case 1:
    const getMaxDigit = () => {
      let number = prompt("Введіть число");
      let bigNumber = 0;

      for (let i = 0; i <= String(number).length; i++) {
        if (String(number)[i] > bigNumber) {
          bigNumber = String(number)[i];
        }
      }

      return Number(bigNumber);
    };
    document.writeln(`<h1>Найбільше число: ${getMaxDigit()}</h1>`);
    break;
  // ------------------------------------------------------------------------
  case 2:
    const getPow = () => {
      let number1 = prompt("Введіть число");
      let number2 = prompt("Введіть степінь");

      let bigNumber = 1;

      for (let i = 0; i < number2; i++) {
        bigNumber *= number1;
      }

      return Number(bigNumber);
    };
    document.writeln(`<h1>Ступінь числа: ${getPow()}</h1>`);
    break;
  // -------------------------------------------------------------------
  case 3:
    const getBigLetter = () => {
      let str = prompt("Введіть текст");
      return str[0].toUpperCase() + str.toLowerCase().slice(1);
    };
    document.writeln(`<h1>Перша літера велика: ${getBigLetter()}</h1>`);
    break;
  // -------------------------------------------------------------------
  case 4:
    const getSum = () => {
      let param1 = prompt("Введіть сумму");
      let param2 = prompt("Введіть податок");
      let sum;
      sum = param1 - param1 * (param2 / 100);

      return sum.toFixed(2);
    };

    document.writeln(`<h1>Сумма після сплати податку: ${getSum()}</h1>`);
    break;
  // -------------------------------------------------------------------
  case 5:
    const getRandom = () => {
      let min = prompt("Введіть від якого числа");
      let max = prompt("Введіть по яке число");
      let numRandom = Number(min) + Math.random() * (Number(max) - Number(min));
      return Math.floor(numRandom);
    };

    document.writeln(`<h1>Випадкове число в діапазоні: ${getRandom()}</h1>`);
    break;
  // -------------------------------------------------------------------
  case 6:
    const getCounterLetter = () => {
      let param1 = prompt("Введіть слово");
      let param2 = prompt("Введіть яку букву рахувати");
      let number = 0;
      for (let i = 0; i <= param1.length; i++) {
        if (param1[i] == param2) {
          number += 1;
        }
      }

      return number;
    };

    document.writeln(`<h1>Кількість букв у слові: ${getCounterLetter()}</h1>`);
    break;
  // -------------------------------------------------------------------
  case 7:
    const getConvertCurrency = () => {
      let param1 = prompt("Введіть валюту");
      let number = 0;
      if (param1.slice(-1) === "$") {
        number = param1.slice(0, -1) * 8 + "UAH";
      } else if (param1.toLowerCase().substr(-3) === "uah") {
        number = param1.slice(0, -3) / 8 + "$";
      } else {
        number = "Такої валюти немає!!";
      }
      return number;
    };

    document.writeln(
      `<h1>Конвертація валюти (Доллар по 8): ${getConvertCurrency()}</h1>`
    );
    break;
  // -------------------------------------------------------------------
  case 8:
    const getRandomPassword = () => {
      let param1 = prompt("Введіть кількість символів");
      if (param1 === "") {
        param1 = 8;
      } else if (isNaN(param1)) {
        return "Ну не, тільки числа";
      }

      let password = Math.random().toFixed(param1) * 10 ** param1;

      return password;
    };

    document.writeln(`<h1>Генерація паролю: ${getRandomPassword()}</h1>`);
    break;
  // -------------------------------------------------------------------
  case 9:
    const deleteLetters = () => {
      let param1 = prompt("Введіть слово");
      let param2 = prompt("Введіть букву для видалення");
      let newLetter = "";
      for (let i = 0; i < param1.length; i++) {
        if (param1[i] !== param2) {
          newLetter += param1[i];
        }
      }

      return newLetter;
    };

    document.writeln(`<h1>Видалення букви: ${deleteLetters()}</h1>`);
    break;
  // -------------------------------------------------------------------

  case 10:
    const getPalyndrom = () => {
      let param1 = prompt("Введіть слово");
      let newStr = "";

      for (let i = param1.length - 1; i >= 0; i--) {
        newStr += param1[i];
      }

      if (
        newStr.toUpperCase().replace(/ /g, "") ===
        param1.toUpperCase().replace(/ /g, "")
      ) {
        return "Yes";
      } else {
        return "No";
      }
    };

    document.writeln(`<h1>Перевірка на паліндром: ${getPalyndrom()}</h1>`);
    break;
  // -------------------------------------------------------------------

  case 11:
    const deleteDuplicateLetter = () => {
      let param1 = prompt("Введіть слово").toLowerCase();
      let indexParam;
      let sentence = "";
      let paramNumber;
      for (let i = 0; i <= param1.length; i++) {
        if (paramNumber == 1) {
          sentence += indexParam;
        }
        indexParam = param1[i];
        paramNumber = 0;
        if (true) {
          paramNumber = 0;
          for (let j = 0; j < param1.length; j++) {
            if (param1[j] === indexParam) {
              paramNumber += 1;
            }
          }
        }
      }
      return sentence;
    };

    document.writeln(
      `<h1>Видалення дублікатів: ${deleteDuplicateLetter()}</h1>`
    );
    break;
}
