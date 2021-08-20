# MAP

This is a little application I did as part of a TypeScript course from Udemy. You can check it out [here](https://www.udemy.com/course/typescript-the-complete-developers-guide/) it's pretty cool! The application applies a kind of simple Object-Oriented Programming approach to Google Map application.

The application generates a random user and a random company, and marks it on the map. The Map has some basic information from both types on a pop up that shows when one of the Markers is shown.

The random information is generated with the npm package [faker](https://www.npmjs.com/package/faker). You can generate a lot of random information about all sorts of different types of things. Check out the link on the references below to check out their docs.

## Interfaces

The interfaces used on the application are the following:

- Location

> ### Note
> This is more of a reference, this interface is not actually used

```js
interface Location {
  lat: number;
  lng: number;
}
```

- User

```js
interface User {
  name: string;
  location: Location;
  color?: string;
}
```

- Company

```js
interface Company {
  name: string;
  catchPhrase: string;
  location: Location;
  color?: string;
}
```

- Mappable

```js
interface Mappable {
  name: string;
  location: Location;
  color?: string;
}
```

## To use

1. Clone the repo ``git clone https://github.com/darwin-luque/ts-map.git``
2. Run ``npm install``
3. Run ``npm install -g typescript ts-node parcel`` (This step is optional in case you don't have this global packages)
4. Run ``npm start``
5. Enjoy!!

### Conclusion

This app is not the big deal but I really had fun building it! It's my first app of, which I hope, many more with TypeScript.

### References

- [Typescript](https://www.typescriptlang.org/)
- [Google Maps Developers Documentation](https://developers.google.com/maps/documentation/javascript/overview)
- [Faker](https://github.com/Marak/Faker.js#readme)
