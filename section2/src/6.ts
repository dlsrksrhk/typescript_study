let anyVar: any = "Hello, World!";

let num: number = 10;
num = anyVar;

console.log(num); // 출력: NaN

let unknownVar: unknown = "Hello, World!";

if (typeof unknownVar === "string") {
  unknownVar.toUpperCase(); //오류 없음
}
