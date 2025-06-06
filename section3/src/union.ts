let a: string | number;
a = 1;
a = "hello";

let arr: (string | number)[];
arr = [1, "hello", 2, "world"];

type StringOrNumber = string | number;
type OneAndTwo = 1 | 2;

type Dog = {
  name: string;
  age: number;
};

type Person = {
  name: string;
  language: string;
};

type DogOrPerson = Dog | Person;

let dog: DogOrPerson = {
  name: "Buddy",
  age: 5,
};

let person: DogOrPerson = {
  name: "Alice",
  language: "English",
};

let dogAndPerson: DogOrPerson = {
  name: "CharlieAndAlice",
  age: 3,
  language: "French",
};
