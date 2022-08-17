import {
  and,
  tripletUnitMap,
  firstToRefOverride,
  firstDigitPrefix,
  originNums,
  secondtoRefOverride,
  secondDigitPrefix,
  thirdDigitOverride,
  thirdDigitPrefix,
  only,
  noMore,
} from '../localisation';

export const notValidNum = (num: string) => {
  if (num === '' || num.length > 9) return true;
  const checkNum = Number(num);
  return checkNum !== parseInt(num, 10) || checkNum < 1 || !Number.isInteger(checkNum);
};

export const getTripletAmount = (firstDigit: number, secondDigit: number, thirdDigit: number) =>
  parseInt(
    [firstDigit, secondDigit, thirdDigit].reduce(
      (total, digit) => (Number.isNaN(digit) ? total : `${digit}${total}`),
      '',
    ),
  );

export const getFirstDigitFormat = (
  digit: number,
  secondDigit: number,
  thirdDigit: number,
  tripletOrder: number,
): string => {
  if (firstToRefOverride[digit]) {
    if (tripletOrder !== 0 && !secondDigit && !thirdDigit) return firstToRefOverride[digit].onlyDigit;

    return firstToRefOverride[digit][secondDigit]
      ? firstToRefOverride[digit][secondDigit]
      : firstToRefOverride[digit].default;
  }
  return `${originNums[digit]}${firstDigitPrefix}`;
};

export const getSecondDigitFormat = (digit: number, refDigit: number): string => {
  if (digit)
    return secondtoRefOverride[digit]
      ? secondtoRefOverride[digit][refDigit] || secondtoRefOverride[digit].default
      : `${originNums[digit]}${secondDigitPrefix}`;

  return '';
};

export const getThirdDigitFormat = (digit: number): string => {
  if (digit)
    return thirdDigitOverride[digit] ? thirdDigitOverride[digit].default : `${originNums[digit]}${thirdDigitPrefix}`;

  return '';
};

export const getUnitFormat = (tripletAmount: number, tripletOrder: number): string => {
  const tensAmount = tripletAmount % 100;
  if (tensAmount >= 3 && tensAmount <= 10) return tripletUnitMap[tripletOrder].plural;
  if (tripletAmount === 2) return tripletUnitMap[tripletOrder].muthana;
  if (tripletAmount === 0 && tripletOrder !== 0) return '';
  return tripletUnitMap[tripletOrder].default;
};

export const getTripletFormat = (
  tripletUnitFormat: string,
  firstDigitFormat: string,
  secondDigitFormat: string,
  thirdDigitFormat: string,
  secondDigit: number,
): string => {
  let formatsAppended = [thirdDigitFormat, firstDigitFormat, secondDigitFormat].reduce((finalFormat, format, index) => {
    if (!format) return finalFormat;
    if (!finalFormat || (index === 2 && secondDigit === 1 && firstDigitFormat)) return `${finalFormat} ${format}`;
    return `${finalFormat} ${and}${format}`;
  }, '');
  formatsAppended = formatsAppended.trim();

  return `${formatsAppended}${tripletUnitFormat && formatsAppended ? ' ' : ''}${tripletUnitFormat}`;
};

export const getFinalTafqitFormat = (tafqitMap: string[], currencyFormat: string): string =>
  `${only} ${tafqitMap.join(` ${and}`)} ${currencyFormat} ${noMore}`;
