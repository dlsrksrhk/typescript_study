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

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "TypeScript Basics",
  author: "John Doe",
};

// const len: number = post.author!.length;
const len: number = post.author?.length || 0;
