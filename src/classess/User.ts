import { IDate } from './Date';

export interface IUser {
  isAuth: () => boolean;
  getFecha: () => Date;
}

export class User implements IUser {
  protected date: IDate;
  constructor({ dateP }: { dateP: IDate }) {
    this.date = dateP;
  }
  isAuth = () => true;
  getFecha = () => this.date.fecha();
}
