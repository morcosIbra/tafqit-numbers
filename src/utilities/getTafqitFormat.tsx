import { maxNumLen } from './tafqitHelpers';
import {
  getFirstDigitFormat,
  getSecondDigitFormat,
  getThirdDigitFormat,
  getTripletFormat,
  getUnitFormat,
  getFinalTafqitFormat,
} from './tafqitHelpers';

const getTafqitFormat = (num: number | string): string => {
  const reversedNum = [...`${num}`].reverse();
  if (reversedNum.length > maxNumLen) return '';
  const tafqitMap = [];
  let currencyFormat = '';
  for (let tripletOrder = 0; tripletOrder < reversedNum.length; tripletOrder += 3) {
    const [firstDigit, secondDigit, thirdDigit]: string[] = [
      reversedNum[tripletOrder],
      reversedNum[tripletOrder + 1] || '',
      reversedNum[tripletOrder + 2] || '',
    ];
    let tripletUnitFormat = '';
    const tripletAmount = parseInt(`${thirdDigit}${secondDigit}${firstDigit}`, 10);

    const firstDigitFormat = getFirstDigitFormat(firstDigit, secondDigit);
    const secondDigitFormat = getSecondDigitFormat(secondDigit, firstDigit);
    const thirdDigitFormat = getThirdDigitFormat(thirdDigit);

    if (tripletOrder === 0) {
      currencyFormat = getUnitFormat(tripletAmount, tripletOrder);
    } else {
      tripletUnitFormat = getUnitFormat(tripletAmount, tripletOrder);
    }

    const tripletFormat = getTripletFormat(
      parseInt(secondDigit, 10),
      tripletUnitFormat,
      firstDigitFormat,
      secondDigitFormat,
      thirdDigitFormat,
    );
    if (tripletFormat) tafqitMap.unshift(tripletFormat);
  }
  return getFinalTafqitFormat(tafqitMap, currencyFormat);
};

export default getTafqitFormat;
