type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
  bark: () => void;
};

let animal: Animal = {
  name: "코알라",
  color: "회색",
};

let dog: Dog = {
  name: "코코",
  color: "갈색",
  breed: "푸들",
  bark: () => console.log("멍멍"),
};

animal = dog;
dog = animal; //'Animal' 형식에 'Dog' 형식의 breed, bark 속성이 없습니다.ts(2739)

//초과 프로퍼티 검사
//객체 리터럴을 사용하여 객체를 생성할 때, 타입스크립트는 초과 프로퍼티 검사를 수행합니다.
let animal2: Animal = {
  name: "코알라",
  color: "회색",
};

function printAniamal(animal: Animal) {
  console.log(`이름: ${animal.name}, 색상: ${animal.color}`);
}

let dog2: Dog = {
  name: "코코",
  color: "갈색",
  breed: "푸들",
  bark: () => console.log("멍멍"),
};

printAniamal(dog2); //이렇게 하면 초과 프로퍼티 검사에 걸림
