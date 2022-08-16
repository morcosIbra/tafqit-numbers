import { OriginNums, RefOverride, TripletUnitMap } from './localisation.types';

export const firstDigitPrefix = 'ة';
export const secondDigitPrefix = 'ون';
export const thirdDigitPrefix = 'مائة';
export const and = 'و';
export const only = 'فقط';
export const noMore = 'لا غير';

export const originNums: OriginNums = {
  1: 'واحد',
  2: 'اثنان',
  3: 'ثلاث',
  4: 'أربع',
  5: 'خمس',
  6: 'ست',
  7: 'سبع',
  8: 'ثمان',
  9: 'تسع',
};

export const firstToRefOverride: RefOverride = {
  0: {
    default: '',
    notExist: 'صفر',
  },
  1: {
    1: 'احدي',
    default: 'واحد',
  },
  2: {
    1: 'اثنا',
    default: 'اثنان',
  },
  8: {
    default: 'ثمانية',
  },
};

export const secondtoRefOverride: RefOverride = {
  0: {
    default: '',
  },
  1: {
    0: 'عشرة',
    default: 'عشر',
  },
  2: {
    default: 'عشرون',
  },
};

export const thirdDigitOverride: RefOverride = {
  0: {
    default: '',
  },
  1: {
    default: 'مائة',
  },
  2: {
    default: 'مئتان',
  },
};

export const tripletUnitMap: TripletUnitMap = {
  0: {
    muthana: 'جنيه مصري',
    plural: 'جنيهات مصرية',
    default: 'جنيه مصري',
  },
  3: { muthana: 'الفان', plural: 'الاف', default: 'الف' },
  6: {
    muthana: 'مليونان',
    plural: 'ملايين',
    default: 'مليون',
  },
};
