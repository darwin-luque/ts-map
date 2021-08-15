import faker from 'faker';

export const generateLocation: () => { lat: number; lng: number } = () => {
  try {
    return {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  } catch {
    return {
      lng: 0,
      lat: 0,
    };
  }
};
