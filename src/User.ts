import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    try {
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };
    } catch {
      this.location.lat = 0;
      this.location.lng = 0;
    }
  }
}
