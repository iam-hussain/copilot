export type ObjectOfString = {
  [key: string]: string;
};

export type ObjectOfNumber = {
  [key: string]: number;
};

export type ObjectOfArray = {
  [key: string]: Array<any>;
};

export type ObjectOfObject = {
  [key: string]: ObjectOfObject;
};

export interface Formatter {
  level: string;
  message: any;
  [key: string]: any;
}