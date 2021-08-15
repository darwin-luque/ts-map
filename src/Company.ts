import faker from 'faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    try {
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    } catch {
      this.location = {
        lng: 0,
        lat: 0,
      };
    }
  }
}
