type WhatIsThis = number & string; // never

let a: WhatIsThis;
let b: never;

a = b;
b = a;

type Dog = {
  name: string;
  age: number;
};

type Person = {
  name: string;
  language: string;
};

type DogAndPerson = Dog & Person;

//불가능
let dog: DogAndPerson = {
  name: "Buddy",
  age: 5,
};

//불가능
let person: DogAndPerson = {
  name: "Alice",
  language: "English",
};

//가능
let WolfMan: DogAndPerson = {
  name: "CharlieAndAlice",
  age: 3,
  language: "French",
};
