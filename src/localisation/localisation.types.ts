export interface OriginNums {
  [key: string]: string;
}

export interface RefOverride {
  [key: string]: {
    default: string;
    [key: string]: string;
  };
}

export interface FirstRefOverride {
  [key: string]: {
    default: string;
    onlyDigit: string;
    [key: string]: string;
  };
}

export interface TripletUnitMap {
  [key: string]: {
    muthana: string;
    plural: string;
    default: string;
  };
}
