import { getTripletAmount, notValidNum } from './tafqitHelpers';
import {
  getFirstDigitFormat,
  getSecondDigitFormat,
  getThirdDigitFormat,
  getTripletFormat,
  getUnitFormat,
  getFinalTafqitFormat,
} from './tafqitHelpers';

const getTafqitFormat = (num: string): string => {
  if (notValidNum(num)) return '';

  const reversedNum = [...`${num}`].reverse();
  const tafqitMap = [];
  let currencyFormat = '';
  for (let tripletOrder = 0; tripletOrder < reversedNum.length; tripletOrder += 3) {
    const [firstDigit, secondDigit, thirdDigit]: number[] = [
      parseInt(reversedNum[tripletOrder]),
      parseInt(reversedNum[tripletOrder + 1]),
      parseInt(reversedNum[tripletOrder + 2]),
    ];
    let tripletUnitFormat = '';

    const tripletAmount = getTripletAmount(firstDigit, secondDigit, thirdDigit);

    const firstDigitFormat = getFirstDigitFormat(firstDigit, secondDigit, thirdDigit, tripletOrder);
    const secondDigitFormat = getSecondDigitFormat(secondDigit, firstDigit);
    const thirdDigitFormat = getThirdDigitFormat(thirdDigit);

    if (tripletOrder === 0) currencyFormat = getUnitFormat(tripletAmount, tripletOrder);
    else tripletUnitFormat = getUnitFormat(tripletAmount, tripletOrder);

    const tripletFormat = getTripletFormat(tripletUnitFormat, firstDigitFormat, secondDigitFormat, thirdDigitFormat);
    if (tripletFormat) tafqitMap.unshift(tripletFormat);
  }
  return getFinalTafqitFormat(tafqitMap, currencyFormat);
};

export default getTafqitFormat;
