import {
  createContainer,
  asValue,
  asFunction,
  asClass,
  InjectionMode,
} from 'awilix';
import { DateP } from './src/classess/Date';
import Fetch from './src/classess/Fetch';
import { User } from './src/classess/User';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  dateP: asClass(DateP).singleton(),
  user: asClass(User).singleton(),
  fetch: asClass(Fetch).singleton(),
});

export default container;
