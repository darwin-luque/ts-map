import faker from 'faker';
import { Mappable } from './CustomMap';
import { generateLocation } from './helpers';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color?: string = 'red';
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = generateLocation();
  }

  markerContent(): string {
    return `
    <h2>User Name: ${this.name}</h2>
    `
  }
}
