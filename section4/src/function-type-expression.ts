type NumberOperation = (a: number, b: number) => number;

const add: NumberOperation = (a, b) => {
  return a + b;
};

const subtract: NumberOperation = (a, b) => {
  return a - b;
};

const multiply: NumberOperation = (a, b) => {
  return a * b;
};

const divide: NumberOperation = (a, b) => {
  return a / b;
};

function calculate(operation: NumberOperation, a: number, b: number): number {
  return operation(a, b);
}

calculate(add, 5, 3); // 8
calculate(subtract, 5, 3); // 2
calculate(multiply, 5, 3); // 15
calculate(divide, 5, 3); // 1.6666666666666667

type Operattion = {
  (a: number, b: number): number;
};
