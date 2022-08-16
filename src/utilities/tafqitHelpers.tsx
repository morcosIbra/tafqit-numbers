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
  if (tripletAmount >= 3 && tripletAmount <= 10) return tripletUnitMap[tripletOrder].plural;
  if (tripletAmount === 2) return tripletUnitMap[tripletOrder].muthana;
  if (tripletAmount === 0 && tripletOrder !== 0) return '';
  return tripletUnitMap[tripletOrder].default;
};

export const getTripletFormat = (
  tripletUnitFormat: string,
  firstDigitFormat: string,
  secondDigitFormat: string,
  thirdDigitFormat: string,
): string => {
  const formatsAppended = [thirdDigitFormat, firstDigitFormat, secondDigitFormat]
    .filter((format) => !!format)
    .join(` ${and}`);

  return `${formatsAppended}${formatsAppended ? ' ' : ''}${tripletUnitFormat}`;
};

export const getFinalTafqitFormat = (tafqitMap: string[], currencyFormat: string): string =>
  `${only} ${tafqitMap.join(` ${and}`)} ${currencyFormat} ${noMore}`;
