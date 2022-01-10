import { AxiosResponse } from 'axios';
import { IFetch } from './Fetch';

export interface IDate {
  fecha: () => Date;
  todos: () => Promise<AxiosResponse>;
}

export class DateP implements IDate {
  protected fetch: IFetch;
  constructor({ fetch }: { fetch: IFetch }) {
    this.fetch = fetch;
  }
  fecha = () => new Date();
  todos = async () => await this.fetch.obtener();
}
