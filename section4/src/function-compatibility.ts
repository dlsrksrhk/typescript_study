//반환값 호환성
type FuncA = () => number;
type FuncB = () => 10;

let funcA: FuncA = () => 10;
let funcB: FuncB = () => 10;

funcA = funcB; //가능
// funcB = funcA; //불가능

//매개변수 호환성
type FuncC = (num: number) => void;
type FuncD = (num: 10) => void;

let funcC: FuncC = (num) => {};
let funcD: FuncD = (num) => {};

// funcC = funcD;//불가능
funcD = funcC;

funcC(20);

//매개변수의 개수 호환성
type FuncE = (a: number) => void;
type FuncF = (a: number, b: number) => void;

let funcE: FuncE = (a) => {};
let funcF: FuncF = (a, b) => {};

funcE = funcF; //불가능
funcF = funcE; //가능
