import {Injectable} from '@angular/core';

@Injectable()
export class MaskService {
  constructor() {}

  public static cpfMask() {
    return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  }

  public static cnpjMask() {
    return [
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '/',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ];
  }

  public static postalCodeMask() {
    return [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  }

  public static cnpjCPFMask(userInput) {
    const numbers = userInput.match(/\d/g);
    let numberLength = 0;
    if (numbers) {
      numberLength = numbers.join('').length;
    }

    if (numberLength > 11)
      return [/\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ];
    else
      return [
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ];
  }
  public static phoneMask(userInput) {
    const numbers = userInput.match(/\d/g);
    let numberLength = 0;
    if (numbers) numberLength = numbers.join('').length;

    if (numberLength > 10)
      return [
        '(',
        /[1-9]/,
        /[1-9]/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ];
    else
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }
}
