import faker from 'faker';
import { Mappable} from './CustomMap';
import { generateLocation } from './helpers';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color?: string = 'blue';
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = generateLocation();
  }

  markerContent(): string {
    return `
      <h2>Company Name: ${this.name}</h2>
      <h4>Catch Phrase: ${this.catchPhrase}</h4>
    `
  }
}
