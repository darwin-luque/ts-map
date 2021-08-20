# MAP

This is a little application I did as part of a TypeScript course from Udemy. You can check it out [here](https://www.udemy.com/course/typescript-the-complete-developers-guide/) it's pretty cool! The application applies a kind of simple Object-Oriented Programming approach to Google Map application.

The application generates a random user and a random company, and marks it on the map. The Map has some basic information from both types on a pop up that shows when one of the Markers is shown.

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
