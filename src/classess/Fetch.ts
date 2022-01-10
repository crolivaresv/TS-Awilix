import axios, { AxiosResponse } from 'axios';
export interface IFetch {
  obtener: () => Promise<AxiosResponse>;
}

export default class Fetch implements IFetch {
  protected axios: any;
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  }
  obtener = async () => await this.axios.get('/todos');
}
