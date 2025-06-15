function add(a: number, b: number): string {
  return `a + b = ${a + b}`;
}

const addWithArrow = (a: number, b: number): string => {
  return `a + b = ${a + b}`;
};

const printInfo = (name: string, age?: number): void => {
  console.log(`Name: ${name}, Age: ${age && age - 1}`);
};

printInfo("Alice");

function addAll(...args: number[]) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
