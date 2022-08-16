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

export const maxNumLen = 9;

export const getFirstDigitFormat = (digit: string, refDigit: string): string => {
  if (firstToRefOverride[digit]) {
    return !refDigit
      ? firstToRefOverride[digit].notExist || ''
      : firstToRefOverride[digit][refDigit] || firstToRefOverride[digit].default;
  }

  return `${originNums[digit]}${firstDigitPrefix}`;
};

export const getSecondDigitFormat = (digit: string, refDigit: string): string => {
  if (digit)
    return secondtoRefOverride[digit]
      ? secondtoRefOverride[digit][refDigit] || secondtoRefOverride[digit].default
      : `${originNums[digit]}${secondDigitPrefix}`;

  return '';
};

export const getThirdDigitFormat = (digit: string): string => {
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
  secondDigit: number,
  tripletUnitFormat: string,
  firstDigitFormat: string,
  secondDigitFormat: string,
  thirdDigitFormat: string,
): string => {
  const secondAnd = firstDigitFormat && secondDigitFormat && secondDigit !== 1 ? and : '';
  const thirdAnd = thirdDigitFormat && (firstDigitFormat || secondDigitFormat) && and;

  return `${appendDigitFormat(thirdDigitFormat)}${thirdAnd}${appendDigitFormat(
    firstDigitFormat,
  )}${secondAnd}${appendDigitFormat(secondDigitFormat)}${tripletUnitFormat}`;
};

const appendDigitFormat = (digitFormat: string): string => (digitFormat ? `${digitFormat} ` : '');

export const getFinalTafqitFormat = (tafqitMap: string[], currencyFormat: string): string =>
  `${only} ${tafqitMap.join(` ${and}`)}${currencyFormat} ${noMore}`;
