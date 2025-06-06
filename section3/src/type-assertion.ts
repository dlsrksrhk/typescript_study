type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "Alice";
person.age = 30;

let person2 = {
  name: "Bob",
  age: 25,
  hobby: "reading",
} as Person;

let num = 42 as const;

let cat = {
  name: "Whiskers",
  age: 5,
} as const;
