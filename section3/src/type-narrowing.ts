function narrowToValue(value: string | number) {
  if (typeof value === "string") {
    return `String value: ${value}`; //string으로 타입 추론
  }

  if (typeof value === "number") {
    return `Number value: ${value}`; //number로 타입 추론
  }

  return value;
}

function narrowToObject(value: Date | null) {
  if (value instanceof Date) {
    return value.toDateString(); //Date 타입으로 추론
  }

  return value;
}

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Alice",
  age: 30,
};

console.log(user instanceof Object); // true

function narrowToObject2(value: User | null) {
  if (value && "age" in value) {
    return `User name: ${value.name}, age: ${value.age}`; //User 타입으로 추론
  }
}
