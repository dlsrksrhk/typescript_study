function func1(): string {
  return "Hello, World!";
}

function func2(): void {
  console.log("This function does not return a value.");
}

function undefinedFunc(): undefined {
  return undefined; //return문이 없으면 오류
}

function neverFunc(): never {
  throw new Error("This function always throws an error and never returns.");
}
