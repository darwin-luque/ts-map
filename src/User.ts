import faker from 'faker';
import { generateLocation } from './helpers';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = generateLocation();
  }
}
