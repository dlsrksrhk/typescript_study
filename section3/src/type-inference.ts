let a = 10; //number
let b = "hello"; //string
let c = true; //boolean
let d = [1, 2, 3]; //number[]

/**
 * 객체 리터럴 타입. 아래와 같이 동작.
 * object 타입 아님에 주의하자.
 * let e: { name: string; age: number; } = { name: "Alice", age: 30 };
 */
let e = { name: "Alice", age: 30 };

//function func(): string
function func() {
  return "Hello, World!";
}

//function printMessage(message?: string): string
function printMessage(message = "일시적인 오류입니다") {
  return message;
}

//any 타입으로 추론
let any;

//이때부터는 number로 추론
any = 1;
any.toFixed(2);

//이때부터는 string으로 추론
any = "hello";
any.toUpperCase();

const ten = 10; // const ten: 10 = 10;
